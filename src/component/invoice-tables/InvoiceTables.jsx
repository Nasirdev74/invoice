import React from 'react';
import {InvoiceAction, InvoiceNote, InvoiceTable, InvoiceTableAction} from "../index";
import ProductReportFinal from "../product-report-final/ProductReportFinal";

const InvoiceTables = () => {
	return (
		<React.Fragment>
			<div className="invoice-table1">
				<InvoiceTable/>
				<InvoiceTableAction/>
				<ProductReportFinal/>
				<InvoiceNote/>
				<InvoiceAction/>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTables;