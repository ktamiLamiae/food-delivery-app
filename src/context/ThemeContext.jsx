import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    
    const [cart, setCart] = useState({});

    const [theme, setTheme]  = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme : "light";
    });
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const addToCart = (productId) => {
        setCart((prevCart) => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + 1, 
        }));
    };

    const removeFromCart = (productId) => {
        console.log('Removing product:', productId); 
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[productId];
            console.log('Updated Cart:', newCart); 
            return newCart;
        });
    };

    const subtract = (productId, type) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[productId] > 1) {
                newCart[productId] -= 1;
            } else if (type === 'menu') {
                delete newCart[productId];
            }
            return newCart;
        });
    };
    

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, cart, addToCart, subtract, removeFromCart }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
