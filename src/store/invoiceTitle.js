import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
 	name: 'invoiceTitle',
	initialState: 'Invoice',
	reducers: {
		titleUpdated: (title= 'Invoice', action) => {
			return action.payload
		},
		titleReset: (title, action) => {
			return ''
		}
	}
})

export const selectInvoiceTitle = store => store.invoiceTitle
export const {titleUpdated, titleReset} = slice.actions
export default slice.reducer