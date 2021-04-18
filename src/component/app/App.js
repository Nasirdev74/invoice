import './App.css';
import Experiment from "../experiment/Experiment";
import {ClientInvoiceContainer, InvoiceContainer} from "../index";

function App(props) {
  return (
    <div className="App">
      <InvoiceContainer/>
      <ClientInvoiceContainer/>
      <Experiment/>
    </div>
  );
};

export default App

