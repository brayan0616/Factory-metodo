import { CreditCardPayment } from "../credit-card-payment";
import { Payment } from "../payment-interface";
import { PaymentFactory } from "./payment-factory";


export class CreditCardPaymentFactory extends PaymentFactory {

  createPayment(): Payment {
    return new CreditCardPayment();
  }
}