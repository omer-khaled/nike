import {ChangeEvent} from 'react';
type FilterUiType = {
    filters:string[],
    name:string,
    handleSelect:(pram:string)=>void,
}
function FilterUi({filters,name,handleSelect}:FilterUiType){
    return(<div className="w-full">
        <h3 className="my-4 font-semibold text-gray-900">{name}</h3>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
            {
                filters.map((el:string,index:number)=>{
                    return(
                        <li key={index} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div className="flex items-center pl-3">
                                <input id={`${name+el}-radio-list`} type="radio" name={name} value={el} className="cursor-pointer accent-primary-color w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" 
                                onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                                    handleSelect(e.target.value);
                                }}/>
                                <label htmlFor={`${name+el}-radio-list`} className="cursor-pointer w-full py-3 ml-2 text-sm font-medium text-gray-900  ">{el}</label>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>);
}
export default FilterUi;