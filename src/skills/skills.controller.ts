import { Controller, Get } from '@nestjs/common';

import { SkillsService } from './skills.service';
import { Skills } from './schemas/skills.schema';

@Controller('skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @Get()
  async skills(): Promise<Skills[] | ResError[]> {
    try {
      return await this.skillsService.getSkills();
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
