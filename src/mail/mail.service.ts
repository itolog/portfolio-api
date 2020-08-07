import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MaillDto } from './dto/mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {
  }

  public async sendMail(data: MaillDto): Promise<any> {
    console.log('data',data);
    const output = ` 
    <h3>Portfolio</h3>
    <ul>  
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
  `;

    try {
       await this.mailerService.sendMail({
        to: process.env.EMAIL_USER,
        from: data.email,
        subject: 'Mail from Portfolio ✔',
        text: data.message,
        html: output,
      });
      return {
        status: 'OK',
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}