import {ReactElement} from 'react'; 
import Hero from "../components/Hero";
import PopularProduct from "../components/PopularProduct";
import Quality from "../components/Quality";
import Services from "../components/Services";
import Offer from "../components/Offer";
import Reviews from "../components/Reviews";
import Updates from "../components/Updates";
import Footer from '../components/Footer';
function Home():ReactElement{
    return(
        <>
            <Hero />
            <PopularProduct />
            <Quality />
            <Services/>
            <Offer/>
            <Reviews />
            <Updates />
            <Footer />
        </>
    );
}
export default Home;