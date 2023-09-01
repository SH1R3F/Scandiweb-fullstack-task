<?php

namespace App\Models;

use Scandiweb\Casts\Attribute;
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

    /**
     * Currency Accessor
     */
    protected function currency(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => json_decode($value, 1),
        );
    }

}