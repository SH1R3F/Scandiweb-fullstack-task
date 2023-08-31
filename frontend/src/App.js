import './App.css';
import React from "react";
import HomePage from "./route/HomePage/HomePage.component";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
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
