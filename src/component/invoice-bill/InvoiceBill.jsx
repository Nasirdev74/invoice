import React from 'react';

const InvoiceBill = () => {
	return (
		<React.Fragment>
			<div className="col-lg-6 col-md-12">
				<h2>Bil</h2>
				<div className="input-with-label-wrapper">
					<label>Name</label>
					<input type="text" className="form-control" placeholder="First name"/>
				</div>

				<div className="input-with-label-wrapper">
					<label>Email</label>
					<input type="email" className="form-control" autoComplete="email" placeholder="name@business.com"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Street</label>
					<input type="text" className="form-control" placeholder="Street"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Phone</label>
					<input type="tel" className="form-control" placeholder="(123) 456 789"/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvoiceBill;