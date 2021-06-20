# Simple Webhook Github
This package is used to spin up a webserver to get `POST` requests from github webhook.

# Installing
``npm install simple-webhook-github``

# Examples - Simple

You can setup a simple webhook like this..

`Typescript`
```ts
import SimpleWebhook from "simple-webhook-github";

const Port = 3000;
const webhook = new SimpleWebhook(Port);

webhook.listen("everything", response => {
    // Do something
})
```

`JavaScript`
```js
const SimpleWebhook = require("simple-webhook-github");

const Port = 3000;
const webhook = new SimpleWebhook(Port);

webhook.listen("everything", response => {
    // Do something
})
```

# Examples - Express

You can also use express as an middleware

`Typescript`
```ts
import SimpleWebhook from "simple-webhook-github";
import Express from "express";

const Port = 3000;
const app = Express();
const webhook = new SimpleWebhook(app);

webhook.listen("everything", response => {
    // Do something
})

app.listen(Port);
```

`JavaScript`
```js
const SimpleWebhook = require("simple-webhook-github");
const Express = require("express");

const Port = 3000;
const app = Express();
const webhook = new SimpleWebhook(app);

webhook.listen("everything", response => {
    // Do something
})

app.listen(Port);
```

# Configurations

```ts
...
interface Options 
{
    /**
     * @param endpoint The endpoint for the webserver
     * @default /webhook
     */
    endpoint: string;

    /**
     * @param secret The secret from github, needs to equal to each other
     */
    secret: string;
}
...
```

## Webhook paramenters
```ts
SimpleWebhook(Port or Express, Config)
```
