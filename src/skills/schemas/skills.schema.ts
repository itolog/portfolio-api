import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Skills extends Document {
  @Prop()
  css: string[];

  @Prop()
  js: string[];

  @Prop()
  other: string[];
}

export const SkillsSchema = SchemaFactory.createForClass(Skills);
