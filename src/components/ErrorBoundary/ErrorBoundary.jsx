import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5]">
            <h1 className="text-2xl md:text-5xl font-bold text-[#9538E2] mb-4">Unexpected Application Error!</h1>
            <p className="text-lg text-gray-700 mb-4">{error.statusText || error.message}</p>
            <Link to='/' className="btn bg-[#9538E2] text-white rounded-4xl py-2 px-4">Back to Home</Link>
        </div>
    );
};

export default ErrorBoundary;
