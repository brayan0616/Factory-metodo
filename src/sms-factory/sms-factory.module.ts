import { Module } from '@nestjs/common';
import { SmsFactoryService } from './sms-factory.service';
import { SmsFactoryController } from './sms-factory.controller';

@Module({
  controllers: [SmsFactoryController],
  providers: [SmsFactoryService],
})
export class SmsFactoryModule {}
