---
title: Error Handling
---

Effective error handling is crucial for building resilient applications. Dvori provides robust mechanisms to catch and handle errors, both at the request level using try/catch with async/await and globally through the `onError` lifecycle hook. This guide demonstrates how to manage errors to maintain stability and reliability in your applications.

## Catching Errors

Wrap your requests in a try/catch block to handle errors gracefully.

### Example: Handling Request Errors

```typescript
async function fetchPost() {
    try {
        const response = await client.get("/posts/1");
        console.log("Post data:", response);
    } catch (error) {
        console.error("Error fetching post:", error);
        // Handle error based on type or status code
        if (error.status === 404) {
            console.error("Post not found.");
        } else {
            console.error("An unexpected error occurred.");
        }
    }
}

fetchPost();
```

This approach allows you to handle errors locally, providing flexibility to manage different types of errors in context.

## Global Error Handling with onError Lifecycle Hook

For a more centralized approach to error handling, use the `onError` lifecycle hook. It allows you to catch and handle errors globally, applying custom logic across all requests.

### Example: Global Error Logger

```typescript
const errorLogger = {
    onError: (error) => {
        console.error("Global error logger:", error);
        // Re-throw the error for further handling if needed
        throw error;
    },
};

const client = defineClient({
    baseURL: "https://api.example.com",
    composables: [errorLogger],
});

async function fetchPost() {
    try {
        const response = await client.get("/posts/1");
        console.log("Post data:", response);
    } catch (error) {
        // Error has been logged by the global error logger
        // Additional error handling logic can be placed here
    }
}

fetchPost();
```

The `onError` hook provides a centralized point to manage errors, ideal for logging, monitoring, or applying common recovery strategies.

## Best Practices

-   **Specific Error Handling**: Use try/catch for specific error handling where you anticipate failures and need custom logic to recover.
-   **Centralized Logging**: Utilize the `onError` lifecycle hook for centralized error logging or handling that applies across all requests.
-   **Error Propagation**: Consider re-throwing errors in the `onError` hook if subsequent handling is needed or to allow for specific catch blocks to handle them.
