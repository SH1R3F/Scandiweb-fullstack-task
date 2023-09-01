<?php

namespace App\Http\Controllers;


use App\Graphql\Resolvers\CategoryResolver;
use GraphQL\GraphQL;
use GraphQL\Utils\BuildSchema;

class GraphQLController
{

    public function index()
    {
        $schema = BuildSchema::build(file_get_contents(__DIR__ . '/../../../graphql/schema.graphql'));

        $rawInput = file_get_contents('php://input');
        $requestData = json_decode($rawInput, true);

        $payload = $requestData['query'] ?? $requestData['mutation'] ?? null;
        $variables = $requestData['variables'] ?? null;

        try {
            $result = GraphQL::executeQuery($schema, $payload, $this->getResolvers(), null, $variables);
            $output = $result->toArray();
        } catch (\Exception $e) {
            $output = [
                'errors' => [
                    [
                        'message' => $e->getMessage()
                    ]
                ]
            ];
        }
        header('Content-Type: application/json');
        echo json_encode($output, JSON_THROW_ON_ERROR);
    }

    /**
     * @return array
     */
    private function getResolvers(): array
    {
        return [
            'categories' => fn(array $rootValue, array $args) => CategoryResolver::getCategories($rootValue, $args),
            'category'   => fn(array $rootValue, array $args) => CategoryResolver::getCategory($rootValue, $args),
        ];
    }
}