---
title: HTTP Client Methods and Usage
---

Dvori simplifies making HTTP requests by providing straightforward methods that correspond to the HTTP verbs you're already familiar with. This guide covers how to use each method, along with examples to get you started.

## GET Requests

Use the `get` method to retrieve data from a specified resource.

```typescript
// Basic GET request
client.get("/posts").then((response) => console.log(response));
```

### With Query Parameters

Easily include query parameters by adding a `params` object.

```typescript
// GET request with query parameters
client
    .get("/search", { params: { query: "Dvori" } })
    .then((response) => console.log(response));
```

## POST Requests

The `post` method is used to submit an entity to the specified resource, often resulting in a change in state or side effects on the server.

```typescript
// Basic POST request with a JSON body
client.post("/posts", {
    body: { title: "Introducing Dvori", content: "A flexible API client." },
    headers: { "Content-Type": "application/json" },
});
```

## PUT Requests

Use `put` to replace all current representations of the target resource with the request payload.

```typescript
// PUT request to update a resource
client.put("/posts/1", {
    body: { title: "Updated Title", content: "Updated content." },
    headers: { "Content-Type": "application/json" },
});
```

## DELETE Requests

The `delete` method removes the specified resource.

```typescript
// DELETE request to remove a resource
client.delete("/posts/1");
```

## PATCH Requests

`patch` is used to apply partial modifications to a resource.

```typescript
// PATCH request with partial update
client.patch("/posts/1", {
    body: { content: "Partially updated content." },
    headers: { "Content-Type": "application/json" },
});
```

## HEAD Requests

The `head` method retrieves the headers of a resource, without the body.

```typescript
// HEAD request to get the headers of a resource
client.head("/posts");
```

## OPTIONS Requests

Use `options` to describe the communication options for the target resource.

```typescript
// OPTIONS request to discover supported verbs
client.options("/posts");
```

---

Remember to refer to the [API reference](#) for more detailed information on method parameters and advanced usage scenarios.
