<?php

namespace App\Models;

use Scandiweb\Model;
use Scandiweb\Relations\BelongsTo;

class AttributeValue extends Model
{
    /**
     * Table name
     */
    public $table = 'attribute_values';

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable = ['id', 'value', 'display_value', 'attribute_id', 'product_id'];

    /**
     * Relationships
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

}