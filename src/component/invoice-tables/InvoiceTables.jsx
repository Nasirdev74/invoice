import React from 'react';
import {InvoiceAction, InvoiceNote, InvoiceTable, InvoiceTableAction} from "../index";
import {useSelector} from "react-redux";
import {selectProducts} from '../../store/products'
import ProductReportFinal from "../product-report-final/ProductReportFinal";

const InvoiceTables = () => {
	const products = useSelector(selectProducts)
	return (
		<React.Fragment>
			<div className="invoice-table1">
				<InvoiceTable/>
				<InvoiceTableAction/>
				<ProductReportFinal products={products}/>
				<InvoiceNote/>
				<InvoiceAction/>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTables;