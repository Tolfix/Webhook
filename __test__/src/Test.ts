import Webhook from "../../src/Main";
import express from "express";

const webhook = new Webhook(3001);

webhook.listen("everything", (body) => {
    console.log(body);
});


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const webhook2 = new Webhook(app, {
    secret: "123123123123"
});

webhook2.listen("everything", (body) => {
    console.log(body);
})

webhook2.on("error", (error) => {
    console.log(error);
})

app.listen(3000);