import {ReactElement,MouseEvent,useState} from 'react';
import Buttton from './Buttton';
import buttonIcon from '../nikeTailwind/assets/icons/arrow-right.svg'
import bigshose1 from '../nikeTailwind/assets/images/big-shoe1.png';
import bigshose2 from '../nikeTailwind/assets/images/big-shoe2.png';
import bigshose3 from '../nikeTailwind/assets/images/big-shoe3.png';
import { statistics, statisticsTyps } from '../types/types';
function Hero():ReactElement{
    const [activeImage,setActiveImage] = useState<string>(bigshose1);
    return(
    <section id='home' className='py-4 grid grid-cols-2 max-lg:grid-cols-1'>
        <div className='flex flex-col'>
            <p className='text-[#ff6452] text-lg'>Out Summer collections</p>
            <h1 className='text-6xl max-sm:text-4xl font-[700] tracking-wider'>
                <span className='blcok relative bg-red-600'>
                    <span className='lg:whitespace-nowrap text-8xl py-2 max-sm:text-4xl xl:bg-white absolute top-0 left-0 z-10'>The New Arrival</span>
                    <span className='block my-7 lg:whitespace-nowrap max-sm:text-4xl text-8xl py-2 xl:bg-white invisible'>The New Arrival</span>
                </span>
               <span className='block mb-7 max-sm:text-4xl'><span className='text-[#ff6452] me-3'>Nike</span>Shoes</span>
            </h1>
            <p className='w-2/5 max-md:w-4/5 text-slate-500'>Discover stylish Nike arrivals,
                quality comfort, and innovation for your
                active life.
            </p>
            <Buttton label='Shop now' className='w-fit bg-[#ff6452] text-[#ffffff] rounded-full p-2 px-5 my-7 flex gap-1 items-center' icon={buttonIcon} onClick={(e:MouseEvent<HTMLButtonElement>)=>{
                 console.log("omer khaled");
                 console.log(e);
            }}/>
            <div className='w-2/5 flex justify-start items-center gap-10'>
                {
                    statistics.map((el:statisticsTyps)=>{
                        return(
                           <div key={el.value} className='flex flex-col'>
                              <p className='font-extrabold text-xl'>{el.value}</p>
                              <p className='text-sm text-slate-300'>{el.label}</p>
                           </div>
                        )
                    })
                }
            </div>
        </div>
        <div className={`flex justify-center items-center flex-col bg-cover bg-hero py-2`}>
             <img src={activeImage} alt="" className='object-contain mb-3'/>
             <div className='flex justify-start items-center gap-5'>
                {
                    [bigshose1,bigshose2,bigshose3].map((el:string)=>{
                       return(
                             <div key={el} className={`bg-card rounded-md bg-cover p-2 cursor-pointer ${(el==activeImage)?"active":""}`} onClick={()=>{
                                    setActiveImage(el);
                             }}>
                                 <img key={el} src={el} style={{width:'120px',height:'120px'}} />
                             </div>
                       );
                    })
                }
             </div>
        </div>
    </section>
    );
}
export default Hero;