<?php

namespace App\Graphql\Resolvers;

use App\Models\Category;

class CategoryResolver
{
    public static function getCategories(array $rootValue, array $args): array
    {
        return Category::all();
    }

    public static function getCategory(array $rootValue, array $args): Category
    {
        if (!$args['id']) {
            return Category::first();
        }
        return Category::find($args['id']);
    }
}