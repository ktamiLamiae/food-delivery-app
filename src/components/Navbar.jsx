import { CiMenuBurger, CiSearch, CiShoppingBasket } from "react-icons/ci";
import logo from '../assets/images/Logo.png';
import logo1 from '../assets/images/Logo1.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
    const { theme, toggleTheme, cart } = useTheme();
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour contrôler l'ouverture du menu
    const totalCount = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);

    // Fonction pour gérer les liens actifs et le thème
    const getLinkClass = (currentMenu) => {
        const linkStyles = `block py-2 px-3 rounded font-bold hover:text-blue-700`; // Style de base
        const activeLinkStyles = `text-blue-600`; // Style du lien actif
        const textColor = theme === "dark" ? "text-white" : "text-gray-900"; // Texte blanc en mode sombre, gris en mode clair

        return menu === currentMenu
            ? `${linkStyles} ${activeLinkStyles} ${textColor}`
            : `${linkStyles} ${textColor}`;
    };

    // Fonction pour gérer l'ouverture/fermeture du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed w-full z-10 top-0 border-gray-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.01)] ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
            <div className="w-[85%] mx-auto flex items-center justify-between px-0 pb-6 pt-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse hidden md:flex md:w-auto">
                    <img src={`${theme === 'light' ? logo : logo1}`} className="h-8" alt="Logo" />
                </div>

                <div className="flex md:hidden justify-between w-full">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo" />
                    </a>
                    <button
                        type="button"
                        className="text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-2.5"
                        id="menu-toggle-btn"
                        onClick={toggleMenu} // Utilisez la fonction toggleMenu pour ouvrir/fermer le menu
                    >
                        <CiMenuBurger className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex items-center space-x-4 md:order-2">
                    <button
                        type="button"
                        className="md:hidden text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-2.5 me-1"
                    >
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <CiSearch className={`w-5 h-5 ${theme === "light" ? "text-gray-500" : "text-gray-200"}`} />
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            className={`block w-full p-2 ps-10 text-sm border-2 ${theme === "dark" ? "text-gray-200 bg-gray-700 border-gray-400 focus:border-gray-100" : "text-gray-900 border-gray-300 focus:border-gray-400"} rounded-lg focus:outline-none`}
                            placeholder="Search..."
                        />
                    </div>
                    <div className="flex items-center hidden md:block">
                        <Link
                            to="/cart" 
                            className={`group inline-flex shrink-0 justify-center items-center size-9 cursor-pointer rounded-full p-2 relative ${theme === "light" ? "text-gray-500 hover:bg-[#f3f4f6]" : "text-gray-200 hover:bg-[#374151]"}`}
                        >
                            <CiShoppingBasket className={`w-6 h-6`} />
                            {totalCount > 0 && (
                                <span
                                    className="absolute top-4 -right-1 bg-[#f3f4f6] text-gray-500 text-[10px] rounded-full h-5 w-5 flex items-center justify-center"
                                >
                                    {totalCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    <div className="flex items-center hidden md:block">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className={`font-medium rounded-full ${theme === "light" ? "text-gray-500 hover:bg-[#f3f4f6]" : "text-gray-200 hover:bg-[#374151]"}`}
                        >
                            <span className="group inline-flex shrink-0 justify-center items-center size-9">
                                {theme === "light" ? (
                                    <FiMoon className="shrink-0 size-4" />
                                ) : (
                                    <FiSun className="shrink-0 size-4" />
                                )}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Menu responsive */}
                <div className={`md:hidden absolute w-full top-[60px] left-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className={`flex flex-col p-4 font-medium border ${theme === "dark" ? "border-gray-700 bg-gray-900" : "border-gray-100 bg-gray-50"} rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent`}>
                        <li>
                            <Link
                                to="/"
                                className={getLinkClass("home")}
                                onClick={() => setMenu("home")}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                className={getLinkClass("menu")}
                                onClick={() => setMenu("menu")}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact-us"
                                className={getLinkClass("contact-us")}
                                onClick={() => setMenu("contact-us")}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Menu principal */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border ${theme === "dark" ? "border-gray-700 bg-gray-900" : "border-gray-100 bg-gray-50"} rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent`}>
                        <li>
                            <Link
                                to="/"
                                className={getLinkClass("home")}
                                onClick={() => setMenu("home")}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                className={getLinkClass("menu")}
                                onClick={() => setMenu("menu")}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact-us"
                                className={getLinkClass("contact-us")}
                                onClick={() => setMenu("contact-us")}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
