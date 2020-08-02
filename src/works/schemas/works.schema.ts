import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Works extends Document {
  @Prop({ required: [true, 'Укажите имя title'] })
  title: string;

  @Prop({ required: [true, 'Укажите имя description'] })
  description: string;

  @Prop({ required: [true, 'загрузите картинку'] })
  img: string;

  @Prop({ required: [true, 'введите ссылку'] })
  href: string;
}

export const WorksSchema = SchemaFactory.createForClass(Works);
