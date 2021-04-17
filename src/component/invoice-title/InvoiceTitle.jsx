import React from 'react';
import {InvoiceTitleLogo, InvoiceTitleName} from "../index";

const InvoiceTitle = () => {
	return (
		<React.Fragment>
			<div className="d-flex justify-content-between invoice-title">
				<InvoiceTitleName/>
				<InvoiceTitleLogo/>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTitle;