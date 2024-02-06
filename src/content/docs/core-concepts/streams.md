---
title: Streaming and Response Handling
---

Streaming is a powerful feature for handling large data sets or files, enabling your application to process data incrementally without requiring everything to be loaded into memory at once. Dvori supports streaming in both modern browsers and Node.js (v18+), allowing for efficient data handling across environments.

## Downloading a File from S3

This example demonstrates how to download a large file from S3 using Dvori, leveraging streams to handle the data efficiently.

### Node.js Example

```typescript
import { createWriteStream } from "fs";
import { defineClient } from "dvori";

const client = defineClient({
    baseURL: "https://your-s3-bucket.s3.amazonaws.com",
});

async function downloadFile(filePath: string, destination: string) {
    try {
        const response = await client.get(filePath, { stream: true });

        if (response.body) {
            const writer = createWriteStream(destination);
            response.body.pipeTo(
                new WritableStream({
                    write(chunk) {
                        writer.write(chunk);
                    },
                    close() {
                        writer.end();
                    },
                    abort(err) {
                        writer.close();
                        console.error("Stream aborted", err);
                    },
                })
            );
        }
    } catch (error) {
        console.error("Failed to download file:", error);
    }
}

downloadFile("/path/to/large-file.zip", "./large-file.zip");
```

This example uses Node.js's writable streams to write the streamed data directly to a file. The `pipeTo` method connects the fetch response stream to the file stream, allowing data to be written as it's received.

### Browser Example

In modern browsers, while direct file system access is limited, you can still process or display streamed data using JavaScript.

```typescript
async function downloadFile(filePath) {
    try {
        const response = await client.get(filePath, { stream: true });

        if (response.body) {
            const reader = response.body.getReader();
            reader.read().then(function processStream({ done, value }) {
                if (done) {
                    console.log("Stream completed");
                    return;
                }

                // Process chunk (value) here

                // Read the next chunk
                reader.read().then(processStream);
            });
        }
    } catch (error) {
        console.error("Failed to download file:", error);
    }
}

downloadFile("/path/to/large-file.zip");
```

In this browser example, the streamed data is processed chunk by chunk using the ReadableStream reader.

## Connecting Multiple Stream Handlers

For advanced scenarios, you might want to connect multiple handlers to a single stream, such as transforming data on the fly or piping it through multiple processing steps.

### Example: Transforming Stream Data

```typescript
// This example is conceptual and may require adjustments based on your specific use case.

async function transformStreamData(filePath: string) {
    const response = await client.get(filePath, { stream: true });

    if (response.body) {
        const transformedStream = response.body.pipeThrough(
            new TransformStream({
                transform(chunk, controller) {
                    // Modify chunk here
                    controller.enqueue(modifiedChunk);
                },
            })
        );

        // Further processing or saving of transformedStream
    }
}
```

This example demonstrates using a `TransformStream` to modify data chunks as they pass through the stream, showcasing the flexibility of stream handling in Dvori.

## Conclusion

Dvori's streaming support enables efficient, real-time data processing for applications, accommodating scenarios from downloading large files to real-time data transformation. Leveraging streams can significantly enhance your application's performance and user experience, particularly when dealing with large datasets or files.
