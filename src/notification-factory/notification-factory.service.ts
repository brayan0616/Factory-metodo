import { Injectable } from '@nestjs/common';
import { CreateNotificationFactoryDto } from './dto/create-notification-factory.dto';
import { UpdateNotificationFactoryDto } from './dto/update-notification-factory.dto';
import {PaymentFactory,CreditCardPaymentFactory,DebitCardPaymentFactory,PaypalPaymentFactory} from './domain/factory/index';



@Injectable()
export class NotificationFactoryService {

  private paymentFactory : PaymentFactory;

  create(createNotificationFactoryDto: CreateNotificationFactoryDto) {
    return 'This action adds a new notificationFactory';
  }

  findAll(type:string, amount:number): string {
     return this.configurationFactory(type, amount);
  }


  private configurationFactory(type: string, amount: number): string {

    let finalAmount = 0.0;  
    let factory: PaymentFactory;
    if (type === 'debit-card') {

      const commissionRte = 0.01;
      finalAmount = amount + (amount * commissionRte);
      if(amount > 500) {
        finalAmount +=5;
      }
      factory = new DebitCardPaymentFactory();

    } else if (type === 'credit-card') {

        const commissionRte:number = 0.03;
        finalAmount = amount + (amount * commissionRte);
        console.log('amount', amount * commissionRte);
        console.log('finalAmount', finalAmount);
        console.log('commissionRte', commissionRte);
        if(amount > 1000) {
          finalAmount +=10;
        }
        factory = new CreditCardPaymentFactory();

    } else if (type === 'paypal') {
        const commissionRte = 0.02;
        finalAmount = amount + (amount * commissionRte);
        if(amount > 750) finalAmount +=7;
        factory = new PaypalPaymentFactory();
    } else {
        throw new Error('Invalid payment type');
    }
    return factory.generatePayment(finalAmount);
  }



  findOne(id: number) {
    return `This action returns a #${id} notificationFactory`;
  }

  update(id: number, updateNotificationFactoryDto: UpdateNotificationFactoryDto) {
    return `This action updates a #${id} notificationFactory`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificationFactory`;
  }
}
