import './App.css';
import React from "react";
import HomePage from "./route/HomePage/HomePage.component";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import CategoryPage from "./route/CategoryPage/CategoryPage.component";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <CategoryPage />
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
