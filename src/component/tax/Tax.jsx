import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import tax, {selectTaxInclude, selectTaxLabel, selectTaxRate, selectTaxType, taxUpdated} from "../../store/tax";

const Tax = () => {
	const dispatch = useDispatch()
	const type = useSelector(selectTaxType)
	const label = useSelector(selectTaxLabel)
	const rate = useSelector(selectTaxRate)
	const include = useSelector(selectTaxInclude)
	const taxInputHandler = e => {
		const name = e.target.name
		let value = e.target.value
		if(name === 'include')
			value = !include
		dispatch(taxUpdated({name, value}))
	}
	return (
		<React.Fragment>
			<div className="preview">
				<h2>Tax</h2>
				<div className="input-with-label-wrapper">
					<label>Type</label>
					<select
						className="form-control custom-select"
						onChange={taxInputHandler}
						name='type'
						value={type}>
						<option>On Total</option>
						<option value= '2' >2</option>
						<option value='3' >3</option>
						<option value='4' >4</option>
						<option value='5' >5</option>
					</select>
				</div>
				<div className="input-with-label-wrapper">
					<label>Label</label>
					<input
						type="text"
						onChange={taxInputHandler}
						value={label}
						className="form-control"
						id="invoice-title"
						name="label" />
				</div>
				<div className="input-with-label-wrapper">
					<label>Rate</label>
					<input
						type="number"
						value={rate}
						onChange={taxInputHandler}
						className="form-control"
						id="invoice-title"
						name="rate" />
				</div>
				<div className="input-with-label-wrapper checkbox1">
					<label>Include</label>
					<input
						type="checkbox"
						name='include'
						onChange={taxInputHandler}
						value={include}
						className="form-control"/>
				</div>

			</div>
		</React.Fragment>
	);
};

export default Tax;