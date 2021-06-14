# Simple Webhook Github
This package is used to spin up a webserver to get `POST` requests from github webhook.

# Installing
``npm install simple-webhook-github``

# Examples
`Typescript`
```ts
import SimpleWebhook from "simple-webhook-github";

const Port = 3000;
const webhook = new SimpleWebhook(Port);

webhook.listen(response => {
    // Do something
})
```

`JavaScript`
```js
const SimpleWebhook = require("simple-webhook-github");

const Port = 3000;
const webhook = new SimpleWebhook(Port);

webhook.listen(response => {
    // Do something
})
```