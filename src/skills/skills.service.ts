import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Skills } from './schemas/skills.schema';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skills.name) private skillsModel: Model<Skills>) {}

  async getSkills(): Promise<Skills[]> {
    try {
      return await this.skillsModel.find();
    } catch (e) {
      throw new Error(e);
    }
  }
}
