<?php

namespace App\Models;

use Scandiweb\Model;

class Category extends Model
{
    /**
     * Table name
     */
    public $table = 'categories';

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable = ['name'];

    /**
     * Relationships
     */
    public function products()
    {
        return $this->hasMany(Product::class, 'category_id');
    }
}