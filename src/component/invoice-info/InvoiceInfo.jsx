import React from 'react';

const InvoiceInfo = () => {
	return (
		<React.Fragment>
			<div className=" col-lg-6 col-md-12">
				<div className="input-with-label-wrapper">
					<label>Number</label>
					<input type="text" id="invoice-number" className="form-control" maxLength="16" placeholder="INV0000" value="INV0001"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Date</label>
					<input type="date" value="2017-01-01" className="form-control"  min="2005-01-01" max="2019-01-01"/>

				</div>
				<div className="input-with-label-wrapper">
					<label>Terms</label>
					<select className="form-control custom-select" >
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvoiceInfo;