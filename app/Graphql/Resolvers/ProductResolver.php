<?php

namespace App\Graphql\Resolvers;

use App\Models\Product;

class ProductResolver
{
    public static function getProducts(array $rootValue, array $args): array
    {
        return Product::with('prices', 'attrs')->get();
    }

    public static function getProduct(array $rootValue, array $args): Product
    {
        return Product::find($args['id']);
    }
}