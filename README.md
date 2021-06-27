<p align="center">
  <img width="260" src="https://cdn.tolfix.com/images/TX-Small.png">
  <br/>
  Simple webhook github
</p>

# Simple Webhook Github
![](https://nodei.co/npm/simple-webhook-github.svg)

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
const SimpleWebhook = require("simple-webhook-github").default;

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
const SimpleWebhook = require("simple-webhook-github").default;
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

# On event

The on event includes events that can happen in the webhook, like errors etc.

`Typescript`
```ts
import SimpleWebhook from "simple-webhook-github";

const Port = 3000;
const webhook = new SimpleWebhook(Port);

webhook.on("error", (error) => {
    console.log(error);
})
```
