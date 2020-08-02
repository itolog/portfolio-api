import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Works } from './schemas/works.schema';

@Injectable()
export class WorksService {
  constructor(@InjectModel(Works.name) private worksModel: Model<Works>) {}

  async getWorks(): Promise<Works[]> {
    try {
      return this.worksModel.find();
    } catch (e) {
      throw new Error(e);
    }
  }
}
