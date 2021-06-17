import { PushBody } from "../src/Interfaces/Body";
import simpleWebhook from "../src/Main";

const Webhook = new simpleWebhook(3000);

test("Testing", () => {
    expect(Webhook.listen("fork" ,(body) => {
        console.log(body);
    }))
}) 