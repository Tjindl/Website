import React from 'react';
import './CustomerData.css';

function CustomerData() {
    return (
        <div className='info'>
            <div className="name"><h7 className="customer-info">Customer Name: </h7><input className="customer-info" type="text" placeholder="Customer Name" /></div>
            <div className='date'><h7 className="customer-info">Dated: </h7><input className="customer-info" type="date" placeholder="Date" /></div>
            <div className='bill'><h7 className="customer-info">Bill No: </h7><input className="customer-info" type="number" placeholder="Bill No" /></div>
        </div>
    );
}

export default CustomerData;