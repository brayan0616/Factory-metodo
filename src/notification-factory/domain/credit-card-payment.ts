import { Payment } from "./payment-interface";


export class CreditCardPayment implements Payment{
    
    generatePayment(amount:number): string {
        return `pago generado con tarjeta de credito: ${amount}`;
    }

}