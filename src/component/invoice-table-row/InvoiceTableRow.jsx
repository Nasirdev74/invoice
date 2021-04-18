import React from 'react';

const InvoiceTableRow = ({product, productInputHandler}) => {
	return (
		<React.Fragment>

			<tr id="addr0">
				<td>
					<input
						type="text"
						name="description"
						id={product.id}
						value={product.description}
						onChange={productInputHandler}
						placeholder="Description"
						className="form-control"/>

					<textarea
						name='details'
						value={product.details}
						id={product.id}
						onChange={productInputHandler}
						className="form-control item-description-input"
						placeholder="Additional details"/>

				</td>
				<td><input
					type="number"
					name="rate"
					value={product.rate}
					id={product.id}
					onChange={productInputHandler}
					placeholder="Enter Qty"
					className="form-control qty"
					step="0"
					min="0"/></td>

				<td><input
					type="number"
					name="quantity"
					value={product.quantity}
					id={product.id}
					onChange={productInputHandler}
					placeholder="Enter Unit Price"
					className="form-control price"
					step="0.00"
					min="0"/></td>

				<td><input
					type="number"
					name="amount"
					value={product.amount}
					id={product.id}
					onChange={productInputHandler}
					placeholder="0.00"
					className="form-control price"
					step="0.00"
					min="0"/></td>

				<td className="text-center checkbox">
					<input
						type="checkbox"
						name='tax'
						value={product.tax}
						id={product.id}
						onChange={productInputHandler}
						className="form-control1"/>
					<span className="default"/>
				</td>
			</tr>


		</React.Fragment>
	);
};

export default InvoiceTableRow;