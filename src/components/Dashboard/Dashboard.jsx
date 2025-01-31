import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('cart');

    useEffect(() => {
        if (location.pathname.includes('wishlist')) {
            setActiveTab('wishlist');
        } else {
            setActiveTab('cart');
        }
    }, [location]);

    const getButtonClass = (tab) => {
        return `btn btn-lg rounded-4xl ${activeTab === tab ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`;
    };

    return (
        
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] py-10 mx-7.5">
                <div className="text-center pb-30">
                    <h4 className="text-3xl font-bold text-white pb-2">Dashboard</h4>
                    <p className="text-white font-thin pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="" className={getButtonClass('cart')}>Cart</Link>
                        <Link to="wishlist" className={getButtonClass('wishlist')}>Wishlist</Link>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;