import React from 'react';
import {InvoiceBill, InvoiceForm, InvoiceInfo, InvoiceTables, InvoiceTitle} from "../index";

const MainInvoice = () => {
	return (
		<React.Fragment>
			<div className="invoice-container">
				<div className="invoice-detail-title content-block">
					<InvoiceTitle/>
					<div className="form-invoice">
						<form>
							<div className="row">
								<InvoiceForm/>
								<InvoiceBill/>
								<div><hr/></div>
								<InvoiceInfo/>
							</div>
						</form>
					</div>
				</div>
				<InvoiceTables/>
			</div>
		</React.Fragment>
	);
};

export default MainInvoice;