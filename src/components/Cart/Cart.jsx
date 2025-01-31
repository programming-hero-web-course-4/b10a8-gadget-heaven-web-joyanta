import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiSoundModuleFill } from "react-icons/ri";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [previousTotalPrice, setPreviousTotalPrice] = useState(0);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
        calculateTotalPrice(items);
    }, []);

    const calculateTotalPrice = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    };

    const sortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
        setCartItems(sortedItems);
    };

    const handlePurchase = () => {
        setPreviousTotalPrice(totalPrice);
        setShowModal(true);
        setTotalPrice(0);
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    const handleDelete = (productId) => {
        const updatedItems = cartItems.filter(item => item.product_id !== productId);
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        calculateTotalPrice(updatedItems);
    };

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-5 mb-6">
                <h2 className="text-3xl font-bold mb-6">Cart</h2>
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <span className="text-2xl font-bold">Total cost: ${totalPrice.toFixed(2)}</span>
                    <div className="space-x-3">
                        <button onClick={sortByPrice} className="btn border border-[#9538E2] text-[#9538E2] rounded-4xl" disabled={cartItems.length === 0}>Sort by Price <RiSoundModuleFill /></button>
                        <button onClick={handlePurchase} className="btn bg-[#9538E2] text-[#fff] rounded-4xl" disabled={cartItems.length === 0}>Purchase</button>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto p-6">
                <div className="mb-6">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex items-center flex-col md:flex-row mb-8 bg-white shadow-md px-5 rounded-lg relative">
                                <img src={item.product_image} alt={item.product_title} className="w-full md:w-[200px] h-auto rounded-lg mb-6 md:mb-0 md:mr-6" />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold mb-4">{item.product_title}</h1>
                                        <p className="mb-4">{item.description}</p>
                                        <p className="text-xl mb-4">Price: ${item.price}</p>
                                    </div>
                                </div>
                                <div className="text-4xl btn-2xl text-[#FF0000] absolute right-10 top-8 rounded-full" onClick={() => handleDelete(item.product_id)}><IoIosCloseCircleOutline /></div>
                            </div>
                        ))
                    ) : (
                        <p className="text-xl font-bold text-[#9538E2]">Your Products is empty.</p>
                    )}
                </div>
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center mx-auto">
                            <img src="/src/assets/Group.png" alt="" className="mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>
                            <p className="text-lg">Thanks for purchasing.</p>
                            <p className="text-lg mb-4">Total cost: ${previousTotalPrice.toFixed(2)}</p>
                            <button onClick={() => setShowModal(false)} className="btn bg-[#9538E2] text-[#fff] rounded-4xl">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;