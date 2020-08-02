import { Controller, Get, Post, Body } from '@nestjs/common';

import { HomeService } from './home.service';
import { Descs } from './schemas/description.schema';

@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get()
  async desctription(): Promise<Descs[] | ResError[]> {
    try {
      return await this.homeService.getDescriptions();
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
  async updateDesctription(
    @Body() desc: { descriptions: string },
  ): Promise<Descs[] | ResError[]> {
    try {
      return await this.homeService.updateDescriptions(desc.descriptions);
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
