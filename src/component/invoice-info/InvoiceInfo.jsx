import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {infoUpdated, selectInfoDate, selectInfoNumber, selectInfoTerms} from "../../store/info";

const InvoiceInfo = () => {
	const dispatch = useDispatch()
	const number = useSelector(selectInfoNumber)
	const date = useSelector(selectInfoDate)
	const terms = useSelector(selectInfoTerms)
	const infoInputHandler = e => {
		const name = e.target.name
		const value = e.target.value
		dispatch(infoUpdated({name, value}))
	}
	return (
		<React.Fragment>
			<div className=" col-lg-6 col-md-12">
				<div className="input-with-label-wrapper">
					<label>Number</label>
					<input
						type="text"
						name='number'
						value={number}
						onChange={infoInputHandler}
						id="invoice-number"
						className="form-control"
						maxLength="16"
						placeholder="INV0000"/>
				</div>
				<div className="input-with-label-wrapper">
					<label>Date</label>
					<input
						type="date"
						name='date'
						value={date}
						onChange={infoInputHandler}
						className="form-control"
						min="2005-01-01"
						max="2019-01-01"/>

				</div>
				<div className="input-with-label-wrapper">
					<label>Terms</label>
					<select
						name='terms'
						value={terms}
						onChange={infoInputHandler}
						className="form-control custom-select" >
						<option value='1' >1</option>
						<option value='2' >2</option>
						<option value='3' >3</option>
						<option value='4' >4</option>
						<option value='5' >5</option>
					</select>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InvoiceInfo;