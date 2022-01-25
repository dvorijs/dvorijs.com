---
title: Reddit Example
---

# Reddit Example

**Objectives**

-   Authenticate via OAuth2 and handle refreshing the Access Token automatically
-   Fetch multiple pages of data
-   Filter the data to only include what we want

**Assumptions**

You have created an App on Reddit and stored your client ids securely

## Step 1

```js
const {
	createClient,
	composePlugins,
	composeMiddleware,
} = require("@dvori/core");
const { baseURL, userAgent, headers, json } = require("@dvori/plugins");
const withRetry = require("@dvori/retry");
const withOAuth2 = require("@dvori/oauth2");
const withPagination = require("@dvori/pagination");

const USER_AGENT = `nodejs:appname:v1.0.0`;
const REDDIT_CLIENT_ID = process.env.REDDIT_CLIENT_ID;
const REDDIT_CLIENT_SECRET = process.env.REDDIT_CLIENT_SECRET;

const client = createClient({
	plugins: composePlugins(
		baseURL("https://oauth.reddit.com"),
		userAgent(USER_AGENT),
		headers({ "Content-Type": "application/x-www-form-urlencoded" }),
		json()
	),
	middleware: composeMiddleware(withRetry(), withOAuth2(), withPagination()),
});

async function fetchCommentsFor(username) {
	const { status, data } = await client.get({
		url: `/user/${username}/comments`,
		method: "GET",
		params: {
			limit: 100,
			sort: "new",
		},
	});

	console.log(`STATUS: ${status}`);
	console.log(data);
}

fetchCommentsFor("imns");
```
