import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Banner from "../components/Banner/Banner";
import Dashboard from "../components/Dashboard/Dashboard";
import Statistics from "../components/Statistics/Statistics";
import Gadgets from "../components/Gadgets/Gadgets";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>,
                children: [
                    {
                        path: "/",
                        element: <Gadgets></Gadgets>,
                        loader: () => fetch('gadgets.json'),
                    },
                ]
            },
            {
                path: "/productDetails/:"
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