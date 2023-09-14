import {createSlice} from '@reduxjs/toolkit';
// import {createAsyncThunk} from '@reduxjs/toolkit';
import Filterations from './Filterations';
export type productType = {
    img: string,
    title: string,
    reviews: string,
    prevPrice: string,
    newPrice: string,
    company: string,
    color: string,
    category: string,
}
type initialStateType = {
    productsData:productType[]|null|undefined,
}
// const getData = createAsyncThunk('products/getData',async(_,{rejectWithValue})=>{
//     try{
//         const products = data;
//         return products;
//     }catch(e){
//         rejectWithValue(e);
//     }
// })
const initialState:initialStateType = {
    productsData:null
};
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getData:(state,action)=>{
            state.productsData = action.payload;
        },
        executeFilteration:(state,action)=>{
            const {categories,compaines,prices,products} = action.payload;
            if(products!==null&&products!==undefined&&Array.isArray(products)){
                let filterdProducts:productType[] = [];
                filterdProducts = Filterations.filterByCategories(products,categories);
                filterdProducts = Filterations.filterBycompanies(filterdProducts,compaines);
                filterdProducts = Filterations.filterByprices(filterdProducts,prices);
                state.productsData = filterdProducts;
            }
        },
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(getData.fulfilled,(state,action)=>{
    //         state.products = action.payload;
    //     });
    //     builder.addCase(getData.pending,(state)=>{
    //         state.products = null;
    //     });
    //     builder.addCase(getData.rejected,(state)=>{
    //         state.products = null;
    //     })
    // }
});
const {reducer : productReducer,actions:{getData,executeFilteration}} = productSlice;
export {productReducer,getData,executeFilteration};