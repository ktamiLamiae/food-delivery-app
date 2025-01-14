import { useTheme } from '../context/ThemeContext';
import image from '../assets/images/quality.png';
import image1 from '../assets/images/food.png';
import image2 from '../assets/images/delivery.png';

const services = [
    {
        image: image,
        title: 'Qualityfull Food',
        description:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
    },
    {
        image: image1,
        title: 'Healthy Food',
        description:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
        shadow: true,
    },
    {
        image: image2,
        title: 'Fast Delivery',
        description:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
    },
];

const ServiceCards = () => {
    const { theme } = useTheme();

    const cardClassNames = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
    const subTitleColor = theme === 'dark' ? 'text-gray-400' : 'text-blue-700';

    return (
        <div className={`flex flex-col items-center px-4 pb-6 pt-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className={`text-lg font-medium ${subTitleColor}`}>Services</div>
            <div className={`text-4xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Why Choose Our Favorite Food
            </div>
            <section className="py-8 antialiased w-full">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-center">
                            <div
                                className={`flex flex-col items-center px-8 py-12 w-full ${cardClassNames} ${
                                    service.shadow ? 'shadow-lg' : 'border border-solid'
                                } border-zinc-400 rounded-[30px] max-w-md`}>
                                <div className="flex flex-col w-[98px]">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="mt-8 text-2xl font-bold text-center">{service.title}</div>
                                <div className="mt-4 text-lg font-medium text-center">{service.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServiceCards;
