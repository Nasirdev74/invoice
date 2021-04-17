import React from 'react';
import {ClientInvoice} from "../index";

const ClientInvoiceContainer = () => {
	return (
		<React.Fragment>
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-9 col-md-12">
						<div className="invoice-detail-accent"/>
						<ClientInvoice/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ClientInvoiceContainer;