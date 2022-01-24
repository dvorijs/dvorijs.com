---
title: Middleware
---

# Middleware

> Ogres & middleware are like onions, they both have layers

Middleware give you complete control over the request / response lifecycle.

### Example:

```js
const { createClient, composeMiddleware } = require("dvori");

const myMiddleware = (next) => async (config) => {
	// You can modify the config here
	let response = await next(config);
	// You can modify the response here
	return response;
};

const client = createClient({
	middleware: composeMiddleware(myMiddleware),
});
```

#### Default Middleware

-   Retry
-   Pagination
-   OAuth2
