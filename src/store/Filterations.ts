import { productType } from "./productSlice";

type productsType = productType[] ;
type filterGoal = string;
class Filterations{
    static filterByCategories(products:productsType,categories:filterGoal){
        if(categories==="all"||categories===null){
            return products;
        }
        return products.filter((product:productType)=>{
            return product.category==categories;
        });
    }
    static filterBycompanies(products:productsType,compaines:filterGoal){
        if(compaines==="all"||compaines===null){
            return products;
        }
        return products.filter((product:productType)=>{
            return product.company==compaines;
        });
    }
    static filterByprices(products:productsType,prices:filterGoal){
        if(prices==="all"||prices===null){
            return products;
        }
        if(prices==='Over 150'){
            return products.filter((product:productType)=>{
                return (+(product.newPrice) >= 150);
            });
        }
        const dimention = prices.split('-');
        return products.filter((product:productType)=>{
            return (+(product.newPrice) >= +(dimention[0]))&&(+(product.newPrice) <= +(dimention[1]));
        });
    }
}
export default Filterations;