import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'bill',
	initialState: {name: '', email: '', street: '', phone: ''},
	reducers: {
		billUpdated: (state, action) => {
			return{
				...state,
				[action.payload.name]: action.payload.value
			}
		},
		billReset: (state, action) => {
			return{
				...state,
				name: '',
				email: '',
				street: '',
				phone: ''
			}
		}
	}
})

export const selectBillName = store => store.bill.name
export const selectBillEmail = store => store.bill.email
export const selectBillStreet = store => store.bill.street
export const selectBillPhone = store => store.bill.phone
export const {billUpdated, billReset} = slice.actions
export default slice.reducer
