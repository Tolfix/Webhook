import Webhook from "../../src/Main";

const webhook = new Webhook(3000);

webhook.listen("everything", (body) => {
    console.log(body);
})