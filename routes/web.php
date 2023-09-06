<?php

use Scandiweb\Router;

Router::get('/graphql', [\App\Http\Controllers\GraphQLController::class, 'index']);
Router::post('/graphql', [\App\Http\Controllers\GraphQLController::class, 'index']);
Router::fallback( function () {
    return \Scandiweb\View::make('welcome');
});
