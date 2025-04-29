import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmsFactoryService } from './sms-factory.service';
import { CreateSmsFactoryDto } from './dto/create-sms-factory.dto';
import { UpdateSmsFactoryDto } from './dto/update-sms-factory.dto';

@Controller('sms-factory')
export class SmsFactoryController {
  constructor(private readonly smsFactoryService: SmsFactoryService) {}

  @Post()
  create(@Body() createSmsFactoryDto: CreateSmsFactoryDto) {
    return this.smsFactoryService.create(createSmsFactoryDto);
  }

  @Get()
  findAll() {
    return this.smsFactoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smsFactoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmsFactoryDto: UpdateSmsFactoryDto) {
    return this.smsFactoryService.update(+id, updateSmsFactoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smsFactoryService.remove(+id);
  }
}
