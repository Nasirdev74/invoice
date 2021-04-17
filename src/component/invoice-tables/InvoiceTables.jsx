import React from 'react';
import {InvoiceAction, InvoiceNote, InvoiceReport, InvoiceTable, InvoiceTableAction} from "../index";

const InvoiceTables = () => {
	return (
		<React.Fragment>
			<div className="invoice-table1">
				<InvoiceTable/>
				<InvoiceTableAction/>
				<InvoiceReport/>
				<InvoiceNote/>
				<InvoiceAction/>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTables;