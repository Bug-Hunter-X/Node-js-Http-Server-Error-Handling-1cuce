# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications:  the lack of proper error handling in an HTTP server. The `bug.js` file shows a simple server without error handling.  The `bugSolution.js` file provides a corrected version with robust error handling.

## Bug

The original server in `bug.js` lacks error handling. If the server cannot bind to port 8080 (e.g., because the port is already in use), the server will crash without any informative error message. 

## Solution

The improved server in `bugSolution.js` incorporates error handling using the `error` event listener of the HTTP server. This listener catches errors gracefully, logs them to the console, and prevents the server from crashing unexpectedly.