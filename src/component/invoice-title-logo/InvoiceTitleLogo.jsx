import React from 'react';

const InvoiceTitleLogo = () => {
	return (
		<React.Fragment>
			<div>
				<label className="filelabel">
					<div className="invoice-logo">
						<div>
							<i className="fas fa-image" style={{fontSize: 48}}/>
							<span className="title">
                                       + logo
                                    </span>
						</div>

						<input className="FileUpload1 form-control" id="FileInput" name="booking_attachment" type="file"/>
					</div>

				</label>
			</div>
		</React.Fragment>
	);
};

export default InvoiceTitleLogo;