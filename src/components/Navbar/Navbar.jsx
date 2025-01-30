import { Link, NavLink, useLocation } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const [bgColor, setBgColor] = useState('#9538E2');
    const [linkColor, setLinkColor] = useState('text-white');

    useEffect(() => {
        if (location.pathname.startsWith('/productDetails')) {
            setBgColor('white');
            setLinkColor('text-[#000]');
        } else {
            setBgColor('#9538E2');
            setLinkColor('text-white');
        }
    }, [location]);

    return (
        <div>
            <div className={`navbar w-[calc(100%-60px)] mx-auto px-5 py-3 mt-5 rounded-t-xl`} style={{ backgroundColor: bgColor }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu bg-[#9538E2] menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to='/' className={linkColor}>Home</NavLink>
                            <NavLink to='/statistics' className={linkColor}>Statistics</NavLink>
                            <NavLink to='/dashboard' className={linkColor}>Dashboard</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className={`text-md md:text-xl font-bold ${linkColor}`}>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 font-medium space-x-12 ${linkColor}`}>
                        <NavLink to='/' className={linkColor}>Home</NavLink>
                        <NavLink to='/statistics' className={linkColor}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={linkColor}>Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-2.5">
                    <span className="bg-white p-2 border border-[#0B0B0B1A] rounded-full">
                        <PiShoppingCart className="w-5 h-5" />
                    </span>
                    <span className="bg-white p-2 border border-[#0B0B0B1A] rounded-full">
                        <FaRegHeart className="w-5 h-5" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;