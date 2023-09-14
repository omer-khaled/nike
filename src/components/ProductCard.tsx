import { productType } from "../store/productSlice";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import {useDispatch} from 'react-redux';
import { AppDispatch} from '../store/store';
import {addproduct} from '../store/cartSlice';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
type ProductCartType = {
    product:productType
}
function ProductCard({product}:ProductCartType){
    const dispatch = useDispatch<AppDispatch>();
    const navigator = useNavigate();
    return(<>
            <div className="group relative flex justify-center items-center gap-4 flex-col border border-slate-300 p-4 min-h-[250px] box-border">
                <img className="" src={product.img} alt={product.title} />
                <p className="w-full text-center truncate  font-[600]">{product.title}</p>
                <div className="flex flex-wrap justify-center items-center">
                    <span className="flex justify-center items-center gap-[1px] me-1">
                        <AiFillStar className="text-start-color" />
                        <AiFillStar className="text-start-color" />
                        <AiFillStar className="text-start-color" />
                        <AiFillStar className="text-start-color" />
                    </span>
                    <span>{product.reviews}</span>
                </div>
                <div className="w-full flex flex-wrap justify-center items-center">
                    <div className="flex justify-center items-center">
                        <span className="line-through decoration-[bag-color]">{product.prevPrice}</span>
                        <span>${product.newPrice}</span>
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-between items-center">
                    <span className="p-1 bg-primary-color rounded-md text-white text-sm  top-1 right-1">{
                        product.company
                    }</span>
                    <span className="p-1 bg-primary-color rounded-md text-white text-sm  top-1 left-1">{
                        product.category
                    }</span>
                </div>
                <div className="absolute backdrop-brightness-50 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200 ">
                    <button onClick={()=>{
                        dispatch(addproduct(product));
                        Swal.fire(
                            'Action done!',
                            'click to go to Cart!',
                            'success'
                        ).then(()=>{
                            navigator('/cart');
                        });
                    }} className="  bg-primary-color text-white p-2 rounded-full flex items-center justify-center">
                        Add To Cart
                        <BsFillBagFill className="ms-2 cursor-pointer " />
                    </button>
                </div>
            </div>
        </>
    );
}
export default ProductCard;