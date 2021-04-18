import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'tax',
	initialState: {type: '', label: '', rate: '', include: false},
	reducers: {
		taxUpdated: (state, action) => {
			return{
				...state,
				[action.payload.name]: action.payload.value
			}
		},
		taxReset: (state, action) => ({...state, type: '', label: '', rate: '', include: false})
	}
})

export const selectTaxType = store => store.tax.type
export const selectTaxLabel = store => store.tax.label
export const selectTaxRate = store => store.tax.rate
export const selectTaxInclude = store => store.tax.include
export const {taxUpdated} = slice.actions
export default slice.reducer