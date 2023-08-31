<?php

namespace App\Models;

use Scandiweb\Model;
use Scandiweb\Relations\BelongsTo;

class Price extends Model
{
    /**
     * Table name
     */
    public $table = 'prices';

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable = ['amount', 'currency', 'product_id'];

    /**
     * Relationships
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

}