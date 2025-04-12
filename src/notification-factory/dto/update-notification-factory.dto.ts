import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificationFactoryDto } from './create-notification-factory.dto';

export class UpdateNotificationFactoryDto extends PartialType(CreateNotificationFactoryDto) {}
