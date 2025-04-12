import { Module } from '@nestjs/common';
import { NotificationFactoryService } from './notification-factory.service';
import { NotificationFactoryController } from './notification-factory.controller';

@Module({
  controllers: [NotificationFactoryController],
  providers: [NotificationFactoryService],
})
export class NotificationFactoryModule {}
