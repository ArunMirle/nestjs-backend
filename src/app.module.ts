import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ContactModule],

})
export class AppModule { }
