import React from 'react';

const Export = () => {
	return (
		<React.Fragment>
			<div className="preview">
				<h2>Optoin</h2>
				<div className="invoice-actions-export">
					<button className="btn btn-download ">Get Link</button>
					<button className="btn btn-email">Print Invoice</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Export;
