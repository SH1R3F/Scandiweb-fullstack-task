<?php

namespace App\Graphql\Resolvers;

use App\Models\Order;

class OrderResolver
{
    public static function placeOrder(array $rootValue, array $args): array
    {
        $total = 0;
        foreach ($args['order'] as $product) {
            $total += $product['prices'][0]['amount'];
        }

        $order = Order::create([
            'order_details' => $args['order'],
            'order_status' => 'received',
            'total' => $total,
            'created_at' => date('Y-m-d H:i:s')
        ]);

        return ['message' => "Order with number #{$order->id} placed successfully!"];
    }

}