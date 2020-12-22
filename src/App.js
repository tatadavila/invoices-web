import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import NewInvoice from "./components/pages/newInvoice";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-invoice" exact component={NewInvoice} />
      </Switch>
    </Router>
  );
}

export default App;
