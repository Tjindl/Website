import React from 'react';
import './TableHeading.css';
function TableHeading() {
  return (
    <div className='table-heading'>
        <div className='table-heading-item'><span className='heading'>From</span></div>
        <div className='table-heading-item'><span className='heading'>To</span></div>
        <div className='table-heading-item'><span className='heading'>Days</span></div>
        <div className='table-heading-item'><span className='heading'>Balance</span></div>
        <div className='table-heading-item'><span className='heading'>Issued</span></div>
        <div className='table-heading-item'><span className='heading'>Recieved</span></div>
        <div className='table-heading-item'><span className='heading'>Total</span></div>
        <div className='table-heading-item'><span className='heading'>Rate /Item /Day</span></div>
        <div className='table-heading-item'><span className='heading'>Rate Rs.</span></div>
        <div className='table-heading-item'><span className='heading'>Amount</span></div>
    </div>
  )
}

export default TableHeading;