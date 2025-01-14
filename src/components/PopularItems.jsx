import { useTheme } from "../context/ThemeContext";
import MenuItems from "./MenuItems"
import { GrNext } from "react-icons/gr"

const PopularItems = () => {
    const { theme } = useTheme();
    const textColor = theme === "dark" ? "text-white" : "text-black";
    const subTitleColor = theme === "dark" ? "text-gray-400" : "text-blue-700";

    return (
        <>
            <div className="flex flex-col items-center rounded-none gap-2 px-0 pb-6 pt-6">
                <div className={`text-lg font-medium ${subTitleColor}`}>Product</div>
                <div className={`text-4xl font-bold ${textColor}`}>Most Popular Items</div>
                <MenuItems />
            </div>
        </>
    )
}

export default PopularItems