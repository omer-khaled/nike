// import {useState,useCallback} from 'react';
// import {useDispatch} from 'react-redux';
// import { AppDispatch } from '../store/store';
// import {useEffect} from 'react';
// import {executeFilteration} from '../store/productSlice';
// function FilterHook(filterObject){
//     const [state,setState] = useState<string[]>([]);
//     const dispatch = useDispatch<AppDispatch>();
//     const handleSelect = useCallback((newCategory:string)=>{
//         setState((state:string[])=>{
//             return [...state,newCategory];
//         });
//     },[setState]);
//     useEffect(()=>{
//         dispatch(executeFilteration({

//         }));
//     },[dispatch,state]);
//     return {handleSelect};
// }
// export default FilterHook;