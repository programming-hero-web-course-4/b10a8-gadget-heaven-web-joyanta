import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
    ComposedChart,
    Bar,
    Area,
    Scatter,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const Statistics = () => {
    const products = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] py-10 relative mx-7.5">
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-white pb-2">Statistics</h4>
                    <p className="text-white font-thin">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="py-10">
                <div className="max-w-7xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-6">Statistics</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart
                            data={products}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="product_title" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="price" barSize={20} fill="#413ea0" />
                            <Scatter dataKey="rating" fill="red" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistics;