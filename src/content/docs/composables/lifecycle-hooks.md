---
title: Lifecycle Hooks in Detail
---

#### BeforeRequest

**Description**: The `beforeRequest` hook provides an interception point before the request is dispatched. This is the perfect place to modify the request configuration, such as headers, query parameters, or the request body.

**Example**:

```typescript
const useQueryParams = {
    beforeRequest: (config) => {
        // Dynamically add a timestamp to GET requests
        if (config.method.toUpperCase() === "GET") {
            const url = new URL(config.url);
            url.searchParams.append("timestamp", Date.now().toString());
            config.url = url.toString();
        }
        return config;
    },
};
```

#### AfterResponse

**Description**: This hook is called after a response is received. It can be used for processing and transforming response data, handling global error logging, or implementing response caching mechanisms.

**Example**:

```typescript
const useResponseLogger = {
    afterResponse: (response) => {
        console.log(
            `Response received from ${response.url} with status ${response.status}`
        );
        return response;
    },
};
```

#### OnError

**Description**: The `onError` hook is triggered in case of a request failure. It allows for centralized error management, providing opportunities for error logging, recovery strategies like request retries, or token refreshes.

**Example**:

```typescript
const useErrorHandler = {
    onError: (error) => {
        console.error(`Request failed: ${error.message}`);
        // Implement a recovery strategy or re-throw the error
        throw error;
    },
};
```

#### Finalize

**Description**: This hook runs after the request completes, regardless of its outcome. It's suitable for performing cleanup operations, logging request metrics, or any final steps required after a request.

**Example**:

```typescript
const useLogger = {
    finalize: () => {
        console.log(`Request finalized at ${new Date().toISOString()}`);
    },
};
```
