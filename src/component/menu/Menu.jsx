import React from 'react';
import html2canvas from "html2canvas";
import ReactDOMServer from 'react-dom/server'
import jsPDF from "jspdf";

const Menu = () => {
	const downLoadPDF = () => {
		console.log('pdf downloaded')
		const pdfContent = document.querySelector('.toPDF')
		if(pdfContent){
			html2canvas(pdfContent)
				.then((canvas) => {
					const imgData = canvas.toDataURL('/image/png');
					const pdf = new jsPDF();
					pdf.addImage(imgData, 'JPEG', 0, 0);
					window.open(pdf.output('bloburl'))
					pdf.autoPrint()
					pdf.save("download.pdf");
				})
		}else{
			console.log('problem with the pdf data.')
		}

	}
	return (
		<React.Fragment>
			<div className="invoice-actions d-print-none">
				<div className="btn-group btn-group-edit">
					<button type="button" className="btn btn-view ">Preview</button>
					<button type="button" className="btn btn-edit active">Edit</button>
				</div>
				<div className="loading-indicator"/>
				<div
					className="invoice-actions-export">
					<button
						className="btn btn-payment">
						Record Payment</button>
					<button
						onClick={downLoadPDF}
						className="btn btn-download ">
						<span>PDF</span>
					</button>
					<button
						className="btn btn-email btn-prime">Email Invoice</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Menu;