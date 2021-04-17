import React from 'react';

const InvoiceTableAction = () => {
	return (
		<React.Fragment>
			<div className="d-flex justify-content-between">
				<button id="add_row" className="btn  pull-left">Add Row</button>

				<button id="delete_row" className=" btn  pull-right">Delete Row</button>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTableAction;