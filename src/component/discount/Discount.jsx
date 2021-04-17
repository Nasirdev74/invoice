import React from 'react';

const Discount = () => {
	return (
		<React.Fragment>
			<div className="preview">
				<h2>Discount</h2>
				<div className="input-with-label-wrapper">
					<label>Type</label>
					<select className="form-control custom-select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>
			<div className="preview">
				<h2>Discount</h2>
				<div className="input-with-label-wrapper">
					<label>Type</label>
					<select className="form-control custom-select">
						<option value="cad">CAD</option>
						<option value="usd">USD</option>
						<option value="eur">EUR</option>
						<option value="gbp">GBP</option>
						<option value="ars">ARS</option>
						<option value="aud">AUD</option>
						<option value="bbd">BBD</option>
					</select>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Discount;