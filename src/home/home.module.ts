import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Descs, DescriptionSchema } from './schemas/description.schema';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Descs.name, schema: DescriptionSchema },
    ]),
  ],
  providers: [HomeService],
  controllers: [HomeController],
})
export class HomeModule {}
