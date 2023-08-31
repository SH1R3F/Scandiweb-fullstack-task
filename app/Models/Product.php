<?php

namespace App\Models;

use Scandiweb\Model;
use Scandiweb\Relations\BelongsTo;

class Product extends Model
{
    /**
     * Table name
     */
    public $table = 'products';

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable = ['name', 'in_stock', 'description', 'category_id'];

    /**
     * Relationships
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

}