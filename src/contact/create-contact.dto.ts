
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class CreateContactDto {

    @IsEmail()
    email: string;

    @IsOptional()
    @Length(1, 10)
    @IsString()
    phoneNumber?: string;
//Hello
    @IsOptional()
    @IsString()
    @Length(1, 500)
    query?: string;
}
