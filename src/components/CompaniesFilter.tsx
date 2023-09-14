// import {compaines} from '../db/data';
// import {useEffect} from 'react';
// import FilterUi from './FilterUi';
// import {executeFilteration} from '../store/productSlice';
// import FilterHook from '../hooks/FilterHook';
// function CompaniesFilter(){
//     const {state,handleSelect,dispatch} = FilterHook();
//     useEffect(()=>{
//         dispatch(executeFilteration([[],state,[]]));
//     },[dispatch,state]);
//     return(
//         <FilterUi filters={compaines} handleSelect={handleSelect} name={'Companies'}/>
//     )
// }
// export default CompaniesFilter;