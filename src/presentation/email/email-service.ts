import nodemailer, { Transporter } from 'nodemailer';

interface SendEmailOptions {
    to: string | string[];
    subject: string;
    htmlBody : string;
    attachments?: Attachments[];
}

interface Attachments {
    filename: string;
    path: string;
}

export class EmailService {

    private tranporter: Transporter; 

    constructor(
        mailerService: string,
        mailerEmail: string,
        mailerSecretKey: string,
        private readonly postToProvider: boolean
    ){

        this.tranporter = nodemailer.createTransport({
            service: mailerService,
                auth: {
                user: mailerEmail,
                pass: mailerSecretKey
                },
            });
    }

    public async sendEmail( options : SendEmailOptions): Promise<boolean>{

        const { to, subject, htmlBody, attachments } = options;

        try {

            // if(!this.postToProvider) return true;

            const setInformation = await this.tranporter.sendMail({ //utilizamos nuestro transportador para enviar el correo
                to: to,
                subject: subject,
                html: htmlBody,  
                attachments: attachments
            });             
            return true;

        } catch (error) {
            console.log(`Error sendEmail`, error);
            return false;
        }

    }

}