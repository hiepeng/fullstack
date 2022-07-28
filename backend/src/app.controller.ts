import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getSong')
  getSong() {
    return this.appService.getSong();
  }

  @Post('postSong')
  postSong(@Body() data: any) {
    return this.appService.postSong(data);
  }
  @Delete('deleteSong/:id')
  deleteSong(@Param('id') id: any) {
    return this.appService.deleteSong(id);
  }
  @Put('updateSong/:id')
  updateSong(@Body() data: any, @Param('id') id: any) {
    return this.appService.updateSong(id, data);
  }
}
