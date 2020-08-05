import { Controller, Get, Post, Body } from '@nestjs/common';

import { HomeService } from './home.service';
import { Descs } from './schemas/description.schema';
import { UserDto } from './dto/user.dto';

@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get()
  async getUserInfo(): Promise<Descs[] | ResError[]> {
    try {
      return await this.homeService.getUserInfo();
    } catch (e) {
      return [
        {
          error_message: e.message,
          erro_code: e.code,
        },
      ];
    }
  }

  @Post()
  async updateUserInfo(
    @Body() desc:UserDto,
  ): Promise<Descs[] | ResError[]> {
    try {
      return await this.homeService.updateUserInfo(desc);
    } catch (e) {
      return [
        {
          error_message: e.message,
          erro_code: e.code,
        },
      ];
    }
  }
}
