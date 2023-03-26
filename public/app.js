"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("./classes/Payment");
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'works on mario website', 2000);
const invTwo = new Invoice('typho', 'works on typho website', 3000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
