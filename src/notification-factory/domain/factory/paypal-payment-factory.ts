import { Payment } from "../payment-interface";
import { PaypalPayment } from "../paypal-payment";
import { PaymentFactory } from "./payment-factory";


export class PaypalPaymentFactory extends PaymentFactory {
    createPayment(): Payment {
        return new PaypalPayment();
    }
  
}