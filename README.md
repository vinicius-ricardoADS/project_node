# Project usign Node.js

## Overview

This project is being developed for the web programming discipline using REST programming concepts, Javascript language, back-end development and front-end with React.

## Getting Started

- In the project directory, you can run:

 **`npm install`**

To install the appropriate libraries already contained in this repository.

## Installation of libraries

If you are going to install each library being used in this project, you must run the following commands:

- `npm install express:` express is the most popular Node framework capable of managing requests for different HTTP verbs on different URLs, defining web application settings such as the port to be used for the connection and the location of the templates that are used to render the response;
- `npm install --save sequelize mysql2:` installation of the database to be used, in this case, mysql2 is being used because it has better performance and support for more current Javascript features such as promises, using sequelize which is an ORM based on promises (asynchronous);
- `npm install --save-dev @babel/core:` it is the nerve center of Babel (transpilator);
- `npm install --save-dev @babel/cli:` cli is the command line client that allows us to interact with @babel/core;
- `npm install --save-dev @babel/node:` is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel's presets and plugins before running it;
- `npm install --save-dev @babel/preset-env:` is a special module that will compile our code for a previous version of ECMASCRIPT in case the resource we are using is not supported by the browsers on the market;
- `npm install --save-dev nodemon:` is a command-line tool designed to automatically monitor changes to project files and restart your Node. js whenever there is a change;
- `npm install dotenv --save`: dotenv is a zero dependency module that loads environment variables from an .env file into process.env, in this case, used to place database access variables, such as password, name, host;
