import React from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {Link, useLocation} from "react-router-dom";

const Menu = (props) => {
	const downLoadPDF = () => {
		const pdfContent = document.querySelector('.toPDF')
		if(pdfContent){
			html2canvas(pdfContent)
				.then((canvas) => {
					const imgData = canvas.toDataURL('/image/png');
					const pdf = new jsPDF();
					pdf.addImage(imgData, 'JPEG', 0, 0);
					// window.open(pdf.output('bloburl'))
					// pdf.autoPrint()
					pdf.save("download.pdf");
				})
		}else{
			console.log('generating pdf failed!')
		}
	}
	const path = useLocation()
	let showPdfButton = false
	if(path.pathname === '/invoice/preview/'){
		showPdfButton = true
	}
	return (
		<React.Fragment>
			<div className="invoice-actions d-print-none">
				<div className="btn-group btn-group-edit">
					<Link to='/invoice/preview/'>
						<button type="button" className="btn btn-view">Preview</button>
					</Link>
					<Link to='/invoice/'>
						<button type="button" className="btn btn-edit">Edit</button>
					</Link>
				</div>
				<div className="loading-indicator"/>
				<div
					className="invoice-actions-export">
					<button
						className="btn btn-payment">
						Record Payment</button>
					<button
						hidden={!showPdfButton}
						onClick={downLoadPDF}
						className="btn btn-download ">
						<span>PDF</span>
					</button>
					{/*<button className="btn btn-email btn-prime">Email Invoice</button>*/}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Menu;