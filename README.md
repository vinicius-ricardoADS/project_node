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
- `npm install --save-dev @babel/core`
- `npm install --save-dev @babel/cli`
- `npm install --save-dev @babel/node`
- `npm install --save-dev @babel/preset-env`
- `npm install --save-dev nodemon:` every installation of babel is done because it is a code transpiler, in this case, it is used to be able to import files and libraries without having to use require;
- `npm install dotenv --save`: dotenv is a zero dependency module that loads environment variables from an .env file into process.env, in this case, used to place database access variables, such as password, name, host;
