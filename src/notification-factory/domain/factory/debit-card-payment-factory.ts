import { DebitCardPayment } from "../debit-card-payment";
import { Payment } from "../payment-interface";
import { PaymentFactory } from "./payment-factory";


export class DebitCardPaymentFactory extends PaymentFactory {

  createPayment(): Payment {
    return new DebitCardPayment();
  }
}