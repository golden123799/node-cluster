# Node.js Performance Testing

This project demonstrates the performance differences between running a Node.js application with and without clustering. By utilizing Node.js's built-in clustering capabilities, you can leverage multiple CPU cores to improve throughput and handle more concurrent connections.

## Project Setup

This project includes two scripts to run the Node.js server:

- **`pnpm dev`**: Runs the application in single-threaded mode (without clustering).
- **`pnpm dev-cluster`**: Runs the application using Node.js clustering to utilize all available CPU cores.
- **`pnpm test`**: Runs performance tests for both the single-threaded and clustered versions of the application.

## Prerequisites

- [Node.js](https://nodejs.org/) (Ensure you have Node.js installed)
- [pnpm](https://pnpm.io/) (Package manager)

## Installation

First, install the necessary dependencies using pnpm:

```bash
pnpm install
```
