import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className="max-w-[520px] w-full text-center">
                <div className="relative h-[200px] mb-5">
                    <h1 className="absolute top-1/2 left-1/2 text-[236px] font-light uppercase text-[#211b19] transform -translate-x-1/2 -translate-y-1/2">
                        Oops!
                    </h1>
                    <h2 className="absolute bottom-0 left-0 right-0 bg-white text-[#211b19] text-lg sm:text-2xl uppercase font-normal py-2 px-1">
                        404 - The Page can't be found
                    </h2>
                </div>
                <Link
                    to="/"
                    className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block font-bold uppercase text-white bg-blue-700 text-lg py-3 px-5 transition-all duration-200 hover:bg-blue-600 z-10"
                >
                    Go To Homepage
                </Link>
            </div>
        </div>
    )
}

export default NotFound