import './App.css';
import {ClientInvoiceContainer, InvoiceContainer} from "../index";

function App(props) {
  return (
    <div className="App">
      <InvoiceContainer/>
      <ClientInvoiceContainer/>
    </div>
  );
};

export default App

