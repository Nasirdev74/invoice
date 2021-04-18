import React from 'react';
import {useDispatch} from "react-redux"
import {productAdded, productRemoved} from '../../store/products'

const InvoiceTableAction = () => {
	const dispatch = useDispatch()
	const addRow = () => {
		dispatch(productAdded())
	}
	const deleteRow = () => {
		dispatch(productRemoved())
	}
	return (
		<React.Fragment>
			<div className="d-flex justify-content-between">
				<button
					id="add_row"
					onClick={addRow}
					className="btn  pull-left">
					Add Row
				</button>

				<button
					id="delete_row"
					onClick={deleteRow}
					className=" btn  pull-right">
					Delete Row</button>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTableAction;