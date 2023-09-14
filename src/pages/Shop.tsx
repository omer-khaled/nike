import {ReactElement,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getData } from '../store/productSlice';
import { AppDispatch,AppReducer } from '../store/store';
import LoddingRoute from '../components/LoddingRoute';
import ProductList from '../components/ProductList';
import Filteration from '../components/Filteration';
import data from '../db/data';
import { getProduct } from '../store/cartSlice';
function Shop():ReactElement{
    const dispatch = useDispatch<AppDispatch>();
    const products = (useSelector<AppReducer>((state)=>state.products.productsData)) as []|null|undefined;
    useEffect(()=>{
        dispatch(getData(data));
        dispatch(getProduct());
    },[dispatch]);
    return(
        <main className='w-full flex box-border p-4 gap-4 justify-start items-center flex-col'>
            <Filteration /> 
            {
                (products)?<ProductList products={products}/>:<LoddingRoute/>
            }
        </main>
    );
}
export default Shop;