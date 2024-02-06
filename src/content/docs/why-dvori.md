---
title: Why Dvori
---

In the development of a past (now dead) project, we encountered a common yet challenging scenario: the need to interact with multiple third-party APIs, each with its own set of requirements. Our goal was not just to address this need but to do so in a way that was efficient, maintainable, and scalable. Traditional API clients offered some of what we needed but fell short in flexibility and modularity, leading us to create Dvori.

## Designed for Flexibility

Dvori is built on the principle of functional programming, particularly leveraging functional composition, to provide a flexible and powerful solution for API interaction. This approach allows developers to:

-   **Compose Functionality**: Easily combine different functionalities to tailor the client to specific API requirements without redundant code.
-   **Modular Architecture**: Write and test pieces of functionality independently, ensuring each module can be reused across different parts of your application or in entirely different projects.

## Ease of Use

While Dvori is powerful and flexible, it remains straightforward to use. You can start with simple requests and gradually introduce more complexity as needed, without the overhead of learning a complex framework. Dvori's design allows for:

-   **Rapid Integration**: Get up and running with minimal setup, making your first API request in minutes.
-   **Clear Documentation**: Jump straight into building with a well-documented API and practical examples that guide you through the more advanced features.

## Not Just Another API Client

Dvori distinguishes itself by not being tightly coupled or dependent on a single application or API structure. This independence means:

-   **Cross-API Compatibility**: Seamlessly interact with a variety of APIs, regardless of their differences in authentication, response formats, or error handling.
-   **Scalability**: As your project grows, Dvori grows with you, accommodating new APIs and changing requirements without forcing a rewrite of existing code.

## Built on Proven Principles

At the core of Dvori's development was the recognition of the power of functional programming and functional composition. These principles have guided us to create an API client that is:

-   **Highly Reusable**: Maximize code reuse with composables that can be mixed and matched as needed.
-   **Decoupled Design**: Ensure parts of your application remain independent, making them easier to manage, test, and evolve.

## Built on the Fetch API

Dvori isn't just another layer on top of existing HTTP request libraries; it's a refined abstraction built directly on the modern Fetch API. This choice brings several significant benefits, aligning Dvori with the latest web standards and ensuring that it leverages the most performant underpinnings available in both Node.js and browser environments.

### Performance and Familiarity

-   **Optimized Performance**: In Node.js, Dvori's implementation surpasses traditional HTTP libraries by reimagining how the core Fetch functionality can be optimized for server-side use. Browsers, known for their efficient execution of Fetch, benefit from the same performance optimizations natively.
-   **Familiar Interfaces**: Developers can work with well-known concepts such as <a href="https://developer.mozilla.org/en-US/docs/Web/API/Headers" title="MDN Headers Interface docs" target="_blank">Headers</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request" title="MDN Request Interface docs" target="_blank">Request</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Response" title="MDN Response Interface docs" target="_blank">Response</a> interfaces, making the transition to Dvori seamless for those already acquainted with the Fetch API. This familiarity simplifies the learning curve and streamlines development.

### Cross-Environment Compatibility

-   **Unified API Surface**: By building on Fetch, Dvori offers a consistent and unified API surface across environments, reducing the cognitive load when switching contexts or targeting multiple platforms.
-   **Future-Proof**: As browsers and Node.js environments evolve, they continue to optimize and enhance the Fetch API, ensuring that Dvori remains at the forefront of performance and capability without requiring significant changes to its core.

### Enhanced Flexibility

-   **Extensible by Design**: The Fetch API's design principles, focusing on modularity and simplicity, align perfectly with Dvori's ethos. It allows Dvori to extend Fetch with advanced features like composables and lifecycle hooks without compromising on ease of use or performance.
-   **Compatibility with Web Standards**: Dvori's reliance on the Fetch API ensures adherence to web standards, facilitating interoperability with a wide range of web services and tools, enhancing developer productivity, and reducing potential issues in API communication.

## Embracing Modern Web Principles

In choosing to build on the Fetch API, Dvori embraces the modern web's principles, offering developers a tool that is both powerful and intuitive. This foundation not only capitalizes on the Fetch API's strengths but also extends them, providing a versatile and robust solution for today's complex web development landscape.

## Discover Dvori

Whether you're building a startup, working on a complex enterprise application, or simply need a more adaptable way to handle API requests, Dvori offers a solution that is as robust as it is elegant. Dive into our guides, explore the API, and see for yourself how Dvori can simplify your API interactions while offering unparalleled flexibility and power.
