import { ReactElement ,useState} from "react";
import logo from '../nikeTailwind/assets/favicon.ico';
import hamburger from '../nikeTailwind/assets/icons/hamburger.svg';
import { link, navLinks } from "../types/types";
import {Link} from 'react-router-dom';
function Nav():ReactElement{
    const [checked,setChecked] = useState(false);
    return(
        <header className="py-2 sticky z-50 top-0 left-0 flex flex-col justify-center items-center">
            <nav className="bg-slate-50 w-full flex justify-between items-center p-4 rounded-t-md">
                <a href="/" className="flex justify-center items-center">
                    <img
                        src={logo}
                        alt={"logo"}
                        style={{width:'80px',height:'25px'}}
                    />
                    <span className="font-bold text-lg first-letter:text-[#ff6452] first-letter:text-2xl">Nike</span>
                </a>
                <ul className="grow flex justify-center items-center gap-4 lg:gap-12 max-lg:hidden">
                    {
                        navLinks.map((el:link)=>{
                            return(<li  key={el.href} className="text-slate-500 text-sm"><Link  to={el.href}>{el.label}</Link></li>);
                        })
                    }
                </ul>
                <p className="font-bold max-lg:hidden">
                    <a href="#signin">Sign in</a> / <a href="explorenow">Explore now</a>
                </p>
                <div className={` p-2 hidden max-lg:block ${checked?"border-2 rounded-md border-slate-800":""}`}>    
                    <img 
                        className={`cursor-pointer`}
                        src={hamburger}
                        alt={"hamburger"}
                        style={{width:'25px',height:'25px'}}
                        onClick={()=>{
                            setChecked(!checked);
                        }}
                    />
                </div>
            </nav>
            <ul className={`space-y-3 w-full h-0 hidden max-lg:block overflow-hidden bg-slate-50 ${checked?"nav-md":"nav-md-altranative"}`}>
                    {
                        navLinks.map((el:link)=>{
                            return(<li  key={el.href} className="text-slate-500 text-lg px-2"><Link  to={el.href}>{el.label}</Link></li>);
                        })
                    }
            </ul>
        </header>
    );
}
export default Nav;