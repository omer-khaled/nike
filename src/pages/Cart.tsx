import {ReactElement, useEffect} from 'react'; 
import {useSelector} from 'react-redux';
import { AppReducer } from '../store/store';
import { productType } from '../store/productSlice';
import {AiFillDelete} from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import { AppDispatch} from '../store/store';
import { getProduct, removeProduct } from '../store/cartSlice';
function Cart():ReactElement{
    const {cart,total} = (useSelector<AppReducer>((state)=>state.cart)) as {cart:[],total:number};
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        if(cart.length==0){
            dispatch(getProduct());
        }
    },[dispatch]);
    return(
        <section className='flex flex-col justify-center items-center' style={{minHeight:'85vh'}}>
           {
                <div className='w-full mt-2 mb-10 grow  overflow-auto'>
                    <table className='table-auto w-full border-collapse border border-slate-400'>
                        <thead>
                            <tr>
                                <th className='border-slate-400 p-1'>remove</th>
                                <th className='border-slate-400 p-1'>Image</th>
                                <th className='border-slate-400 p-1'>Title</th>
                                <th className='border-slate-400 p-1'>Price</th>
                                <th className='border-slate-400 p-1'>company</th>
                                <th className='border-slate-400 p-1'>category</th>
                                <th className='border-slate-400 p-1'>qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(({product,qty}:{product:productType,qty:number},index:number)=>{
                                    return(<tr key={index}>
                                        <td className='border-slate-400 p-1 text-center'><AiFillDelete onClick={()=>{
                                            dispatch(removeProduct(index));
                                        }} className="text-[25px] mx-auto cursor-pointer hover:text-primary-color transition duration-100"/></td>
                                        <td className='border-slate-400 p-1 text-center'>
                                            <img src={product.img} alt={product.title} className='w-[8rem] mx-auto' />
                                        </td>
                                        <td className='border-slate-400 p-1 text-center'>{product.title}</td>
                                        <td className='border-slate-400 p-1 text-center'>{product.newPrice}$</td>
                                        <td className='border-slate-400 p-1 text-center'>{product.company}</td>
                                        <td className='border-slate-400 p-1 text-center'>{product.category}</td>
                                        <td className='border-slate-400 p-1 text-center'>{qty}</td>
                                    </tr>)                
                                })
                            }
                        </tbody>
                    </table>
                </div>
           }
           <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
                <div className='lg:col-start-2 lg:col-end-3 flex flex-col justify-start items-start border p-4 border-slate-400 gap-4'>
                    <p className='font-bold text-md'>Cart Totals</p>
                    <table className='w-full border-collapse border border-slate-400'>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400 p-1'>Cart Subtotal</td>
                                <td className='border border-slate-400 p-1' id="Total_price_before_cop">${total}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 p-1'>Shipping</td>
                                <td className='border border-slate-400 p-1'>Free</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 p-1'><strong>Total</strong></td>
                                <td className='border border-slate-400 p-1' id="Total_price_after_cop">${total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='bg-primary-color text-white p-2 rounded-md'>Proceed to checkout</button>
                </div>
           </div>
        </section>
    );
}
export default Cart;