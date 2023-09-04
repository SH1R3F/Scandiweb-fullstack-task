import './App.css';
import React from "react";
import HomePage from "./route/HomePage/HomePage.container";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ProductPage from "./route/ProductPage/ProductPage.component";
import CategoryPage from "./route/CategoryPage/CategoryPage.container";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/:categoryId?",
                element: <CategoryPage/>
            },
            {
                path: "/product/:productId",
                element: <ProductPage/>
            },
        ],
    },
]);

export class App extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <RouterProvider router={router}/>
            </div>
        );
    }
}

export default App;
