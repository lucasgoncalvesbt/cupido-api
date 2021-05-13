
import handler from "./libs/handler-lib";


export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    let nodemailer = require("nodemailer");

    let remetente = nodemailer.createTransport({
        host: "smtp.umbler.com",
        service: "smtp.umbler.com",
        port: 587,
        secure: false,
        auth: {
            user: "no-reply@cupidoonline.com",
            pass: "Abacate060200."
        }
    });

    let emailASerEnviado = {
        from: "Cupido Online <no-reply@cupidoonline.com>",
        to: data.address,
        subject: "Mensagem do Cupido",
        html: `<p style="
        white-space: pre-line;" >${data.content}</p>`,
    };

    await remetente.sendMail(emailASerEnviado, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email enviado com sucesso.");
        }
    });

    return { emailASerEnviado };
});