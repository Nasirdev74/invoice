import React from 'react';

const Tax = () => {
	return (
		<React.Fragment>
			<div className="preview">
				<h2>Tax</h2>
				<div className="input-with-label-wrapper">
					<label>Type</label>
					<select className="form-control custom-select">
						<option>On Total</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
				<div className="input-with-label-wrapper">
					<label>Label</label>
					<input type="text" className="form-control" id="invoice-title" name="invoice-title" />
				</div>
				<div className="input-with-label-wrapper">
					<label>Rate</label>
					<input type="number" className="form-control" id="invoice-title" name="invoice-title" />
				</div>
				<div className="input-with-label-wrapper checkbox1">
					<label>Include</label>
					<input type="checkbox" className="form-control"/>
				</div>

			</div>
		</React.Fragment>
	);
};

export default Tax;