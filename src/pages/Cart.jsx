import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { food_list } from "../db/db.json";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const Cart = () => {
    const { cart, theme, addToCart, subtract, removeFromCart } = useTheme();

    const totalCount = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
    const cartItems = food_list.filter((food) => cart[food.id] > 0);
    const totalPrice = cartItems.reduce((acc, food) => acc + food.price * cart[food.id], 0);

    return (
        <div
            className={`container mx-auto mt-10 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
                }`}
        >
            <div
                className={`flex flex-col md:flex-row shadow-md my-10 ${theme === "dark" ? "bg-gray-900" : "bg-white"
                    }`}
            >
                <div
                    className={`w-full md:w-3/4 px-10 py-10 ${theme === "dark" ? "bg-gray-800" : "bg-white"
                        }`}
                >
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl capitalize">{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3
                            className={`font-semibold text-xs uppercase w-2/5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Product Details
                        </h3>
                        <h3
                            className={`font-semibold text-center text-xs uppercase w-1/5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Price
                        </h3>
                        <h3
                            className={`font-semibold text-center text-xs uppercase w-1/5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Quantity
                        </h3>
                        <h3
                            className={`font-semibold text-center text-xs uppercase w-1/5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Total
                        </h3>
                        <h3
                            className={`font-semibold text-center text-xs uppercase w-1/5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                        </h3>
                    </div>
                    {cartItems.length === 0 ? (
                        <p
                            className={`text-center ${theme === "dark" ? "text-gray-500" : "text-gray-700"
                                }`}
                        >
                            Your cart is empty.
                        </p>
                    ) : (
                        cartItems.map((food) => (
                            <div
                                key={food.id}
                                className={`flex items-center hover:${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                                    } -mx-8 px-6 py-5`}
                            >
                                <div className="flex w-2/5">
                                    <div className="w-60 h-24 overflow-hidden rounded-lg">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={`src/assets/images/food_list/${food.image}`}
                                            alt={food.name}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{food.name}</span>
                                        <span
                                            className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"
                                                } text-xs`}
                                        >
                                            {food.description}
                                        </span>
                                        <span className="text-red-500 text-xs">
                                            {food.category || "Uncategorized"}
                                        </span>
                                    </div>
                                </div>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${food.price.toFixed(2)}
                                </span>
                                <div className="flex justify-center items-center w-1/5">
                                    <button
                                        onClick={() => subtract(food.id, 'cart')}
                                        disabled={totalCount === 1}
                                        className={`rounded-full border border-gray-200 w-5 h-5 flex items-center justify-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"} ${totalCount === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        <FiMinus className="text-xs" />
                                    </button>

                                    <input
                                        className={`mx-2 border text-center w-8 ${theme === "dark" ? "bg-gray-700 text-gray-200 border-gray-500" : "border-gray-300 text-gray-800"}`}
                                        type="text"
                                        value={cart[food.id]}
                                        readOnly
                                    />
                                    <button
                                        onClick={() => addToCart(food.id)}
                                        className={`rounded-full border border-gray-200 w-5 h-5 flex items-center justify-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                                    >
                                        <GoPlus className="text-xs" />
                                    </button>
                                </div>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${(food.price * cart[food.id]).toFixed(2)}
                                </span>
                                <div className="flex justify-center w-1/5">
                                    <button
                                        onClick={() => removeFromCart(food.id)}
                                    >
                                        <MdDeleteForever className="text-red-600" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    <Link
                        to="/menu"
                        className={`flex items-center font-semibold text-sm mt-10 gap-x-2 ${theme === "dark" ? "text-blue-400" : "text-blue-700"
                            }`}
                    >
                        <IoMdArrowBack />
                        {totalCount === 0 ? <span>Start Shopping</span> : <span>Continue Shopping</span>}
                    </Link>
                </div>
                <div
                    className={`w-full md:w-1/4 px-8 py-10 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"
                        }`}
                >
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm capitalize">{cartItems.length > 1 ? 'items' : 'item'} {cartItems.length}</span>
                        <span className="font-semibold text-sm">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div>
                        <div className="mb-6">
                            <label
                                className={`font-medium block mb-2 text-sm uppercase ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                    }`}
                            >
                                Shipping
                            </label>
                            <div
                                className={`flex items-center gap-3 rounded-lg p-3 ${theme === "dark"
                                    ? "bg-green-900 text-green-400"
                                    : "bg-green-50 text-green-700"
                                    }`}
                            >
                                <span className="font-semibold text-lg">Free Shipping</span>
                                <AiOutlineCheckCircle className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div className="py-3">
                        <label
                            htmlFor="promo"
                            className={`font-semibold inline-block mb-3 text-sm uppercase ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Promo Code
                        </label>
                        <input
                            type="text"
                            id="promo"
                            className={`border-2 ${theme === "dark"
                                ? "text-gray-200 bg-gray-700 border-gray-400 focus:border-gray-100"
                                : "text-gray-900 border-gray-300 focus:border-gray-400"
                                } text-sm rounded-lg block w-full p-2.5 focus:outline-none`}
                            placeholder="Enter your code"
                            required
                        />
                    </div>
                    <button
                        className={`w-full rounded-lg px-5 py-2 text-sm text-white uppercase ${theme === "dark"
                            ? "bg-gray-600 hover:bg-gray-500"
                            : "bg-gray-600 hover:bg-gray-500"
                            }`}
                    >
                        Apply
                    </button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>{totalPrice && `$${totalPrice.toFixed(2)}`}</span>
                        </div>
                        <button
                            className={`rounded-lg font-semibold py-3 text-sm text-white uppercase w-full ${theme === "dark"
                                ? "bg-blue-700 hover:bg-blue-600"
                                : "bg-blue-700 hover:bg-blue-600"
                                }`}
                        >
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Cart;
