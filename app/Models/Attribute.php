<?php

namespace App\Models;

use Scandiweb\Model;
use Scandiweb\Relations\BelongsTo;
use Scandiweb\Relations\HasMany;

class Attribute extends Model
{
    /**
     * Table name
     */
    public $table = 'attributes';

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable = ['name', 'type', 'product_id'];


    /**
     * Attribute values Accessor
     */
    protected function items(): \Scandiweb\Casts\Attribute
    {
        return \Scandiweb\Casts\Attribute::make(
            get: fn () => $this->attributeValues,
        );
    }

    /**
     * Relationships
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function attributeValues(): HasMany
    {
        return $this->hasMany(AttributeValue::class, 'attribute_id');
    }

}