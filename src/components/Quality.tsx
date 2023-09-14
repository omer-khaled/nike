import Buttton from "./Buttton";
import shoe8 from '../nikeTailwind/assets/images/shoe8.svg';
function Quality(){
     return(
        <section className="grid grid-cols-2 max-lg:grid-cols-1 my-16">
           <div>
               <h1 className="text-5xl font-[600] max-sm:text-4xl">
                  <span>We Provide You</span>
                  <br />
                  <span className="my-4 block"><span className="text-[#ff6452]">Super Quality </span> Shoes</span>
               </h1>
               <p className="w-4/6 max-lg:w-full text-slate-600">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
               <p className="w-4/6 max-lg:w-full my-6 text-slate-600">Our dedication to detail and excellence ensures your satisfaction</p>
                <Buttton label="View Details" className="p-2 px-6 rounded-full w-fit text-white bg-[#ff6452]"/>
           </div>
           <div className="w-full justify-center items-start flex">
                <img src={shoe8} alt="shoe8" className="object-contain max-lg:mt-4"/>
           </div>
        </section>
     );
}
export default Quality;