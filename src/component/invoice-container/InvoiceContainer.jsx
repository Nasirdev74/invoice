import React from 'react';
import './InvoiceContainer.css'
import {MainInvoice, InvoiceSidebar} from "../index";

const InvoiceContainer = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-lg-9 col-md-12">
						<div className="invoice-detail-accent"/>
						<MainInvoice/>
					</div>
					<div className="col-lg-3 col-md-12">
						<InvoiceSidebar/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvoiceContainer