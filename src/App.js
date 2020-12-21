import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InvoiceList from "./components/invoiceList";

function App() {
  return (
    <Router>
      <Navbar />
      <InvoiceList />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
