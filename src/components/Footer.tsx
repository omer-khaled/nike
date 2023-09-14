import logo from '../nikeTailwind/assets/favicon.ico';
import facebook from '../nikeTailwind/assets/icons/facebook.svg';
import twitter from '../nikeTailwind/assets/icons/twitter.svg';
import instgram from '../nikeTailwind/assets/icons/instagram.svg';
function Footer(){
    return(
        <footer id='contact-us' className="flex flex-col justify-center items-center mt-16 bg-black text-white px-4 py-10">
            <div className="w-full max-lg:flex-col flex justify-between items-center my-11">
                <div className='w-2/6 max-lg:w-full flex flex-col items-start justify-start box-border p-2'>
                    <a href="/" className="flex justify-center items-center">
                       <img
                           src={logo}
                            alt={"logo"}
                           style={{width:'80px',height:'25px'}}
                       />
                       <span className="font-bold text-lg  first-letter:text-2xl">Nike</span>
                    </a>
                    <p className='text-slate-500 my-5'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='bg-white h-10 w-10 box-border p-3 rounded-full'>
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className='bg-white h-10 w-10 box-border p-3 rounded-full'>
                            <img src={twitter} alt="facebook" />
                        </div>
                        <div className='bg-white h-10 w-10 box-border p-3 rounded-full'>
                            <img src={instgram} alt="facebook" />
                        </div>
                    </div>
                </div>
                <div className="w-4/6 max-lg:w-full flex-wrap p-2 flex max-lg:justify-between max-lg:mt-7 justify-around items-start">
                    <div className='flex flex-col justify-start items-start'>
                       <p className='text-xl'>Products</p>
                       <ul className='m-0 p-0 my-3'>
                           <li><a href="/" className='link'>Air Force 1</a></li>
                           <li><a href="/" className='link'>Air Max 1</a></li>
                           <li><a href="/" className='link'>Air Jordan 1</a></li>
                           <li><a href="/" className='link'>Air Force 2</a></li>
                           <li><a href="/" className='link'>Nike Waffle Racer</a></li>
                           <li><a href="/" className='link'>Nike Cortez</a></li>
                       </ul>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                       <p className='text-xl'>Help</p>
                       <ul className='m-0 p-0 my-3'>
                           <li><a href="/" className='link'>About us</a></li>
                           <li><a href="/" className='link'>FAQs</a></li>
                           <li><a href="/" className='link'>How it works</a></li>
                           <li><a href="/" className='link'>Privacy policy</a></li>
                           <li><a href="/" className='link'>Payment policy</a></li>
                       </ul>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                       <p className='text-xl'>Get in touch</p>
                       <ul className='m-0 p-0 my-3'>
                           <li><a href="/" className='link'>customer@nike.com</a></li>
                           <li><a href="/" className='link'>+201120195455</a></li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <p className='m-0 p-0 text-slate-700'>copyright Copyright. 🥑Omer khaled🥑 All rights reserved.</p> 
                <p className='m-0 p-0 text-slate-700'>Terms & Conditions</p>
            </div>
        </footer>
    );
}
export default Footer;