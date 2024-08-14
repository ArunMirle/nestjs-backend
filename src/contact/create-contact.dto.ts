
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateContactDto {

    @IsEmail()
    email: string;


    @Length(1, 10)
    phone: string;

    @IsString()
    @Length(1, 500)
    query: string;
}
