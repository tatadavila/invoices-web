import React from "react";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa";
import "./styles.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div Name="navbar-container container">
          <Link to="/" className="navbar-logo">
            <FaFileInvoiceDollar className="navbar-icon" />
            INVOICES
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
