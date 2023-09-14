import { productType } from "../store/productSlice";
import ProductCard from "./ProductCard";
type ProductListType = {
    products:productType[],
}
function ProductList({products}:ProductListType){
    return(<>
        <h1 className="w-full text-start">Total Number Of Products: <span className="text-primary-color">{products.length} product</span></h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-start gap-4">
            {
                products.map((product:productType,index:number)=>{
                    return <ProductCard product={product} key={index}/>
                })
            }
        </section>
    </>)
}
export default ProductList;