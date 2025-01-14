import { useState } from 'react';
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Salad");

    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };
  return (
    <div>
        <ExploreMenu onCategorySelect={handleCategorySelect} />
        <FoodDisplay selectedCategory={selectedCategory} />
    </div>
  )
}

export default Menu