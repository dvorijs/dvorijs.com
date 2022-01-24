---
title: Basic Usage
---

# Basic Usage

## Making requests

The first thing you need to do to make a HTTP request is create a HTTP client. The `createClient` function makes this easy.

```js
const { createClient } = require("@dvori/core");
const client = createClient();
```

By default you can use a dvori HTTP client to make request just like you would with other HTTP clients. It supports standard REST verbs `"get", "post", "put", "patch", "delete", "options", "head", "trace"`. Each verb is defined as the property of your client object and is a function that accepts request configs, returning a promise.

```js
const { status, data } = await client.get({
	url: "https://www.reddit.com/r/sausagetalk/new.json",
});

console.log(data);
```

You might notice that `data` is just a String and not JSON. This is actually by design. By default, `createClient` has limited HTTP capabilities, and it's up to you to decide what functionality to add with the compsition API.
