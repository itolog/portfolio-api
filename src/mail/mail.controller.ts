import { Controller, Post, Body } from '@nestjs/common';

import { MailService } from './mail.service';
import { MaillDto } from './dto/mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendMail(@Body() mail: MaillDto): Promise<any> {
    try {
      await this.mailService.sendMail(mail);
    } catch (e) {
      return {
        error: e.message,
      };
    }
  }
}
