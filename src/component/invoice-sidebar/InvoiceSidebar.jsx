import React from 'react';
import {Discount, EmailPreview, Export, Tax} from "../index";

const InvoiceSidebar = () => {
	return (
		<React.Fragment>
			<div className="invoice-sidebar">
				<EmailPreview/>
				<Tax/>
				<Discount/>
				<Export/>
			</div>
		</React.Fragment>
	);
};

export default InvoiceSidebar;
