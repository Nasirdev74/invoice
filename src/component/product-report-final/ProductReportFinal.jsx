import React from 'react';
import {useSelector} from "react-redux";
import {selectProducts} from "../../store/products";
import {selectTaxInclude, selectTaxLabel, selectTaxRate} from '../../store/tax'

const ProductReportFinal = () => {
	const products = useSelector(selectProducts)
	const showTax = useSelector(selectTaxInclude)
	const taxLabel = useSelector(selectTaxLabel)
	const taxRate = useSelector(selectTaxRate)


	const subtotal = () => {
		let finalSubtotal = 0
		products.forEach((product) => {
			const productSubtotal = Number(product.rate) * Number(product.quantity)
			finalSubtotal += productSubtotal
		})
		return finalSubtotal
	}

	const total = () => {
		if(showTax){
			const s = subtotal()
			return (s * taxRate/ 100) + s
		}else{
			return subtotal()
		}

	}
	const tax = () => {
		const s = subtotal()
		return s * taxRate/ 100
	}
	const dueTotal = () => {
		return total()
	}

	return (
		<React.Fragment>
			<div>
				<div className="invoice-totals-row invoice-summary-subtotal" hidden={!showTax}>
					<div className="invoice-summary-label">Subtotal</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳{subtotal()}</span></span>
					</div>
				</div>
				<div className="invoice-totals-row invoice-summary-subtotal" hidden={!showTax}>
					<div className="invoice-summary-label">{taxLabel ?
						taxLabel.charAt(0).toUpperCase() + taxLabel.slice(1)
						: 'Tax'} ({taxRate ? Number(taxRate) : '0'}%)</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">
						৳ {tax() ? tax() : '0.00'}
					</span></span>
					</div>
				</div>

				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Total</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">
						৳{total()}
					</span></span>
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