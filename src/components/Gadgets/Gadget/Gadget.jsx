import PropTypes from 'prop-types';

const Gadget = ({ gadget }) => {
    const {product_image, product_title, price} = gadget;
    return (
        <div className='grid justify-center'>
            <div className="card bg-base-100 shadow-sm border border-[#09080F1A] py-5">
                <figure>
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl w-full md:w-[300px]" />
                </figure>
                <div className='text-center'>
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p className='py-3'>Price: {price}k</p>
                    <div className="">
                        <button className="btn border border-[#9538E2] text-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Gadget.propTypes = {
    gadget: PropTypes.object,
}
export default Gadget;