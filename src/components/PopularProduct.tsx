import { ReactElement } from "react";
import shoe4 from '../nikeTailwind/assets/images/shoe4.svg'
import shoe5 from '../nikeTailwind/assets/images/shoe5.svg'
import shoe6 from '../nikeTailwind/assets/images/shoe6.svg'
import shoe7 from '../nikeTailwind/assets/images/shoe7.svg'
import { productType } from "../types/types";
import star from '../nikeTailwind/assets/icons/star.svg';
const products:productType[] = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

function PopularProduct():ReactElement{
     return(
        <section id="products" className="flex flex-col justify-center items-start my-16">
            <h1 className="text-5xl font-[700]">Our <span className="text-[#ff6452]">Popular</span> Products</h1>
            <p className="lg:w-2/6 text-slate-500 my-6">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
                {
                    products.map(({imgURL,name,price}:productType)=>{
                         return(
                            <div key={name} className="w-full rounded-lg flex flex-col justify-start items-start max-sm:items-center">
                                <img src={imgURL} alt="image url" className="h-[280px] w-[280px]" />
                                <div className="flex gap-2 mt-4">
                                    <img src={star} alt="star" />
                                    <p className="m-0">(4.5)</p>
                                </div>
                                <p className="my-3 text-xl font-bold">{name}</p>
                                <p className="text-[#ff6452] my-0 text-lg font-bold">{price}</p>
                            </div>
                         );
                    })
                }
            </div>
        </section>
     );
}
export default PopularProduct;