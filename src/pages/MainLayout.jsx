// MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from './../components/Footer';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}
    >
      <Navbar />
      <div className="mt-16 w-[85%] mx-auto ">
        <Outlet />
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
