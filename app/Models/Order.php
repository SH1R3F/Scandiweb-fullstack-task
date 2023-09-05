<?php

namespace App\Models;

use Scandiweb\Casts\Attribute;
use Scandiweb\Model;

class Order extends Model
{
    /**
     * Table name
     */
    public $table = 'orders';

    /**
     * Fillable Attributes for mass assignment
     */
    protected $fillable = ['order_details', 'order_status', 'total', 'created_at'];

    /**
     * Order details Accessor and Mutator
     */
    protected function order_details(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => json_decode($value, 1),
            set: fn (array $value) => json_encode($value),
        );
    }
}