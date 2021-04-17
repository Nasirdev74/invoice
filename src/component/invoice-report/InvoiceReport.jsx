import React from 'react';

const InvoiceReport = () => {
	return (
		<React.Fragment>
			<div>
				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Subtotal</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳0.00</span></span>
					</div>
				</div>
				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Tax (0%)</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳0.00</span></span>
					</div>
				</div>

				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Total</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳0.00</span></span>
					</div>
				</div>

				<div className="invoice-totals-row invoice-summary-subtotal">
					<div className="invoice-summary-label">Duetotal</div>
					<div className="invoice-summary-value"><span className="currency"><span className="localized-number">৳0.00</span></span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvoiceReport;