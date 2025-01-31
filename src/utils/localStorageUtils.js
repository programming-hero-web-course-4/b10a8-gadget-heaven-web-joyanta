export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
};

export const addToCart = (item) => {
    let cartItems = getCartItems();
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
