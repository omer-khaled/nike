import {createSlice} from '@reduxjs/toolkit';
import { productType } from './productSlice';
type initialStateTyps = {
    cart:{product:productType,qty:number}[],
    total:number
}
const initialState:initialStateTyps = {
    cart:[],
    total:0
};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        getProduct:(state)=>{
            const cart = localStorage.getItem('cart');
            const total = localStorage.getItem('total');
            if(cart){
                state.cart = JSON.parse(cart);
                state.total = Number(total);
            }
        },
        addproduct:(state,action)=>{
            let cart:string|null|{product:productType,qty:number}[] = localStorage.getItem('cart');
            const total = localStorage.getItem('total');
            const newProduct = action.payload;
            if(cart){
                cart = JSON.parse(cart) as [];
                const find:number = cart.findIndex((el)=>{
                    return (el.product.title===newProduct.title)&&(el.product.img===newProduct.img);
                });
                if(find!==-1){
                    cart[find].qty+=1;
                    localStorage.setItem('total',JSON.stringify(Number(total) + +newProduct.newPrice));
                    localStorage.setItem('cart',JSON.stringify([...cart]));
                    state.cart[find].qty += 1;
                    state.total += +(action.payload.newPrice);
                }else{
                    localStorage.setItem('total',JSON.stringify(Number(total) + +newProduct.newPrice));
                    localStorage.setItem('cart',JSON.stringify([...cart,{product:newProduct,qty:1}]));
                    state.cart.push({product:newProduct,qty:1});
                    state.total += +(action.payload.newPrice);
                }
            }else{
                localStorage.setItem('total',JSON.stringify(+newProduct.newPrice));
                localStorage.setItem('cart',JSON.stringify([{product:newProduct,qty:1}]));
                state.cart.push({product:newProduct,qty:1});
                state.total += +(action.payload.newPrice);
            }
        },
        removeProduct:(state,action)=>{
            let cart:string|null|{product:productType,qty:number}[] = localStorage.getItem('cart');
            const total = localStorage.getItem('total');
            if(cart!==null){
                cart = JSON.parse(cart) as [];
                cart.splice(action.payload,1);
                localStorage.setItem('cart',JSON.stringify([...cart]));
                localStorage.setItem('total',JSON.stringify(Number(total) - (+(state.cart[action.payload].product.newPrice) * +(state.cart[action.payload]).qty)));
            }
            state.total -= (+(state.cart[action.payload].product.newPrice) * +(state.cart[action.payload]).qty);
            state.cart.splice(action.payload,1);
        },
    }
});
const {reducer:cartReducer,actions:{addproduct,removeProduct,getProduct}}=cartSlice;
export {cartReducer,getProduct,addproduct,removeProduct};