import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const products = useLoaderData();
    const { productId } = useParams();
    const product = products.find(gadget => gadget.product_id === parseInt(productId));
    const { product_image, product_title, price, description, Specification, rating, availability } = product;

    return (
        <div className="bg-[#9538E2] py-10 relative mb-96">
            <div className="text-center pb-30">
                <h4 className="text-3xl font-bold text-white pb-2">Product Details</h4>
                <p className="text-white font-thin pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 absolute top-40 left-0 right-0">
                <div className="flex flex-col md:flex-row">
                    <img src={product_image} alt={product_title} className="w-full md:w-1/2 h-auto rounded-lg mb-6 md:mb-0 md:mr-6" />
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{product_title}</h1>
                            <p className="text-xl mb-4">Price: ${price}</p>
                            <button className="btn btn-sm bg-[#309C081A] rounded-4xl text-[#309C08] border-[#309C08] mb-5">{availability ? 'In Stock' : 'Stock Out'}</button>
                            <p className="mb-4">{description}</p>
                            <h4 className="text-lg font-bold">Specification:</h4>
                            <ul className="list-disc list-inside mb-4">
                                {Specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                            <p className="text-lg font-semibold">Rating: {rating}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <button className="btn bg-[#9538E2] text-white rounded-4xl py-2 px-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
