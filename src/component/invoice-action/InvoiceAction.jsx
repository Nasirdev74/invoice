import React from 'react';

const InvoiceAction = () => {
	return (
		<React.Fragment>
			<div className="d-flex justify-content-between mt-2">
				<button id="clear_invoice" className="btn  pull-left">Clear Invoice</button>

				<button id="delete_invoice" className="btn  pull-right">Delete Invoice</button>
			</div>
		</React.Fragment>
	);
};

export default InvoiceAction;