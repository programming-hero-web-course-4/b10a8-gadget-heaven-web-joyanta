import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Banner from "../components/Banner/Banner";
import Dashboard from "../components/Dashboard/Dashboard";
import Statistics from "../components/Statistics/Statistics";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
        ],
    },
]);

export default routes;