import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useTheme } from './../context/ThemeContext';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

const FoodItem = ({ food }) => {
    const [hoverRating, setHoverRating] = useState(null);

    const { theme, cart, addToCart, subtract } = useTheme();
    const count = cart[food.id] || 0;

    const [rating, setRating] = useState(() => {
        const storedRating = localStorage.getItem(`rating_${food.id}`);
        return storedRating ? JSON.parse(storedRating) : 0;
    });
    const handleRatingChange = (newRating) => {
        setRating(newRating);
        localStorage.setItem(`rating_${food.id}`, JSON.stringify(newRating));
    };
    // const handleRatingChange = (newRating) => {
    //     setRating(newRating);
    // };

    const bgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
    const descriptionTextClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

    return (
        <div key={food.id} className={`${bgClass} ${textClass} rounded-lg shadow-lg transition duration-300 flex flex-col`}>
            <div className="relative">
                <img src={`src/assets/images/food_list/${food.image}`} alt={food.name} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-l">{food.name}</p>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    size={20}
                                    className={`cursor-pointer transition duration-300 ${index < (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                                    onClick={() => handleRatingChange(index + 1)}
                                    onMouseEnter={() => setHoverRating(index + 1)}
                                    onMouseLeave={() => setHoverRating(null)}
                                />
                            ))}
                        </div>
                    </div>
                    <p className={`text-sm mb-4 ${descriptionTextClass}`}>{food.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <p className="text-xl">${food.price}</p>
                    {count === 0 ? (
                        <button
                            onClick={() => addToCart(food.id)}
                            className={`rounded-full border border-gray-200 w-6 h-6 flex items-center justify-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} bg-blue-700 text-white hover:bg-blue-600 transition duration-300 ease-in-out`}
                        >
                            <GoPlus className="text-3xl" />
                        </button>
                    ) : (
                        <div className={`flex justify-center items-center gap-4 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                            <button
                                onClick={() => subtract(food.id, 'menu')}
                                className={`rounded-full border border-gray-200 w-6 h-6 flex items-center justify-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} bg-gray-700 text-white hover:bg-gray-600 transition duration-300 ease-in-out`}
                            >
                                <FiMinus className="text-3xl" />
                            </button>
                            <input
                                className={`mx-2 border text-center w-8 ${theme === 'dark' ? "bg-gray-700 text-gray-200 border-gray-500" : "border-gray-300 text-gray-800"}`}
                                type="text"
                                value={count}
                                readOnly
                            />
                            <button
                                onClick={() => addToCart(food.id)}
                                className={`rounded-full border border-gray-200 w-6 h-6 flex items-center justify-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} bg-blue-700 text-white hover:bg-blue-600 transition duration-300 ease-in-out`}
                            >
                                <GoPlus className="text-3xl" />
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default FoodItem;
