<?php

use Scandiweb\Router;

Router::view('/', 'welcome');
Router::get('/graphql', [\App\Http\Controllers\GraphQLController::class, 'index']);