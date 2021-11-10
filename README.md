<p align="center">
  <a href="https://tolfix.com/" target="_blank"><img width="260" src="https://cdn.tolfix.com/images/TX-Small.png"></a>
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

# Discord
[![Discord](https://discord.com/api/guilds/833438897484595230/widget.png?style=banner4)](https://discord.gg/xHde7g93Yh)

# ⚙ | Tolfix
**Tolfix** is a `company` focusing about `IT`, `Development` and `Networking`, we drive to help others with their `problems` when it comes to `IT` and love contributing to others.
Want to find more information about us you can visit us at [`https://tolfix.com/`](https://tolfix.com/).
