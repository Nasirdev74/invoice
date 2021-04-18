import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectInvoiceTitle, titleUpdated} from "../../store/invoiceTitle";

const InvoiceTitleName = () => {
	const dispatch = useDispatch()
	const invoiceTitle = useSelector(selectInvoiceTitle)

	const invoiceTitleInputHandler = e => {
		dispatch(titleUpdated(e.target.value))
	}
	return (
		<React.Fragment>
			<div className="">
				<h2>
					<input
						type="text"
						className="form-control"
						id="invoice-title"
						name="invoice-title"
						value={invoiceTitle}
						onChange={invoiceTitleInputHandler}
						placeholder="Invoice"/>
				</h2>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTitleName;