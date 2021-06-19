import Webhook from "../../src/Main";
import express from "express";

const webhook = new Webhook(3000);

webhook.listen("project", (body) => {
    console.log(body.changes?.body.from);
});

const app = express();

// Add support for express use?
// app.use();