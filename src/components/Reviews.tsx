import star from '../nikeTailwind/assets/icons/star.svg';
import customer1 from '../nikeTailwind/assets/images/customer1.jpeg';
import customer2 from '../nikeTailwind/assets/images/customer2.svg';
function Reviews(){
    return(
        <section className="bg-[#f5f6ff] h-min-100 flex flex-col justify-evenly items-center box-border my-16">
            <div className="mb-5 flex flex-col justify-center items-center">
                <h1 className="text-black font-bold text-5xl mt-0 mb-3 max-md:text-xl">What Our <span className="text-[#ff6452]">Customers</span> Say?</h1>
                <p className="text-slate-600 m-0 lg:w-3/5 text-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            </div>
            <div className="flex justify-evenly items-center max-lg:flex-col gap-14">
                <div className="flex flex-col justify-center items-center">
                    <img src={customer1} alt="customer1" className='rounded-full' style={{width:'120px',height:'120px'}}/>
                    <p className="text-slate-600 my-3 max-w-sm text-center">The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                    <div className="flex gap-2 mb-3">
                        <img src={star} alt="star" />
                        <p className="m-0">(4.5)</p>
                    </div>
                    <p className='text-black font-bold text-xl'>Morich Brown</p>
                </div>
                <div className="flex flex-col justify-center items-center"> 
                    <img src={customer2} alt="customer2" className='rounded-full' style={{width:'120px',height:'120px'}}/>
                    <p className="text-slate-600 my-3 max-w-sm text-center">The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                    <div className="flex gap-2 mb-3">
                        <img src={star} alt="star" />
                        <p className="m-0">(4.5)</p>
                    </div>
                    <p className='text-black font-bold text-xl'>Lota Mongeskar</p>
                </div>
            </div>
        </section>
    );
}
export default Reviews;