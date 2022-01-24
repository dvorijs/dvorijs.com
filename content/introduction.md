---
title: Introduction
---

## What is Dvori?

DvoriJS is a HTTP Client for Node.js. It's completely composable.

At its, core Dvori is just a set of functions. You use these functions to create an HTTP client that you can use to make requests. Its composition API makes it easy to build reusable modules cleanly.

## Why

At our startup [Readable Report](https://imns.co/projects/readable-report), we needed a flexible API client that would allow us to make requests to multiple 3rd party APIs with vastly different requirements, all while not reinventing the wheel for each one. The client needed to be modular and straightforward, allowing us to write bits of functionality once and reuse them while at the same time not being tightly coupled and dependent on each other.

Functional programming and more speficly functional composition gave us the perfect solution to this problem. If you want to see how we did it, continue reading the [guide](#guide) or jump striaght to the [API](#api).

## Should I use it?

If you need to make basic requests to an API endpoint, you will probably be better off with a more straightforward library like Axios. Dvori is designed to handle complex situations. For example, you might need to get data from a proprietary API with a custom implementation of OAuth2 and an extremely verbose response format.
