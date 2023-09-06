<?php

namespace Scandiweb;

use Scandiweb\Relations\BelongsTo;
use Scandiweb\Relations\HasMany;

abstract class Model
{

    private Database $db;
    private array $attributes = [];

    /**
     * Table name
     */
    protected $table;

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable;


    /**
     * Eager loading
     */
    protected array $with = [];


    public function __construct()
    {
        $this->db = Container::get(Database::class);
    }


    public static function all(): array
    {
        $model = new static;
        $records = $model->db->get('*', $model->table);
        
        return array_map(function($record) {
            $model = new static;
            $model->attributes = $record;
            return $model;
        }, $records);
    }
    public function get(): array
    {
        $records = $this->db->get('*', $this->table);

        $eagerLoads = $this->preLoad($records);

        return array_map(function($record) use ($eagerLoads) {
            $model = new static;
            $model->attributes = $record;

            foreach ($eagerLoads as $relation => $instances) {
                $model->$relation = $instances;
            }

            return $model;
        }, $records);
    }

    public static function find(int|string $id)
    {
        $model = new static;
        $model->attributes = $model->db->getOne('*', $model->table, $id);
        return $model;
    }

    public static function first()
    {
        $model = new static;
        $model->attributes = $model->db->getFirst('*', $model->table);
        return $model;
    }
    
    public static function create(array $data)
    {
        $model = new static;
        
        if (isset($model->fillable)) {
            $data = array_filter($data, fn ($key) => in_array($key, $model->fillable), ARRAY_FILTER_USE_KEY);
        }

        $insert = $model->db->insert($model->table, $model->fill($data)->attributes());
        
        if ($insert) {
            return $model->find($model->db->pdo()->lastInsertId());
        }
    }
    
    public static function delete(array $ids)
    {
        $model = new static;
        return $model->db->deleteMany($model->table, $ids);
    }

    public function fill(array $data): static
    {
        $model = new static;

        foreach ($data as $key => $value) {
            $model->$key = $value;
        }

        return $model;
    }

    public function attributes(): array
    {
        return $this->attributes;
    }


    public function __get(string $attribute): mixed
    {
        if (!array_key_exists($attribute, $this->attributes)) {

            // Relationship check
            if (method_exists($this, $attribute)) {
                $relation = $this->$attribute();
                if ($relation instanceof BelongsTo || $relation instanceof HasMany) {
                    return $this->prepareRelation($relation);
                }
            }
        }

        // Support accessors
        if (method_exists($this, $attribute)) {
            $accessor = $this->$attribute();
            return ($accessor->get)($this->attributes[$attribute] ?? null);
        }

        return $this->attributes[$attribute] ?? null;
    }

    public function __set(string $name, mixed $value): void
    {
        if (property_exists($this, $name)) {
            return;
        }

        // Support mutators
        if (method_exists($this, $name) && !$this->$name() instanceof HasMany) {
            $accessor = $this->$name();
            $this->attributes[$name] = ($accessor->set)($value);
            return;
        }

        $this->attributes[$name] = $value;
    }

    /**
     * Relationships
     */
    public function belongsTo($model, $column): BelongsTo
    {
        return new BelongsTo($model, $column);
    }

    public function hasMany($model, $column): HasMany
    {
        return new HasMany($model, $column);
    }


    /**
     * Eager loading
     */
    public static function with(...$relations): static
    {
        $model = new static;
        $model->with = $relations;
        return $model;
    }

    private function preLoad(array $records): array
    {
        if (!count($this->with)) {
            return [];
        }

        $eagerLoads = [];
        foreach ($this->with as $relation) {
            if (!method_exists($this, $relation)) {
                continue;
            }

            $callable = $this->$relation();
            if (!($callable instanceof HasMany)) {
                continue;
            }

            $ids = trim(array_reduce($records, function($result, $record) {
                return "$result, {$record['id']}";
            }, ''), ', ');

            // Eager fetch the results
            $child = new $callable->model;
            $sub_records = $this->db->get('*', $child->table, "WHERE {$callable->column} IN ($ids)");

            $eagerLoads[$relation] = array_map(function($record) use ($callable) {
                $model = new $callable->model;
                $model->attributes = $record;
                return $model;
            }, $sub_records);
        }

        return $eagerLoads;
    }

    private function prepareRelation(BelongsTo|HasMany $callable)
    {
        $model = new $callable->model;

        if ($callable instanceof BelongsTo) {
            $model->attributes = $model->db->getOne('*', $model->table, $this->{$callable->column});
            return $model;
        }

        // Otherwise, HasMany relationship
        $records = $model->db->get('*', $model->table, "WHERE {$callable->column} = '{$this->id}'");

        return array_map(function($record) use ($callable) {
            $model = new $callable->model;
            $model->attributes = $record;
            return $model;
        }, $records);
    }
}
