import { PartialType } from '@nestjs/mapped-types';
import { CreateSmsFactoryDto } from './create-sms-factory.dto';

export class UpdateSmsFactoryDto extends PartialType(CreateSmsFactoryDto) {}
