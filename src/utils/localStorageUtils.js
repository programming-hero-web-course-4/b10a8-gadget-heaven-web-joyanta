export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
};

export const addToCart = (item) => {
    let cartItems = getCartItems();
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const getWishlistItems = () => {
    return JSON.parse(localStorage.getItem('wishlistItems')) || [];
};

export const addToWishlist = (item) => {
    let wishlistItems = getWishlistItems();
    wishlistItems.push(item);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
};
