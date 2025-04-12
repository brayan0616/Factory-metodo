import { Payment } from "../payment-interface";


export abstract class PaymentFactory {
    
    abstract createPayment(): Payment;

    generatePayment(amount:number): string {
        const payment = this.createPayment();
        return payment.generatePayment(amount);
    }
}