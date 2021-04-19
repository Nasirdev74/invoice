import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from '../../store/products'
import InvoiceTableRow from "../invoice-table-row/InvoiceTableRow";
import {productUpdated} from '../../store/products'

const InvoiceTable = () => {
	const dispatch = useDispatch()
	const products = useSelector(selectProducts)
	const productInputHandler = (e) => {
		const name = e.target.name
		let value = e.target.value
		if(name === 'tax'){
			if(value === 'false'){
				value = true
			}else{
				value = false
			}
		}
		const id = e.target.id
		dispatch(productUpdated({id, name, value}))
	}
	const productsRow = products.map(product => <InvoiceTableRow
		product={product}
		key={product.id} productInputHandler={productInputHandler}/>)

	return (
		<React.Fragment>
			<table className="table table-bordered table-hover" id="tab_logic">
				<thead className="my-3">
				<tr>
					<th className="text-center">   DESCRIPTION </th>
					<th className="text-center"> RATE </th>
					<th className="text-center"> QTY </th>
					<th className="text-center"> AMOUNT </th>
					<th className="text-center">Tax</th>
				</tr>
				</thead>
				<tbody className="my-5">
				{productsRow}
				</tbody>
			</table>
		</React.Fragment>
	);
};

export default InvoiceTable;