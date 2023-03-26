import { Invoice } from "./classes/Invoice";
import { Payment } from './classes/Payment'
import { HasFormatter } from "./interfaces/HasFormatter";


class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
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

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if ( type.value == 'invoice') {
    doc = new Invoice (tofrom.value, details.value, amount.valueAsNumber);
  }

  else {
    doc = new Payment (tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);


})