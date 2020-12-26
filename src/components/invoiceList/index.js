import React, { useState } from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import "./styles.scss";

import NoDataIcon from "../../assets/images/noData.svg";

function InvoiceList() {
  const [existInfo, setExistInfo] = useState(true);

  const defaultInvoiceInfo = [
    {
      invoiceNumber: 6788,
      client: "Ulter Technologies",
      subTotal: 2000,
      discount: 10,
      total: 1800,
    },
    {
      invoiceNumber: 1234,
      client: "Luxon Engeneering",
      subTotal: 1500,
      discount: 0,
      total: 1500,
    },
    {
      invoiceNumber: 9870,
      client: "Cyvic Inc.",
      subTotal: 3200,
      discount: 0,
      total: 3200,
    },
    {
      invoiceNumber: 8765,
      client: "Samsan Tech",
      subTotal: 500,
      discount: 20,
      total: 400,
    },
  ];

  return (
    <>
      <div className="list-cotainer">
        <h1>Invoices</h1>
        {existInfo ? (
          <div className="table-container" id="card">
            <table role="table">
              <thead>
                <tr role="row">
                  <th role="columnheader">Invoice Number</th>
                  <th role="columnheader">Client</th>
                  <th role="columnheader">Subtotal</th>
                  <th role="columnheader">Discount</th>
                  <th role="columnheader">Total</th>
                </tr>
              </thead>
              <tbody>
                {defaultInvoiceInfo.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th data-label="Invoice Number">{item.invoiceNumber}</th>
                      <th data-label="Client">{item.client}</th>
                      <th data-label="Subtotal">{item.subTotal}</th>
                      <th data-label="Discount">{item.discount}</th>
                      <th data-label="Total">{item.total}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-info">
            <img src={NoDataIcon} alt="No data icon" className="no-data-icon" />
            <h2>There are no data to show</h2>
          </div>
        )}
        <Link to="/new-invoice" className="new-invoice-btn">
          <Button buttonSize="btn--large">New Invoice</Button>
        </Link>
      </div>
    </>
  );
}

export default InvoiceList;
