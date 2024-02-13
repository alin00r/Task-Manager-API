const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendWelcomeEmail = (email, name) => {
    resend.emails.send({
        from: "TaskApp@resend.dev",
        to: email,
        subject: "Thanks For joining in!",
        text: `Welcome to the app, ${name},Let me know how you get along with the app.`,
    });
};

const sendCancelationEmail = (email, name) => {
    resend.emails.send({
        from: "TaskApp@resend.dev",
        to: email,
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}, I hope to see you back sometime soon.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
};