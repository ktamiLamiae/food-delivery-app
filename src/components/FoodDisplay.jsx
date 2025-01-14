import { useContext, useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import { ThemeContext } from "../context/ThemeContext";
import { PulseLoader } from 'react-spinners';

const FoodDisplay = ({ selectedCategory }) => {
    const [foodList, setFoodList] = useState([]);
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "auto",
    };
    useEffect(() => {
        setLoading(true);
        fetch("/api/food_list")
            .then((response) => response.json())
            .then((data) => {
                const filteredItems = data.filter(item => item.category === selectedCategory);
                setFoodList(filteredItems);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [selectedCategory]);

    return (
        <div className="px-4 pb-8 pt-6">
            <h2 className="text-2xl font-semibold mb-4">Food List</h2>
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <PulseLoader color="#1D4ED8" loading={loading} cssOverride={override} size={15} />
                </div>
            ) : foodList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {foodList.map((food) => (
                        <FoodItem key={food.id} food={food} />
                    ))}
                </div>
            ) : (
                <p className={`mb-2 text-center ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                    No items found in this category.
                </p>
            )}
        </div>
    );
};

export default FoodDisplay;
