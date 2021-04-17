import React from 'react';

const EmailPreview = () => {
	return (
		<React.Fragment>
			<div className="preview">
				<h2>PREVIEW BY EMAIL</h2>

				<input type="email" className="form-control my-1" autoComplete="email" placeholder="name@business.com"/>
				<button type="button" className="btn btn-edit active">Send</button>
			</div>
		</React.Fragment>
	);
};

export default EmailPreview;