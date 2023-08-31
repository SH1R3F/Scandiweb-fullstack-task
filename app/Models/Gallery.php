<?php

namespace App\Models;

use Scandiweb\Model;
use Scandiweb\Relations\BelongsTo;

class Gallery extends Model
{
    /**
     * Table name
     */
    public $table = 'gallery';

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable = ['url', 'product_id'];

    /**
     * Relationships
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

}