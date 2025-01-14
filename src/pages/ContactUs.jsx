import { FiMapPin } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import mapboxgl from "mapbox-gl";
import { useContext, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeContext } from "../context/ThemeContext";

// Token Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoibGFtaWFla3RhbWk4IiwiYSI6ImNtNHVibGVnbzBkcTAya3I5Zm43NjFrM24ifQ.uim7wzcDeX3nlxNBPUd-Kg";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme)
  const infoData = [
    {
      icon: <IoTimeOutline className={theme === "dark" ? "text-gray-300" : "text-blue-700"} />,
      title: "Today 10:00am - 10:00pm",
    },
    {
      icon: <FiMapPin className={theme === "dark" ? "text-gray-300" : "text-blue-700"} />,
      title: "Meknès, Morocco",
    },
    {
      icon: <MdOutlinePhone className={theme === "dark" ? "text-gray-300" : "text-blue-700"} />,
      title: "+212 123 456 789",
    },
  ];

  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-5.515648, 33.892531],
      zoom: 15,
    });

    new mapboxgl.Marker()
      .setLngLat([-5.515648, 33.892531])
      .addTo(map);

    const zoomControl = new mapboxgl.NavigationControl();
    map.addControl(zoomControl);

    return () => map.remove();
  }, []);

  return (
    <div className={`flex flex-col gap-6 px-0 pb-6 pt-6 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Contact Us!</h1>
        <p className={`mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
          The promise to "get back to you as soon as possible" assures prompt attention to inquiries.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <form className="flex-1 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
                <span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                id="name"
                className={`border-2 ${theme === "dark" ? "text-gray-200 bg-gray-700 border-gray-400 focus:border-gray-100" : "text-gray-900 border-gray-300 focus:border-gray-400"} text-sm rounded-lg block w-full p-2.5 focus:outline-none`}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
                <span className="text-red-500"> *</span>
              </label>
              <input
                type="email"
                id="email"
                className={`border-2 ${theme === "dark" ? "text-gray-200 bg-gray-700 border-gray-400 focus:border-gray-100" : "text-gray-900 border-gray-300 focus:border-gray-400"} text-sm rounded-lg block w-full p-2.5 focus:outline-none`}
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Phone Number
                <span className="text-red-500"> *</span>
              </label>
              <input
                type="tel"
                id="phone"
                className={`border-2 ${theme === "dark" ? "text-gray-200 bg-gray-700 border-gray-400 focus:border-gray-100" : "text-gray-900 border-gray-300 focus:border-gray-400"} text-sm rounded-lg block w-full p-2.5 focus:outline-none`}
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-2 text-sm font-medium">
                Description
                <span className="text-red-500"> *</span>
              </label>
              <textarea
                id="description"
                className={`border-2 ${theme === "dark" ? "text-gray-200 bg-gray-700 border-gray-400 focus:border-gray-100" : "text-gray-900 border-gray-300 focus:border-gray-400"} text-sm rounded-lg block w-full p-2.5 focus:outline-none`}
                placeholder="Your message"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center self-end"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col gap-4 flex-1">
          <div>
            {infoData.map((item, index) => (
              <div key={index} className="mb-2 flex items-center">
                <span className="text-sm pl-2">{item.icon}</span>
                <div className="text-sm pl-2">{item.title}</div>
              </div>
            ))}
          </div>
          <div ref={mapContainerRef} className="h-[309.5px] w-full rounded-lg overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
