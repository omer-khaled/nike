import truckFast from '../nikeTailwind/assets/icons/truck-fast.svg';
import shieldTick from '../nikeTailwind/assets/icons/shield-tick.svg';
import support from '../nikeTailwind/assets/icons/support.svg';
import { serviceType } from '../types/types';
const services : serviceType[]= [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
function Services(){
    return(
        <section id='about-us' className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 my-16 lg:gap-24 gap-10'>
            {
                services.map((el:serviceType)=>{
                    return(
                    <div key={el.label} className='flex flex-col items-start justify-center p-3 shadow-2xl gap-5 bg-white'>
                        <div className='rounded-full h-10 w-10 p-2 box-border flex justify-center items-center bg-[#ff6452]'>
                               <img src={el.imgURL} alt={el.imgURL} />
                        </div>
                        <h3 className='text-xl font-[700] my-1'>{el.label}</h3>
                        <p className='text-slate-500 m-0'>{el.subtext}</p>
                    </div>);
                })
            }
        </section>
    );
}
export default Services;