import React from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Export = () => {
	const getLink = () => {
		const pdfContent = document.querySelector('.toPDF')
		if (pdfContent) {
			html2canvas(pdfContent)
				.then((canvas) => {
					const imgData = canvas.toDataURL('/image/png');
					const pdf = new jsPDF();
					pdf.addImage(imgData, 'JPEG', 0, 0);
					window.open(pdf.output('bloburl'))
				})
		} else {
			console.log('generating pdf failed!')
		}
	}
	const printInvoice = () => {
		const pdfContent = document.querySelector('.toPDF')
		if(pdfContent){
			html2canvas(pdfContent)
				.then((canvas) => {
					const imgData = canvas.toDataURL('/image/png');
					const pdf = new jsPDF();
					pdf.addImage(imgData, 'JPEG', 0, 0);
					pdf.autoPrint()
				})
		}else{
			console.log('generating pdf failed!')
		}
	}
	return (
		<React.Fragment>
			<div className="preview">
				<h2>Optoin</h2>
				<div className="invoice-actions-export">
					<button
						onClick={getLink}
						className="btn btn-download ">
						Get Link</button>
					<button
						onClick={printInvoice}
						className="btn btn-email">
						Print Invoice</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Export;
