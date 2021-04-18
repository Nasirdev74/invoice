import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'form',
	initialState: {
		name: '',
		email: '',
		street: '',
		phone: '',
		buisnessNumber: ''
	},
	reducers: {
		formUpdated: (state, action) => {
			return{
				...state,
				[action.payload.name]: action.payload.value
			}
		},
		formReset: (state, action) => {
			return{
				...state,
				name: '',
				email: '',
				street: '',
				phone: '',
				buisnessNumber: ''
			}
		},
		formNameUpdated: (state, action) => {
			return{
				...state,
				name: action.payload
			}
		}
	}
})

export const selectFormName = store => store.form.name
export const selectFormEmail = store => store.form.email
export const selectFormStreet = store => store.form.street
export const selectFormPhone = store => store.form.phone
export const selectFormBuisnessNumber = store => store.form.buisnessNumber
export const {formUpdated, formReset, formNameUpdated} = slice.actions
export default slice.reducer
