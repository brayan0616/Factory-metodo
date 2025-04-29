import { Injectable } from '@nestjs/common';
import { CreateSmsFactoryDto } from './dto/create-sms-factory.dto';
import { UpdateSmsFactoryDto } from './dto/update-sms-factory.dto';

@Injectable()
export class SmsFactoryService {
  create(createSmsFactoryDto: CreateSmsFactoryDto) {
    return 'This action adds a new smsFactory';
  }

  findAll() {
    return `This action returns all smsFactory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smsFactory`;
  }

  update(id: number, updateSmsFactoryDto: UpdateSmsFactoryDto) {
    return `This action updates a #${id} smsFactory`;
  }

  remove(id: number) {
    return `This action removes a #${id} smsFactory`;
  }
}
