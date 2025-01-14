import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchAndUpdateMenuItems = async () => {
      try {
        const res = await fetch('/api/food_list');
        const data = await res.json();

        const updatedMenuItems = data.map(item => {
          const rating = localStorage.getItem(`rating_${item.id}`);
          return { ...item, rating: rating ? JSON.parse(rating) : 0 };
        });
        const sortedMenuItems = updatedMenuItems.sort((a, b) => b.rating - a.rating);
        setMenuItems(sortedMenuItems);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchAndUpdateMenuItems();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {menuItems.length > 0 ? (
        menuItems.slice(0, 8).map((item) => (
          <MenuItem
            key={item.id}
            food={item}
            initialRating={item.rating}
          />
        ))
      ) : (
        <p>Loading menu items...</p>
      )}
    </div>
  );
};

export default MenuItems;
