import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MaillDto } from './dto/mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendMail(data: MaillDto): Promise<any> {
    const output = ` 
    <h3>Portfolio</h3>
    <ul>  
      <li>Name: ${data.name}</li>
      <li>Email: ${data.from}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.text}</p>
  `;

    try {
      const mail = await this.mailerService.sendMail({
        to: process.env.EMAIL_USER,
        from: data.from,
        subject: 'Mail from Portfolio ✔',
        text: data.text,
        html: output,
      });
      return mail;
    } catch (e) {
      throw new Error(e);
    }
  }
}
