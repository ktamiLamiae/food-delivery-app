import image from '../assets/images/image.png';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';

const InfoCard = () => {
  const infoData = [
    {
      image: image,
      title: "Today 10:00am - 10:00pm",
      subtitle: "Working time",
    },
    {
      image: image1,
      title: "Washington, D.C, USA",
      subtitle: "Our Location",
    },
    {
      image: image2,
      title: "+0123 456 7891",
      subtitle: "Phone Number",
    },
  ];
  return (
    <div className="flex flex-col items-center rounded-none px-0 pb-6 pt-6">
      <section className="py-8 antialiased self-stretch flex gap-20 max-md:flex-col max-md:items-center max-md:justify-center justify-center items-center">
        {infoData.map((info, index) => (
          <div key={index} className="flex flex-col items-center self-stretch my-auto">
            <img
              src={info.image}
              className="object-contain rounded-full aspect-square w-[42px]"
              alt={info.subtitle}
            />
            <div className="self-stretch mt-3 text-lg font-semibold text-center">
              {info.title}
            </div>
            <div className="mt-1.5 text-sm text-center">{info.subtitle}</div>
          </div>
        ))}
      </section>
    </div>

  );
};


export default InfoCard;
