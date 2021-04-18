import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {billUpdated, selectBillEmail, selectBillName, selectBillPhone, selectBillStreet} from "../../store/bill";

const InvoiceBill = () => {
	const dispatch = useDispatch()
	const name = useSelector(selectBillName)
	const email = useSelector(selectBillEmail)
	const street = useSelector(selectBillStreet)
	const phone = useSelector(selectBillPhone)
	const billInputHandler = e => {
		const name = e.target.name
		const value = e.target.value
		dispatch(billUpdated({name, value}))
	}
	return (
		<React.Fragment>
			<div className="col-lg-6 col-md-12">
				<h2>Bil</h2>
				<div className="input-with-label-wrapper">
					<label>Name</label>
					<input
						type="text"
						name='name'
						value={name}
						onChange={billInputHandler}
						className="form-control"
						placeholder="First name"/>
				</div>

				<div className="input-with-label-wrapper">
					<label>Email</label>
					<input
						type="email"
						name='email'
						value={email}
						onChange={billInputHandler}
						className="form-control"
						autoComplete="email"
						placeholder="name@business.com"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Street</label>
					<input
						type="text"
						name='street'
						value={street}
						onChange={billInputHandler}
						className="form-control"
						placeholder="Street"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Phone</label>
					<input
						type="tel"
						name='phone'
						value={phone}
						onChange={billInputHandler}
						className="form-control"
						placeholder="(123) 456 789"/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvoiceBill;