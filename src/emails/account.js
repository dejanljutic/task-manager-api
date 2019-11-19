const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        // html: property za ubacivanje slika i fensi stvari
        to: email,
        from: 'dejan.ljutic@devcenter.rs',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Feel free to contact us with advices for improving the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dejan.ljutic@devcenter.rs',
        subject: 'Goodbye',
        text: `We are sad to see you go, ${name}. We would appreciate it if you spared a minute to tell us how we could improve!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}