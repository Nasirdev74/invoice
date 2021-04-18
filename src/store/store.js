import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import invoiceTitle from "./invoiceTitle";
import form from './form'
import bill from './bill'
import tax from './tax'
import info from './info'
import note from './note'
import products from "./products";

const reducer = combineReducers({
	invoiceTitle,
	form,
	bill,
	tax,
	info,
	note,
	products
})

export default function(){
	return configureStore({reducer})
}
