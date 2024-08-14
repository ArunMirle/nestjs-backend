// contact.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
    @Prop({ required: true })
    email: string;

    @Prop()
    phone: string;

    @Prop()
    query: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
