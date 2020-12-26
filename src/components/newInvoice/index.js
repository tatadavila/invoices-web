import React, { useState } from "react";
import "./styles.scss";
import DatePicker from "react-date-picker";
import { v4 as uuidv4 } from "uuid";
import { clients, products } from "../data";
import { Button } from "../button";
import { RiCalendar2Fill } from "react-icons/ri";
import RowItems from "../rowItems";

function InvoiceForm() {
  const [date, setDate] = useState(new Date());
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [row, setRow] = useState(0);
  const [discount, setDiscount] = useState(0);
  const addRowHandler = () => {
    setRow(row + 1);
  };
  const [productSelected, setProductSelected] = useState({});

  const handleAddRowItem = (e) => {
    this.setProductSelected({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat([
        { line: uuidv4(), name: "", description: "", quantity: 0, price: 0.0 },
      ]),
    });
  };

  console.log("DISCOUNT", discount);

  return (
    <>
      <div className="form-container" id="mobile">
        <h1>Invoices</h1>
        <form>
          <div className="form-header">
            <div className="header-row">
              <label> Invoice Number</label>
              <input
                id="right-item"
                type="text"
                value={invoiceNumber}
                disabled
              />
            </div>
            <div className="header-row">
              <label>Date</label>
              <DatePicker
                className="date-picker"
                id="right-item"
                clearIcon={null}
                format="M-d-y"
                calendarIcon={<RiCalendar2Fill className="calendar-icon" />}
                onChange={setDate}
                required={true}
                value={date}
              />
            </div>
            <div className="header-row">
              <label>Client</label>
              <select id="right-item" defaultValue="">
                <option hidden value="">
                  Select..
                </option>
                {clients.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="header-row">
              <label>Discount</label>
              <input
                id="right-item"
                type="number"
                min="0"
                max="100"
                placeholder="0%"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>
          <div className="form-body">
            <div className="select-product">
              <label>Product</label>
              <select id="right-item" defaultValue="">
                <option hidden value="">
                  Select..
                </option>
                {products.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item.id}
                      onChange={(e) =>
                        setProductSelected({
                          id: e.currentTarget.id,
                          description: item.description,
                          price: item.price,
                        })
                      }
                    ></option>
                  );
                })}
              </select>
            </div>
            <Button>Add Item</Button>
          </div>
        </form>
        {/* <RowItems addHandler={this.handleAddRowItem} /> */}
      </div>
    </>
  );
}

export default InvoiceForm;
