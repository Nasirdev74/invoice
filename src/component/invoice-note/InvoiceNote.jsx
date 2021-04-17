import React from 'react';

const InvoiceNote = () => {
	return (
		<React.Fragment>
			<div>
				<h3 className="mb-3">  Notes</h3>
				<textarea className="form-control" cols="5" rows="6" placeholder="Notes - any relevant information not covered, additional terms and conditions"/>
			</div>
		</React.Fragment>
	);
};

export default InvoiceNote;