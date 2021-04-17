import React from 'react';
import {MainInvoice, InvoiceSidebar, Menu} from "../index";

const InvoiceContainer = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-lg-9 col-md-12">
						<Menu/>
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

export default InvoiceContainer;