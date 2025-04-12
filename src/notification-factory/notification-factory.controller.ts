import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseFloatPipe } from '@nestjs/common';
import { NotificationFactoryService } from './notification-factory.service';
import { CreateNotificationFactoryDto } from './dto/create-notification-factory.dto';
import { UpdateNotificationFactoryDto } from './dto/update-notification-factory.dto';

@Controller('notification-factory')
export class NotificationFactoryController {
  constructor(private readonly notificationFactoryService: NotificationFactoryService) {}

  @Post()
  create(@Body() createNotificationFactoryDto: CreateNotificationFactoryDto) {
    return this.notificationFactoryService.create(createNotificationFactoryDto);
  }

  @Get()
  findAll(@Query('type') type: string, @Query('amount', ParseFloatPipe) amount: number) {
    return this.notificationFactoryService.findAll(type, amount);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notificationFactoryService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationFactoryDto: UpdateNotificationFactoryDto) {
    return this.notificationFactoryService.update(+id, updateNotificationFactoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationFactoryService.remove(+id);
  }
}
