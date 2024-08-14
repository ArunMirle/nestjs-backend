// contact.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './create-contact.dto';
import { Contact } from './contact.schema';

@Controller('contacts')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post('add')
    async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
        return this.contactService.create(createContactDto);
    }

    @Get('get')
    async findAll(): Promise<Contact[]> {
        return this.contactService.findAll();
    }
}
