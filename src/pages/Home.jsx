// import HowItWorks from "../components/HowItWorks"
import InfoCard from "../components/InfoCard"
import NewsletterSubscription from "../components/NewsletterSubscription"
import PopularItems from "../components/PopularItems"
import Reviews from "../components/Reviews"
import Header from './../components/Header';
import ServiceCards from './../components/ServiceCards';

const Home = () => {
  return (
    <div className="flex flex-col">
        <Header />
        <InfoCard />
        <PopularItems />
        <ServiceCards /> 
        <Reviews />
        <NewsletterSubscription /> 
    </div>
  )
}

export default Home