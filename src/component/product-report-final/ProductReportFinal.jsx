import React from 'react';

const ProductReportFinal = ({products}) => {
	const subtotal = () => {
		let finalSubtotal = 0
		products.forEach((product) => {
			const productSubtotal = Number(product.rate) * Number(product.quantity)
			finalSubtotal += productSubtotal
		})
		return finalSubtotal
	}
	const total = () => {
		return subtotal()
	}
	const dueTotal = () => {
		return subtotal()
	}
	return (
		<React.Fragment>
			<div>
				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Subtotal</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳{subtotal()}</span></span>
					</div>
				</div>
				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Tax (0%)</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳0.00</span></span>
					</div>
				</div>

				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Total</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳{total()}</span></span>
					</div>
				</div>

				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Duetotal</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳{dueTotal()}</span></span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductReportFinal;