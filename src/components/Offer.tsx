import offerImage from '../nikeTailwind/assets/images/offer.svg';
import Buttton from './Buttton';
import buttonIcon from '../nikeTailwind/assets/icons/arrow-right.svg'
function Offer(){
     return(
        <section className="grid grid-cols-2 max-lg:grid-cols-1 my-16">
            <div className="">
                <img src={offerImage} className='object-contain max-lg:mx-auto max-lg:mb-16' alt="offerImage" />
            </div>
            <div className='flex justify-center items-start flex-col'>
                <h1 className='text-5xl font-[700] max-sm:text-4xl'><span className='text-[#ff6452]'>Special</span> Offer</h1>
                <p className='w-5/6 max-lg:w-full text-slate-600 my-5'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className='w-5/6 max-lg:w-full text-slate-600'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                <div className='flex gap-5 justify-start items-center'>
                    <Buttton label='Shop now' className='w-fit bg-[#ff6452] text-[#ffffff] rounded-full p-2 px-5 my-7 flex gap-1 items-center' icon={buttonIcon}/>
                    <Buttton label='Learn Moer' className='w-fit border border-[#ff6452] hover:bg-[#ff6452] hover:text-[#ffffff] text-[#ff6452] transition duration-200 rounded-full p-2 px-5 my-7'/>
                </div>
            </div>
        </section>
     );
}
export default Offer;