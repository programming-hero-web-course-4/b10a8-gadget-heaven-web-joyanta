import { toast } from 'react-toastify';
export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
};

export const addToCart = (item) => {
    let cartItems = getCartItems();
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    toast.success('product added to cart');
};

export const getWishlistItems = () => {
    return JSON.parse(localStorage.getItem('wishlistItems')) || [];
};

export const addToWishlist = (item) => {
    let wishlistItems = getWishlistItems();
    wishlistItems.push(item);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    toast.success('product added to wishlist');
};
