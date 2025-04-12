import { Module } from '@nestjs/common';
import { NotificationFactoryModule } from './notification-factory/notification-factory.module';


@Module({
  imports: [NotificationFactoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
