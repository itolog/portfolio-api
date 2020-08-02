import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { Works, WorksSchema } from './schemas/works.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Works.name, schema: WorksSchema }]),
  ],
  providers: [WorksService],
  controllers: [WorksController],
})
export class WorksModule {}
