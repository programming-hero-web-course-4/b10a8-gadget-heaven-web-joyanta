const Footer = () => {
    return (
        <footer className="bg-base-200 text-black py-10">
            <div className="container mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                        <p className="text-sm">Your one-stop shop for the latest gadgets and accessories.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="hover:underline">Home</a></li>
                                <li><a href="/statistics" className="hover:underline">Statistics</a></li>
                                <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                                <li><a href="/wishlist" className="hover:underline">Wishlist</a></li>
                                <li><a href="/cart" className="hover:underline">Cart</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                            <ul className="space-y-2">
                                <li>Email: support@gadgetheaven.com</li>
                                <li>Phone: +1 234 567 890</li>
                                <li>Address: 123 Gadget Street, Tech City</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm">&copy; 2025 Gadget Heaven. All rights reserved Joyanta.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;