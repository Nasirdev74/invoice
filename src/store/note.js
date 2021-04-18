import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'note',
	initialState: '',
	reducers: {
		noteUpdated: (state, action) => {
			return action.payload
		},
		noteReset: (notes, action) => {
			return ''
		}
	}
})

export const selectNote = store => store.note
export const {noteUpdated, noteReset} = slice.actions
export default slice.reducer