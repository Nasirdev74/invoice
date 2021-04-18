import React from 'react';
import {useDispatch} from 'react-redux'
import {titleReset} from "../../store/invoiceTitle";
import {formReset} from "../../store/form"
import {billReset} from "../../store/bill"
import {infoReset} from '../../store/info'
import {productReset} from "../../store/products";
import {noteReset} from '../../store/note'

const InvoiceAction = () => {
	const dispatch = useDispatch()
	const clearInvoice = () => {
		dispatch(titleReset())
		dispatch(formReset())
		dispatch(billReset())
		dispatch(infoReset())
		dispatch(productReset())
		dispatch(noteReset())
	}
	return (
		<React.Fragment>
			<div className="d-flex justify-content-between mt-2">
				<button
					id="clear_invoice"
					onClick={clearInvoice}
					className="btn  pull-left">
					Clear Invoice</button>

				<button
					id="delete_invoice"
					onClick={clearInvoice}
					className="btn  pull-right">
					Delete Invoice</button>
			</div>
		</React.Fragment>
	);
};

export default InvoiceAction;