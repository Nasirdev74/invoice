import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
	formNameUpdated,
	formUpdated,
	selectFormBuisnessNumber,
	selectFormEmail,
	selectFormName,
	selectFormPhone,
	selectFormStreet
} from "../../store/form";

const InvoiceForm = () => {
	const dispatch = useDispatch()
	const name = useSelector(selectFormName)
	const email = useSelector(selectFormEmail)
	const street = useSelector(selectFormStreet)
	const phone = useSelector(selectFormPhone)
	const buisnessNumber = useSelector(selectFormBuisnessNumber)

	const formInputHandler = e => {
		const name = e.target.name
		const value = e.target.value
		dispatch(formUpdated({name, value}))
	}

	return (
		<React.Fragment>
			<div className="col-lg-6 col-md-12">
				<h2>Form</h2>
				<div className="input-with-label-wrapper">
					<label>Name</label>
					<input
						type="text"
						name='name'
						value={name}
						onChange={formInputHandler}
						className="form-control"
						placeholder="First name"/>
				</div>

				<div className="input-with-label-wrapper">
					<label>Email</label>
					<input
						type="email"
						name='email'
						value={email}
						onChange={formInputHandler}
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
						onChange={formInputHandler}
						className="form-control"
						placeholder="Street"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Phone</label>
					<input
						type="tel"
						name='phone'
						value={phone}
						onChange={formInputHandler}
						className="form-control"
						placeholder="(123) 456 789"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Business Number</label>
					<input
						type="tel"
						name='buisnessNumber'
						value={buisnessNumber}
						onChange={formInputHandler}
						className="form-control"
						placeholder="(123) 456 789"/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvoiceForm;