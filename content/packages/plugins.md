---
title: Plugins
---

# Plugins

Plugins allow you to hook into specific points of the clients request / response / error lifecycle.

`composePlugins(...plugins)` is a function that takes an array of plugins as arguements. Each plugin is a function that returns an object with at least one of 3 hooks:

1. `onRequest(config)` Hook:

`onRequest: config => config`

```js
const reqPlugin = (options) => {
	return {
		//the onRequest hook gets passed the request config
		onRequest: (config) => {
			/* modify the request config here */

			//the onRequest hook must return the config object
			return config;
		},
	};
};
```

2. `onResponse(response)` Hook:

`onResponse: response => response`

```js
const resPlugin = (options) => {
	return {
		//the onResponse hook gets passed the response object
		onResponse: (response) => {
			/* modify or use the response obj here */

			//the onResponse hook must return the response object
			return response;
		},
	};
};
```

3. `onError(err)` Hook:

`onError: err => err;`

```js
const errPlugin = (options) => {
	return {
		//the onError hook gets passed the error
		onError: (err) => {
			/* do something with the error here. ex: log it */
			console.error(err);
			//the onError hook must return the err object
			return err;
		},
	};
};
```

#### Simple Example:

This creates a custom plugin that adds a header to request before it's sent.

```js
const { createClient, composePlugins } = require("dvori");

const addHeader = (key, val) => ({
	onRequest: (config) => {
		config.headers[key] = val;
		return config;
	},
});

// composePlugin accepts multiple plugins and composes them into one function
const onReqHandler = composePlugins(
	addHeader("Content-Type", "application/json"),
	addHeader("User-Agent", "MyCustomUserAgent:v1")
);

const client = createClient({
	plugins: {
		onRequest: onReqHandler,
	},
});

const response = await client.get({ ...config });
```

Plugins become even more useful if you have multiple API's or API endpoints that have different requirements. Checkout the examples to see how plugins can be mixed and matched to create multiple easy to use API clients.

#### Default Plugins

dvori comes with some useful plugins already written for you.

**Request**

-   `baseUrl`
-   `headers`
-   `userAgent`
-   `params`
-   `data`

**Response**

-   `json`
