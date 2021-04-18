import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'info',
	initialState: {number: '', date: '', terms: '1'},
	reducers:{
		infoUpdated: (state, action) => {
			return{
				...state,
				[action.payload.name]: action.payload.value
			}
		},
		infoReset: (state, action) => {
			return{
				...state,
				number: '',
				date: '',
				terms: ''
			}
		}
	}
})

export const selectInfoNumber = store => store.info.number
export const selectInfoDate = store => store.info.date
export const selectInfoTerms = store => store.info.terms
export const {infoUpdated, infoReset} = slice.actions
export default slice.reducer
