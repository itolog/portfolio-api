import { Controller, Get } from '@nestjs/common';
import { WorksService } from './works.service';
import { Works } from './schemas/works.schema';

@Controller('works')
export class WorksController {
  constructor(private worksService: WorksService) {}

  @Get()
  async works(): Promise<Works[] | ResError[]> {
    try {
      return await this.worksService.getWorks();
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
