import React from 'react';

const InvoiceTitleName = () => {
	return (
		<React.Fragment>
			<div className="">
				<h2>
					<input type="text" className="form-control" id="invoice-title" name="invoice-title" placeholder="Invoice"/>
				</h2>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTitleName;