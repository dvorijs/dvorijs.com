---
title: Configuration
description: Dvori configuration core concepts.
---

Configuring Dvori is straightforward yet powerful, allowing you to tailor the HTTP client to meet your specific requirements. This guide covers the essential configuration options available, providing the foundation you need to start making requests.

## Basic Configuration

Start by importing and configuring your Dvori client. Here's a simple example:

```typescript
import { defineClient } from "dvori";

const client = defineClient({
    baseURL: "https://api.example.com", // Base URL for all requests
    headers: { "Content-Type": "application/json" }, // Default headers
    timeout: 5000, // Request timeout in milliseconds
});
```

### Options

-   `baseURL`: Sets a prefix URL for all requests made using this client.
-   `headers`: Default headers to be applied to every request.
-   `timeout`: Specifies a timeout period for the request in milliseconds.
-   `params`: Default query parameters to be included in every request.
-   `signal`: An `AbortSignal` object that allows you to abort requests.

### Customizing Fetch Options

Dvori passes additional fetch options directly to the underlying Fetch API, allowing you to utilize its full power:

```typescript
const client = defineClient({
    credentials: "include", // Include cookies in cross-origin requests
    mode: "cors", // Use CORS mode for cross-origin requests
    cache: "no-cache", // Override the cache control
});
```

### Using Composables

[Composables](/composables/intro/) offer a way to encapsulate and reuse custom logic across requests. Define global composables in the client configuration:

```typescript
import { useAuth } from "./composables/useAuth";

const client = defineClient({
    baseURL: "https://api.example.com",
    composables: [useAuth], // Apply the useAuth composable globally
});
```

## Overriding Configuration per Request

You can override the global configuration for individual requests:

```typescript
import { useAuth } from "./composables/useAuth";

const client = defineClient({
    baseURL: "https://api.example.com",
    headers: { "X-Custom-Header": "one" },
});

client.get("/endpoint", {
    // Overrides global headers and sets the value to 'two'
    headers: { "X-Custom-Header": "two" },
});
```

To extend the headers or modify them per request, take a look at the composable `beforeRequest` lifecycle hook.

## URL Resolution

Dvori simplifies working with APIs by resolving URLs intelligently, combining the `baseURL` and endpoint paths to eliminate redundancy and reduce the potential for errors.

### Base URL and Endpoint Concatenation

When you specify a `baseURL` in your client configuration, Dvori automatically prepends it to any relative URL passed to a request method, ensuring your requests are always directed to the correct base address.

```typescript
const client = defineClient({
    baseURL: "https://api.example.com",
});

// Automatically resolves to https://api.example.com/data
client.get("/data");
```

### Handling Absolute URLs

If an absolute URL is provided in a request, Dvori recognizes it and bypasses the baseURL, using the provided URL as is.

```typescript
// Directly uses the absolute URL, ignoring the baseURL
client.get("https://another-api.com/data");
```

## Parameter Serialization

Dvori automatically serializes query parameters, converting an object of key-value pairs into a URL-encoded string. This feature simplifies the inclusion of query parameters in your requests.

```typescript
// Query parameters are automatically serialized and appended to the URL
client.get("/search", {
    params: { query: "Dvori", page: 2 },
});
// Resulting URL: https://api.example.com/search?query=Dvori&page=2
```

## Body Serialization

Dvori intelligently handles JSON bodies, automatically serializing JavaScript objects when the `Content-Type` header is set to `application/json`. This removes the need to manually stringify JSON payloads.

```typescript
client.post("/posts", {
    headers: { "Content-Type": "application/json" },
    body: { title: "New Post", content: "Content of the post" },
});
// The body is automatically serialized to a JSON string
```

### Setting the Correct Headers

When you provide a JavaScript object as the body and set the `Content-Type` to `application/json`, Dvori not only serializes the body but also ensures the appropriate headers are set, streamlining the process of sending JSON requests.

#### Special Behavior and Defaults

Dvori's design philosophy emphasizes ease of use and sensible defaults, differentiating it from the standard Fetch API:

-   **Automatic URL resolution** simplifies working with base paths and endpoints.
-   **Query parameter serialization** removes the boilerplate code associated with preparing URLs.
-   **Intelligent body serialization** with `application/json` content type automates what is typically a manual process.

---

Configuring Dvori is designed to be both simple for basic use cases and robust enough to handle complex scenarios. By leveraging these configuration options, you can create a highly customizable HTTP client that fits seamlessly into your application's architecture.

For detailed information on each configuration option, refer to the [API reference](#).
