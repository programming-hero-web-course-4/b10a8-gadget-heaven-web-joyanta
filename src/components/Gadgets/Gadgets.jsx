import { useLoaderData } from "react-router-dom";
import Gadget from "./Gadget/Gadget";

const Gadgets = () => {
    const gadgets = useLoaderData();
    console.log(gadgets);
    return (
        <div className="px-5">
            <h1 className="text-4xl font-bold text-center pb-12">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-col md:flex-row justify-center space-x-6 mb-24">
                <div className="flex md:flex-col flex-wrap border border-[#09080F1A] rounded-box justify-center md:justify-normal w-auto md:w-56 space-y-6 px-8 py-6 mx-auto md:mx-6 mb-6 md:mb-0">
                    <button className="btn hover:bg-[#9538E2] hover:text-white bg-white rounded-2xl">All Product</button>
                    <button className="btn hover:bg-[#9538E2] hover:text-white bg-white rounded-2xl">Laptops</button>
                    <button className="btn hover:bg-[#9538E2] hover:text-white bg-white rounded-2xl">Phones</button>
                    <button className="btn hover:bg-[#9538E2] hover:text-white bg-white rounded-2xl">Accessories</button>
                    <button className="btn hover:bg-[#9538E2] hover:text-white bg-white rounded-2xl">Iphone</button>
                    <button className="btn hover:bg-[#9538E2] hover:text-white bg-white rounded-2xl">Smart Watches</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;