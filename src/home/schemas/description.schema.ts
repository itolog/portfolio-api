import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Descs extends Document {
  @Prop()
  description: string;
}

export const DescriptionSchema = SchemaFactory.createForClass(Descs);
