import React from 'react';

const InvoiceTable = () => {
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
				<tr id="addr0">
					<td>
						<input type="text" name="product[]" placeholder="Description" className="form-control"/>
						<textarea className="form-control item-description-input" placeholder="Additional details"/>
					</td>
					<td><input type="number" name="qty[]" placeholder="Enter Qty" className="form-control qty" step="0" min="0"/></td>
					<td><input type="number" name="price[]" placeholder="Enter Unit Price" className="form-control price" step="0.00" min="0"/></td>
					<td><input type="number" name="amount[]" placeholder="0.00" className="form-control price" step="0.00" min="0"/></td>

					<td className="text-center checkbox">
						<input type="checkbox" className="form-control1"/>
						<span className="default"/>
					</td>
				</tr>
				<tr id="addr1">
					<td>
						<input type="text" name="product[]" placeholder="Description" className="form-control"/>
						<textarea className="form-control item-description-input" placeholder="Additional details"/>
					</td>
					<td><input type="number" name="qty[]" placeholder="Enter Qty" className="form-control qty" step="0" min="0"/></td>
					<td><input type="number" name="price[]" placeholder="Enter Unit Price" className="form-control price" step="0.00" min="0"/></td>
					<td><input type="number" name="amount[]" placeholder="0.00" className="form-control price" step="0.00" min="0"/></td>

					<td className="text-center checkbox">
						<input type="checkbox" className="form-control1"/>
						<span className="default"/>
					</td>
				</tr>
				</tbody>
			</table>
		</React.Fragment>
	);
};

export default InvoiceTable;