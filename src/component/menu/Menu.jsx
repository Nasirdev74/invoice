import React from 'react';

const Menu = () => {
	return (
		<React.Fragment>
			<div className="invoice-actions d-print-none">
				<div className="btn-group btn-group-edit">
					<button type="button" className="btn btn-view ">Preview</button>
					<button type="button" className="btn btn-edit active">Edit</button>
				</div>
				<div className="loading-indicator"></div>
				<div className="invoice-actions-export">
					<button className="btn btn-payment">Record Payment</button>
					<button className="btn btn-download "><span>PDF</span></button>
					<button className="btn btn-email btn-prime">Email Invoice</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Menu;