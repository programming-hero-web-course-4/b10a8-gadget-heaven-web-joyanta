import { Outlet } from "react-router-dom";
import bannerImage from "../../assets/banner.jpg";
const Banner = () => {
    return (
        <div>
            <div className="bg-[#9538E2] w-[calc(100%-60px)] mx-auto px-5 rounded-b-xl pt-12 pb-40 lg:pb-64 mb-50 lg:mb-96 relative">
                <div className="text-center">
                    <h2 className="text-white text-4xl lg:text-6xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                    <p className="text-white font-light pt-6 pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <button className="btn text-[#9538E2] rounded-4xl py-6 px-6 text-lg font-bold">Shop Now</button>
                </div>
                <div className="absolute flex justify-center left-0 right-0 -bottom-30 lg:-bottom-60 px-5">
                    <div className=" bg-[#FFFFFF4D] p-3 border-2 border-white rounded-lg ">
                        <img className="w-[1280px] h-[200px] lg:h-[400px] rounded-lg" src={bannerImage} alt="banner image" />
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Banner;