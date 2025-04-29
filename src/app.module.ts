import { Module } from '@nestjs/common';
import { NotificationFactoryModule } from './notification-factory/notification-factory.module';
import { SmsFactoryModule } from './sms-factory/sms-factory.module';


@Module({
  imports: [NotificationFactoryModule, SmsFactoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
