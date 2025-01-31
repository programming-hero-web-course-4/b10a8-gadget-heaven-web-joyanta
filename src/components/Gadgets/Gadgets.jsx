import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Gadget from "./Gadget/Gadget";
import { Helmet } from "react-helmet-async";

const Gadgets = () => {
    const gadgets = useLoaderData();
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        setFilteredGadgets(gadgets);
    }, [gadgets]);

    const sortGadgets = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredGadgets(gadgets);
        } else {
            const filtered = gadgets.filter(gadget => gadget.category === category);
            setFilteredGadgets(filtered);
        }
    }

    const getButtonClass = (category) => {
        return `btn ${activeCategory === category ? 'bg-[#9538E2] text-white' : 'bg-white'} hover:bg-[#9538E2] hover:text-white rounded-2xl h-12 md:h-14`;
    }

    return (
        <div className="px-5">
            <Helmet>
                <title>Gadgets | Gadget Heaven</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center pb-12">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-col md:flex-row justify-center space-x-6 mb-24">
                <div className="flex md:flex-col flex-wrap border border-[#09080F1A] rounded-box justify-center md:justify-normal w-auto md:w-56 space-y-6 px-8 py-6 mx-auto md:mx-6 mb-6 md:mb-0">
                    <button onClick={() => sortGadgets('All')} className={getButtonClass('All')}>All Product</button>
                    <button onClick={() => sortGadgets('Laptops')} className={getButtonClass('Laptops')}>Laptops</button>
                    <button onClick={() => sortGadgets('Phones')} className={getButtonClass('Phones')}>Phones</button>
                    <button onClick={() => sortGadgets('Accessories')} className={getButtonClass('Accessories')}>Accessories</button>
                    <button onClick={() => sortGadgets('iPhone')} className={getButtonClass('iPhone')}>Iphone</button>
                    <button onClick={() => sortGadgets('Smart Watches')} className={getButtonClass('Smart Watches')}>Smart Watches</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-[#09080F1A] rounded-box p-6">
                    {
                        filteredGadgets.length > 0 ? (
                            filteredGadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                        ) : (
                            <p className="text-[#9538E2] text-center text-5xl md:text-8xl font-bold col-span-full">Product Not available.</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;