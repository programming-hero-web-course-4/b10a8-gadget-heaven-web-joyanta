import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Banner from "../components/Banner/Banner";
import Dashboard from "../components/Dashboard/Dashboard";
import Statistics from "../components/Statistics/Statistics";
import Gadgets from "../components/Gadgets/Gadgets";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Cart from "../components/Cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";

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
                        loader: () => fetch('/gadgets.json'),
                    },
                ]
            },
            {
                path: "/productDetails/:productId",
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch(`/gadgets.json`),
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "",
                        element: <Cart></Cart>
                    },
                    {
                        path: "wishlist",
                        element: <Wishlist></Wishlist>
                    }
                ],
            },
        ],
        errorElement: <ErrorBoundary />,
    },
]);

export default routes;