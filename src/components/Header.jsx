import { useTheme } from "../context/ThemeContext";
import bikedelivery from '../assets/images/bikedelivery.png';
import flesh from '../assets/images/flesh.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { theme } = useTheme();

    const items = [
        {
            title: "Burger",
            description: "Mushroom Sauce",
            price: "$5.15",
            image: "/path/to/burger.png",
        },
        {
            title: "Food Combo",
            description: "Mushroom Sauce",
            price: "$9.15",
            image: "/path/to/food-combo.png",
        },
        {
            title: "Pizza",
            description: "Mushroom Sauce",
            price: "$6.15",
            image: "/path/to/pizza.png",
        },
        {
            title: "Cake",
            description: "Mushroom Sauce",
            price: "$5.15",
            image: "/path/to/cake.png",
        },
    ];

    const textColor = theme === "dark" ? "text-white" : "text-black"; 
    const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-600";

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/menu');
    };
    return (
        <div className={`flex flex-row justify-between items-start w-full px-4 max-w-screen-xl mx-auto gap-6 mt-7`}>
            <div className="flex flex-col items-start w-1/2">
                {/* <div className="flex gap-4 items-center bg-green-100 py-2 px-4 rounded-full w-fit">
                    <div className="text-green-700 font-semibold">Free Shipping</div>
                    <div className="flex items-center justify-center bg-neutral-100 rounded-full h-12 w-12">
                        <img
                            loading="lazy"
                            src={bikedelivery}
                            alt="Bike Delivery Service Icon"
                            className="object-contain w-10 h-10"
                        />
                    </div>
                </div> */}

                <div className="flex flex-col rounded-none max-w-[270px]">
                    <div className="flex gap-10 justify-between py-1.5 pr-1.5 pl-4 w-full bg-green-700 bg-opacity-20 rounded-[32px]">
                        <div className="my-auto text-lg font-semibold text-green-700">
                            Free Shipping
                        </div>
                        <div className="flex flex-col items-center rounded-full bg-neutral-100 h-[54px] w-[54px]">
                            <img
                                loading="lazy"
                                src={bikedelivery}
                                className="object-contain aspect-square w-[54px] rounded-full"
                                alt="Bike delivery service icon"
                            />
                        </div>
                    </div>
                </div>
                <div className={`mt-6 flex flex-col grow font-bold text-8xl max-md:mt-8 max-md:text-4xl max-md:max-w-full ${textColor}`}>
                    <div>The Fastest</div>
                    <div>Delivery</div>
                    <div>
                        In <span className="text-blue-700">Your City</span>
                    </div>
                </div>

                <p className={`mt-6 text-lg md:mt-8 text-justify ${subTextColor}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus.
                </p>

                <div className="flex items-center gap-6 mt-10">
                    <button onClick={handleButtonClick} className={`px-6 py-3 text-lg font-medium text-white rounded-lg focus:ring-4 focus:ring-blue-300 bg-blue-700 hover:bg-blue-700`}>
                        Order Now
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center w-1/2">
                <img
                    loading="lazy"
                    src={flesh}
                    alt="Food Delivery Service Image"
                    className="object-contain w-full h-auto"
                />
            </div>


        </div>
    );
};

export default Header;
