import Webhook from "../../src/Main";

const webhook = new Webhook(3000);

webhook.listen("package", (body) => {
    console.log(body);
})