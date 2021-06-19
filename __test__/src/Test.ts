import Webhook from "../../src/Main";
import express from "express";

const webhook = new Webhook(3000);

webhook.listen("package", (body) => {
    console.log(body);
});

const app = express();

// Add support for express use?
// app.use();