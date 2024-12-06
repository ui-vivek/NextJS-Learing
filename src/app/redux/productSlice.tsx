import { createSlice, nanoid } from "@reduxjs/toolkit"

const ProductState = {
    products: []
}
const Slice = createSlice({
    name: 'productes',
    initialState: ProductState,
    reducers: {
        addProduct: (state: any, action: { payload: { product: any } }) => {
            const data = {
                id: nanoid(),
                name: action.payload.product.name,
                price: action.payload.product.price,
                productType: action.payload.product.productType
            }

            state.products.push(data);
        }
    }
})

export const { addProduct } = Slice.actions;
export default Slice.reducer;