import React, { useState } from "react";

class Order {
    constructor(from, to, days, balance, issued, received, total, rateItemDay, rateRs, amount) {
        this.from = from;
        this.to = to;
        this.days = days;
        this.balance = balance;
        this.issued = issued;
        this.received = received;
        this.total = total;
        this.rateItemDay = rateItemDay;
        this.rateRs = rateRs;
        this.amount = amount;
    }
}



function DataTable() {

    return(<></>)

}

export default DataTable;
