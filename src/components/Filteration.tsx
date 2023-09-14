import {useState,useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { AppDispatch } from '../store/store';
import {useEffect} from 'react';
import {executeFilteration} from '../store/productSlice';
import {compaines,categories,prices} from '../db/data';
import FilterUi from "./FilterUi";
import data from '../db/data';
function Filteration(){
    const [stateComponies,setStateComponies] = useState<string|null>(null);
    const [stateCategries,setStateCategries] = useState<string|null>(null);
    const [statePrice,setStatePrice] = useState<string|null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const handleComponiesSelect = useCallback((newCompany:string)=>{
        setStateComponies(newCompany);
    },[setStateComponies,]);
    const handleCategriesSelect = useCallback((newCategory:string)=>{
            setStateCategries(newCategory);
    },[setStateCategries]);
    const handlePriceSelect = useCallback((newPrice:string)=>{
        setStatePrice(newPrice);
    },[setStatePrice]);
    useEffect(()=>{
        dispatch(executeFilteration({categories:stateCategries,compaines:stateComponies,prices:statePrice,products:data}));
    },[dispatch,stateComponies,stateCategries,statePrice]);
    return(
        <section className="p-4 w-full flex flex-col justify-between items-center"> 
            <FilterUi filters={compaines} handleSelect={handleComponiesSelect} name={'Companies'}/>
            <FilterUi filters={categories} handleSelect={handleCategriesSelect} name={'Categories'}/>
            <FilterUi filters={prices} handleSelect={handlePriceSelect} name={'Prices'}/>
        </section>
    )
}
export default Filteration;