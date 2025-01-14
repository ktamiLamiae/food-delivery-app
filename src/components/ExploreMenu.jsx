import { useState } from 'react';
import menu_1 from '../assets/images/exploreMenu/menu_1.png';
import menu_2 from '../assets/images/exploreMenu/menu_2.png';
import menu_3 from '../assets/images/exploreMenu/menu_3.png';
import menu_4 from '../assets/images/exploreMenu/menu_4.png';
import menu_5 from '../assets/images/exploreMenu/menu_5.png';
import menu_6 from '../assets/images/exploreMenu/menu_6.png';
import menu_7 from '../assets/images/exploreMenu/menu_7.png';
import menu_8 from '../assets/images/exploreMenu/menu_8.png';
import menu_9 from '../assets/images/exploreMenu/menu_9.png';
import menu_10 from '../assets/images/exploreMenu/menu_10.png';

const ExploreMenu = ({ onCategorySelect }) => {
    const menu_list = [
        { menu_name: "Salad", menu_image: menu_1 },
        { menu_name: "Tacos", menu_image: menu_2 },
        { menu_name: "Desserts", menu_image: menu_3 },
        { menu_name: "Sandwich", menu_image: menu_4 },
        { menu_name: "Cake", menu_image: menu_5 },
        { menu_name: "Pure Veg", menu_image: menu_6 },
        { menu_name: "Pasta", menu_image: menu_7 },
        { menu_name: "Burger", menu_image: menu_8 },
        { menu_name: "Pizza", menu_image: menu_9 },
        { menu_name: "Drinks", menu_image: menu_10 }
    ];

    const [selectedCategory, setSelectedCategory] = useState(menu_list[0].menu_name);

    const handleCategoryClick = (menuCategory) => {
        setSelectedCategory(menuCategory);
        onCategorySelect(menuCategory); 
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 text-center pt-2">
                {menu_list.map((menuItem, index) => (
                    <div
                        onClick={() => handleCategoryClick(menuItem.menu_name)}
                        className={`flex flex-col items-center cursor-pointer ${selectedCategory === menuItem.menu_name ? 'active' : ''}`}
                        key={index}
                    >
                        <div
                            className={`relative ${selectedCategory === menuItem.menu_name ? 'outline outline-4 outline-blue-600 rounded-full' : ''
                                }`}
                        >
                            <img
                                src={menuItem.menu_image}
                                alt={menuItem.menu_name}
                                className={`w-[7.5vw] min-w-[60px] rounded-full transition-all duration-300 ${selectedCategory === menuItem.menu_name ? 'scale-90' : ''
                                    }`}
                            />
                        </div>

                        <p className="text-[#747474] mt-2 text-[max(1.4vw,12px)]">{menuItem.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr className="bg-gray-400 my-2 h-[2px] border-none" />
        </div>
    );
};

export default ExploreMenu;
