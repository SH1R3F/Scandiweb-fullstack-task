<?php

namespace Scandiweb;

use Scandiweb\Exceptions\MethodNotAllowed;
use Scandiweb\Exceptions\RouteNotFound;

class Router
{
    private static array $routes = [];
    private static array $views  = [];
    private static $fallback;


    private static function addRoute(string $request_method, string $path, string|callable|array $action): void
    {
        $path = rtrim($path, '/');

        if ($request_method === 'VIEW') {
            static::$views[$path] = $action;
        } else {
            static::$routes[$path][$request_method] = $action;
        }
    }

    public static function get(string $path, callable|array $action): void
    {
        static::addRoute('GET', $path, $action);
    }

    public static function post(string $path, callable|array $action): void
    {
        static::addRoute('POST', $path, $action);
    }

    public static function delete(string $path, callable|array $action): void
    {
        static::addRoute('DELETE', $path, $action);
    }

    public static function view(string $path, $view): void
    {
        static::addRoute('VIEW', $path, $view);
    }

    public static function fallback(callable|array $action): void
    {
        static::$fallback = $action;
    }

    /**
     * Add other request methods here if needed
     */


    /**
     * Route Resolver
     */
    public static function resolve($url)
    {
        ['path' => $path] = parse_url($url);
        $path = rtrim($path, '/');

        if (!isset(static::$routes[$path])) {
            if (isset(static::$views[$path])) {
                return self::resolveView(static::$views[$path]);
            }

            if (is_callable(static::$fallback)) {
                $action = static::$fallback;
                return $action();
            }

            throw new RouteNotFound();
        }

        // Support different form methods (PUT, DELETE)
        if (isset($_POST['_method']) && in_array($_POST['_method'], ['DELETE', 'PUT'])) {
            $_SERVER['REQUEST_METHOD'] = $_POST['_method'];
        }

        if (!isset(static::$routes[$path][$_SERVER['REQUEST_METHOD']])) {
            throw new MethodNotAllowed;
        }


        $action = static::$routes[$path][$_SERVER['REQUEST_METHOD']];

        if (is_array($action)) {
            [$class, $method] = $action;

            return call_user_func([Container::get($class), $method], []);
        }

        return $action();
    }

    /**
     * View Resolver
     */
    public static function resolveView($view)
    {
        return View::make($view);
    }
}
