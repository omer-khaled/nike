import {HTMLProps} from 'react';
type ButttonProps = {label:string,icon?:string}&HTMLProps<HTMLButtonElement>
function Buttton({label,icon,onClick,className}:ButttonProps){
    return(
        <button onClick={onClick} className={className}>
            {label}
            {(icon)?<img src={icon} alt="icon" className='w-5 h-5'/>:<></>}
        </button>
    )
}
export default Buttton;