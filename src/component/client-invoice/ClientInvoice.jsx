import React from 'react';

const ClientInvoice = () => {
	return (
		<React.Fragment>
			<div className="client-invoice">
				<div className="d-flex justify-content-between invoice-title">
					<div className="">
						<h2> Invoice </h2>
					</div>
					<div>
						<div className="company-logo">
							<img src="https://timerni.com/frontend/new_theme/assets/img/logo-top.png" alt="our logo"/>
						</div>
					</div>
				</div>
				<div className="form-invoice">
					<div className="row">
						<div className="col-md-6">
							<address>
								<h2>Form</h2>
								<strong>Business Name</strong>
								<div className="cl-info">
									<p>Email</p>
									<p>Adress</p>
									<p>P:(123) 4563</p>
								</div>
							</address>


						</div>
						<div className="col-md-6">
							<address>
								<h2>Bill</h2>
								<strong>Business Name</strong>
								<div className="cl-info">
									<p>Email</p>
									<p>Adress</p>
									<p>P:(123) 4563</p>
								</div>
							</address>



						</div>
					</div>
				</div>
				<div className="form-invoice mt-5">
					<div className="row">
						<div className="col-md-6">
							<div className="label-info d-flex align-items-center">
								<label>Name</label>
								<p>INV0001</p>
							</div>
							<div className="label-info d-flex align-items-center">
								<label>Name</label>
								<p>INV0001</p>
							</div>
							<div className="label-info d-flex align-items-center">
								<label>Name</label>
								<p>INV0001</p>
							</div>

						</div>
					</div>
				</div>

				<div className="panel-body mt-4">
					<div className="table-responsive">
						<table className="table table-condensed">
							<thead>
							<tr>
								<td className="text-center">Description</td>
								<td className="text-center">Price</td>
								<td className="text-center">Quantity</td>
								<td className="text-right">Totals</td>
							</tr>
							</thead>
							<tbody style={{borderBottom: '1 solid #000'}}>
							{/*foreach ($order->lineItems as $line) or some such thing here */}
							<tr>
								<td className="text-center">Lorem ipsum dolor sit, amet.</td>

								<td className="text-center">$10.99</td>
								<td className="text-center">1</td>
								<td className="text-right">$10.99</td>
							</tr>
							</tbody>
						</table>
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
					</div>
				</div>

			</div>
		</React.Fragment>
	);
};

export default ClientInvoice;