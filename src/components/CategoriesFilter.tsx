// import {useEffect} from 'react';
// import {categories} from '../db/data';
// import FilterUi from './FilterUi';
// import {executeFilteration} from '../store/productSlice';
// import FilterHook from '../hooks/FilterHook';
// function CategoriesFilter(){
//     const {state,handleSelect,dispatch} = FilterHook();
//     useEffect(()=>{
//         dispatch(executeFilteration([state,[],[]]));
//     },[dispatch,state]);
//     return(
//         <FilterUi filters={categories} name={'Categories'} handleSelect={handleSelect}/>
//     )
// }
// export default CategoriesFilter;