---
title: Getting Started
---

# Introduction

## What is Dvori?

We needed a flexible API client that would allow use to make requests to multiple 3rd party API's with vastly different requirements all while not reinventing the wheel for each one. The client needed to be simple and modular, allowing us to write bits of functionality once and reuse them while at the same time not having them be tightly coupled and dependent on each other.

Functional programming and more speficly functional composition gave us the perfect solution to this problem. If you want to see how we did it, continue reading the [guide](#guide) or jump striaght to the [API](#api).

## Basic Concepts

At it's core dvori is just a set of functions. You use these functions to create a HTTP client and then use the client to make HTTP requests. It's composition API makes it easy to cleanly build reusable modules.

When you first start to use dvori you will see that it's slightly more verbose than Axios or other HTTP clients. Once you use dvori it becomes clear how powerful it's functional approach is and how quickly it solves complex problems for you.
