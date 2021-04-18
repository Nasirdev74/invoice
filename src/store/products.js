import {createSlice} from "@reduxjs/toolkit";
const slice = createSlice({
	name: 'products',
	initialState: [
		 {id: 1, description: '', details: '', rate: '', quantity: '', amount: '', tax: false}
	],
	reducers: {
		productAdded: (products, action) => {
			return[
				...products,
				{id: products.length + 1, description: '', details: '', rate: '', quantity: '', amount: '', tax: false}
			]
		},
		productRemoved: (products, action) => {
			if(products.length > 1){
				const lastProduct = products[products.length -1]
				return products.filter(e => e.id !== lastProduct.id)
			}

			else return products
		},
		productUpdated: (products, action) => {
			const index = products.findIndex((product) => product.id !== action.payload.id)
			return products.map((product, index) => {
				if(index !== action.payload.id - 1){
					return product
				}else{
					return{
						...product,
						[action.payload.name]: action.payload.value
					}
				}
			})
		},
		productReset: (products, action) => {
			return[
				{id: 1, description: '', details: '', rate: '', quantity: '', amount: '', tax: false}
			]
		}
	}
})

export const selectProducts = store => store.products
export const {productAdded,productRemoved, productUpdated, productReset } = slice.actions
export default slice.reducer