import {ReactElement} from 'react';
import ReactLoading from 'react-loading';
function LoddingRoute():ReactElement{
    return(
        <ReactLoading className='mx-auto mt-4' type={"spokes"} color={"#ff6452"} width={"30%"} />
    )
}
export default LoddingRoute;