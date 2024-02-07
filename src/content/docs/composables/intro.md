---
title: Working with Composables
description: A composable HTTP client
---

Composables are at the heart of Dvori's flexibility and power, allowing developers to customize and extend their HTTP clients in a modular and reusable way. This page provides an overview of how to effectively use composables within your projects.

## Why Composables?

In the evolving landscape of web development, the ability to quickly adapt and customize your tools can significantly impact productivity and performance. Composables address common challenges such as:

-   **Authentication**: Seamlessly integrate authentication mechanisms across all requests.
-   **Error Handling**: Implement centralized error handling strategies to maintain robustness.
-   **Data Transformation**: Manipulate request and response data effortlessly, aligning it with your application's needs.
-   **State Management**: Keep track of request states or caching without external dependencies.

## Lifecycle Hooks

Composables leverage lifecycle hooks to inject functionality at different stages of the HTTP request/response cycle. The key lifecycle hooks available are:

-   `beforeRequest`: Invoked before the request is sent, allowing you to modify the request configuration.
-   `afterResponse`: Called after receiving the response, enabling you to process or transform the response data.
-   `onError`: Triggered in case of an error, providing a hook for error handling or recovery.
-   `finalize`: Runs after the request completes, regardless of success or failure, useful for cleanup or logging.

## Example: Adding Authorization Header

Here’s a simple example of a composable that adds an Authorization header to every request.

```typescript
const useAuth = {
    beforeRequest: (config) => {
        config.headers["Authorization"] = `Bearer ${yourAuthToken}`;
        return config;
    },
};
```

To apply this composable, include it in the `composables` array when defining your client:

```typescript
const client = defineClient({
    baseURL: "https://api.example.com",
    composables: [useAuth],
});
```

### Naming Convention

To maintain consistency and discoverability, all composables should adhere to a naming convention: each composable must start with the word `use`. For example, `useAuth` for authentication, or `useRetry` for retry logic.

### Reusability Across Different Clients

One of the strengths of composables is their reusability across different clients. Write a composable once, and you can apply it to any client instance, enabling consistent functionality across your application without duplicating code.

For instance, the `useAuth` composable defined above can be easily reused across multiple clients targeting different APIs, ensuring all your API calls are authenticated with a single, centralized piece of logic.

---

Composables offer a powerful way to enhance and customize your HTTP requests in Dvori. By adhering to the naming convention, leveraging lifecycle hooks, and utilizing the composability and reusability of these modules, you can build highly flexible and maintainable API clients tailored to your specific needs.

For more detailed information on each composable and lifecycle hook, refer to the API documentation.
