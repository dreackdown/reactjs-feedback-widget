import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from './../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '6087ed5d68111d',
    pass: 'e84b5a440797ef'
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Feedget team <hi@feedget.com>',
      to: 'Hugo Faria Lima <hugofaria157@live.com',
      subject,
      html: body,
    })
  }
}
