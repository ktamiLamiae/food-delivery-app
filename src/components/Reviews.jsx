import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "../context/ThemeContext";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBackground = theme === "dark" ? "bg-gray-700" : "bg-gray-100";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`items-center px-0 pb-6 pt-6 bg-transparent`}>
      <div className={`flex flex-col gap-2 bg-transparent mx-auto`}>
        <div className={`text-lg font-medium text-blue-700 text-center ${textColor}`}>
          Testimonials
        </div>
        <div className={`text-4xl font-bold text-center ${textColor}`}>What Our Customers Say</div>
        <div>
          <Slider {...sliderSettings}>
            {reviews.map((review) => (
              <div key={review.id} className="p-2">
                <div
                  className={`rounded-lg mx-auto ${cardBackground} relative z-10 h-[250px] p-6`}
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <img
                      src={review.userImage}
                      className="w-14 h-14 rounded-full border-4 border-white"
                      alt={review.username}
                    />
                    <div>
                      <h4 className={`text-sm whitespace-nowrap font-bold ${textColor}`}>
                        {review.username}
                      </h4>
                      <p className={`mt-0.5 text-xs ${secondaryTextColor}`}>{review.jobTitle}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1 mt-4">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 ${index < review.rating ? "fill-[#facc15]" : "fill-[#CED5D8]"
                            }`}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                      ))}
                  </div>

                  <div className="mt-6">
                    <p className={`text-sm leading-relaxed ${textColor}`}>
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
