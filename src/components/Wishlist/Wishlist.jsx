import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { getWishlistItems } from "../../utils/localStorageUtils";
import { toast } from "react-toastify";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const items = getWishlistItems();
        setWishlistItems(items);
    }, []);

    const handleDelete = (productId) => {
        const updatedItems = wishlistItems.filter(item => item.product_id !== productId);
        setWishlistItems(updatedItems);
        localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
        toast.error('product removed from wishlist');
    };

    return (
        <div className="py-10">
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-3xl font-bold mb-6">Wishlist</h2>
                <div className="mb-6">
                    {wishlistItems.length > 0 ? (
                        wishlistItems.map((item, index) => (
                            <div key={index} className="flex items-center flex-col md:flex-row mb-8 bg-white shadow-md px-5 rounded-lg relative">
                                <img src={item.product_image} alt={item.product_title} className="w-full md:w-[200px] h-auto rounded-lg mb-6 md:mb-0 md:mr-6" />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold mb-4">{item.product_title}</h1>
                                        <p className="mb-4">{item.description}</p>
                                        <p className="text-xl mb-4">Price: ${item.price}</p>
                                    </div>
                                </div>
                                <div className="text-4xl text-[#FF0000] absolute right-10 top-10" onClick={() => handleDelete(item.product_id)}><IoIosCloseCircleOutline /></div>
                            </div>
                        ))
                    ) : (
                        <p className="text-xl font-bold text-[#9538E2]">Your Wishlist is empty.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
