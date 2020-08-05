import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Descs } from './schemas/description.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class HomeService {
  constructor(@InjectModel(Descs.name) private descModel: Model<Descs>) {}

  async getUserInfo(): Promise<any> {
    try {
      const description = await this.descModel.find().exec();
      return description;
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateUserInfo(description: UserDto): Promise<any> {
    try {
      return await this.descModel.updateOne({},  description ).exec();
    } catch (e) {
      throw new Error(e);
    }
  }
}
