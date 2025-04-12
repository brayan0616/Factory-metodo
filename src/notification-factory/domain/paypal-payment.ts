import { Payment } from "./payment-interface";


export class PaypalPayment implements Payment {
    generatePayment(amount:number): string {
        return `pago generado con Paypal: ${amount}`;
    }
}