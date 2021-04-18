import React from 'react';
import {useSelector} from "react-redux";
import {selectInvoiceTitle} from "../../store/invoiceTitle";
import {selectProducts} from '../../store/products'
import {
	selectFormBuisnessNumber,
	selectFormEmail,
	selectFormName,
	selectFormPhone,
	selectFormStreet
} from "../../store/form";
import {selectBillEmail, selectBillName, selectBillPhone, selectBillStreet} from "../../store/bill";
import ProductReport from "../product-report/ProductReport";
import ProductReportFinal from "../product-report-final/ProductReportFinal";

const ClientInvoice = () => {
	const invoiceTitle = useSelector(selectInvoiceTitle)
	const name = useSelector(selectFormName)
	const email = useSelector(selectFormEmail)
	const street = useSelector(selectFormStreet)
	const phone = useSelector(selectFormPhone)
	const buisnessNumber = useSelector(selectFormBuisnessNumber)
	const billName = useSelector(selectBillName)
	const billEmail = useSelector(selectBillEmail)
	const billStreet = useSelector(selectBillStreet)
	const billPhone = useSelector(selectBillPhone)
	const products = useSelector(selectProducts)
	const productReportList = products.map(product => (<ProductReport product = {product} key={product.id} />))


	return (
		<React.Fragment>
			<div className="client-invoice">
				<div className="d-flex justify-content-between invoice-title">
					<div className="">
						<h2> {invoiceTitle ? invoiceTitle : 'Invoice'} </h2>
					</div>
					<div>
						<div className="company-logo">
							<img src="https://timerni.com/frontend/new_theme/assets/img/logo-top.png" alt="our logo"/>
						</div>
					</div>
				</div>
				<div className="form-invoice">
					<div className="row">
						<div className="col-md-6">
							<address>
								<h2>Form</h2>
								<strong>{name ? name : 'Name'}</strong>
								<div className="cl-info">
									<p>{email ? email : 'email'}</p>
									<p>{street ? street : 'street address'}</p>
									<p>P: {phone ? phone : '(123) 45678'}</p>
								</div>
							</address>


						</div>
						<div className="col-md-6">
							<address>
								<h2>Bill</h2>
								<strong>{billName ? billName : 'Name'}</strong>
								<div className="cl-info">
									<p>{billEmail ? billEmail : 'email'}</p>
									<p>{billStreet ? billStreet : 'street address'}</p>
									<p>P: {billPhone ? billPhone : '(123) 3453'}</p>
								</div>
							</address>

						</div>
					</div>
				</div>
				<div className="form-invoice mt-5">
					<div className="row">
						<div className="col-md-6">
							<div className="label-info d-flex align-items-center">
								<label>Name</label>
								<p>INV0001</p>
							</div>
							<div className="label-info d-flex align-items-center">
								<label>Name</label>
								<p>INV0001</p>
							</div>
							<div className="label-info d-flex align-items-center">
								<label>Name</label>
								<p>INV0001</p>
							</div>

						</div>
					</div>
				</div>

				<div className="panel-body mt-4">
					<div className="table-responsive">
						<table className="table table-condensed">
							<thead>
							<tr>
								<td className="text-center">Description</td>
								<td className="text-center">Price</td>
								<td className="text-center">Quantity</td>
								<td className="text-right">Totals</td>
							</tr>
							</thead>
							<tbody style={{borderBottom: '1 solid #000'}}>
							{/*foreach ($order->lineItems as $line) or some such thing here */}
							{productReportList}

							</tbody>
						</table>
						<ProductReportFinal products={products}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default ClientInvoice;