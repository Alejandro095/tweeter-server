import mailgun from 'mailgun-js';
import setEnviromentVariables from 'config/env';
import Email from 'models/email';
import { v4 } from 'uuid';
import { readFileSync } from 'fs';
import { resolve } from 'path';

setEnviromentVariables();

export default class EmailService {
  constructor() {
    this.mailgun = mailgun({ apiKey: process.env.MAILGUN_API, domain: process.env.MAILGUN_DOMAIN });
  }

  async generate({ userID, email: emailUser }) {
    this.code = v4();

    const emailModel = new Email({ userID, code: this.code, email: emailUser });

    const { success, email } = await emailModel.save();

    this.code = email.code;
    this.id = email.id;
    this.user = email.user_id;
    this.email = email.email;

    return {
      success, email,
    };
  }

  send() {
    // return this.mailgun.messages().send({
    //   from: 'Tweeter <verify@tweter.ga>',
    //   to: this.email,
    //   subject: 'Verificación de correo',
    //   html: this.render('verify', { code: '4052', image_logo: process.env.EMAIL_IMAGE }),
    // });
  }

  // eslint-disable-next-line class-methods-use-this
  render(type, data) {
    let template = readFileSync(resolve(__dirname, `./../../public/templates/${type}.html`), 'utf8');

    Object.keys(data).forEach((key) => {
      template = template.replace(`{{${key}}}`, data[key]);
    });

    return template;
  }
}
