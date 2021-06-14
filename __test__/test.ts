import simpleWebhook from "../src/Main";

const Webhook = new simpleWebhook(3000);

test("Testing", () => {
    expect(Webhook.listen((body) => {
        console.log(body);
    }))
}) 