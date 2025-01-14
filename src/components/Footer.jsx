import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo1.png";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const openingHours = [
    { day: "Sat-Wet", hours: "09:00am-10:00PM" },
    { day: "Thursday", hours: "09:00am-11:00PM" },
    { day: "Friday", hours: "09:00am-8:00PM" },
];

const userLinks = [
    "Home",
    "Menu",
    "Contact Us",
];

const contactInfo = [
    "1234 Country Club Ave",
    "NC 123456, London, UK",
    "+0123 456 7891",
];

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <footer
            className={`p-6 w-[85%] mx-auto ${
                theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-white text-gray-600"
            }`}
            aria-labelledby="footer-heading"
        >
            <div className="max-w-full mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    <div>
                        <img
                            className="h-10 w-auto mb-4"
                            src={`${theme === 'light' ? logo : logo1}`}
                            alt="Name of Company"
                        />
                        <p className="text-sm leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="flex space-x-6 mt-4">
                            <a
                                href="#"
                                className={`${
                                    theme === "dark" ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-500"
                                }`}
                            >
                                <span className="sr-only">Facebook</span>
                                <FaFacebookF size={20} />
                            </a>
                            <a
                                href="#"
                                className={`${
                                    theme === "dark" ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-500"
                                }`}
                            >
                                <span className="sr-only">Twitter</span>
                                <FaXTwitter size={20} />
                            </a>
                            <a
                                href="#"
                                className={`${
                                    theme === "dark" ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-500"
                                }`}
                            >
                                <span className="sr-only">YouTube</span>
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3
                            className={`text-sm font-semibold leading-6 ${
                                theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                        >
                            User Links
                        </h3>
                        <ul role="list" className="mt-4 space-y-2">
                            {userLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className={`text-sm leading-6 hover:text-gray-900 ${
                                            theme === "dark"
                                                ? "text-gray-300 hover:text-white"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3
                            className={`text-sm font-semibold leading-6 ${
                                theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Opening Hours
                        </h3>
                        <ul role="list" className="mt-4 space-y-2">
                            {openingHours.map((item, index) => (
                                <li
                                    key={index}
                                    className={`text-sm leading-6 ${
                                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                                    }`}
                                >
                                    {item.day}: {item.hours}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3
                            className={`text-sm font-semibold leading-6 ${
                                theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Contact Info
                        </h3>
                        <ul role="list" className="mt-4 space-y-2">
                            {contactInfo.map((info, index) => (
                                <li
                                    key={index}
                                    className={`text-sm leading-6 ${
                                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                                    }`}
                                >
                                    {info}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div
                    className={`mt-2 border-t pt-4 ${
                        theme === "dark" ? "border-gray-700" : "border-gray-200"
                    }`}
                >
                    <p
                        className={`text-xs leading-5 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                    >
                        &copy; {new Date().getFullYear()} FOODI, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
