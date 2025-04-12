import { Payment } from "./payment-interface";


export class DebitCardPayment implements Payment{
    
    generatePayment(amount:number): string {
        return `pago generado con tarjeta de debito: ${amount}`;
    }

}