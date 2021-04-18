import React from 'react';

const ProductReport = ({product}) => {
	return (
		<React.Fragment>
			<tr>
				<td className="text-center">{product.description}</td>

				<td className="text-center">{product.rate}</td>
				<td className="text-center">{product.quantity}</td>
				<td className="text-right">{product.quantity * product.rate}</td>
			</tr>
		</React.Fragment>
	);
};

export default ProductReport;