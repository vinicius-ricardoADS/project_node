# Project usign Node.js

## Overview

This project is being developed for the web programming discipline using REST programming concepts, Javascript language, back-end development and front-end with React.

The project of this medical clinic consists of 3 basic entities: Patients, Doctors and Appointments, where the heart of the application is about the functionality of scheduling an appointment of a respective patient with a respective doctor. In addition to this main action, it is possible to carry out a complete CRUD of the 3 entities Patients, Doctors and Consultations, there is also the Administrators entity that represents the user who will have access to the functionalities available in the system, performing the login to access the system and a logout if need to exit the system itself, if there is still no administrator registered in the system, you must register one to be able to use the system. Some business rules: You cannot delete a patient if he currently has an appointment, same for the doctor,
it is not possible to delete it. It is not possible to register a consultation if the patient or the doctor informed is not included in the
system, it is also not possible to register a query if the date or time entered is invalid (Example: Passing a date that has already passed, or
an hour has passed). The present relationships are only one, which in this case is a Patients with Appointments relationship where, once
appointment belongs to only one patient and a patient can have multiple appointments, same with Doctors and Appointments => One appointment is performed
by only one Doctor, but one Doctor can perform multiple queries, both are 1-N.

## Getting Started

In the project directory, you can run:

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
- `npm install dotenv --save:` dotenv is a zero dependency module that loads environment variables from an .env file into process.env, in this case, used to place database access variables, such as password, name, host;
- `npm install jsonwebtoken:` is a token format used to securely transmit information between parties. It consists of a header, a set of claims, and a digital signature, allowing the information contained in the token to be verified and trusted. JWT is often used for authentication and authorization in web applications and RESTful APIs.

## Bank configuration

1. For the sequelize and mysql2 libraries to work correctly, before performing the database configuration it is necessary to already have the database that will be used created on the mysql server.
2. Then create an .env file which will contain the environment variables that will store information about the database to be used.
3. Inside the file it is necessary to contain 4 variables one for the name of the database, mysql server user, the password for access and the server host. For example:
    ```
        DB_NAME=your_database
        DB_USER=your_user
        DB_PASSWORD=your_password
        DB_HOST=your_host
    ```
4. Now save the file and you will have access to the database.
5. To test the database connection you can run the command: `npm run testing`.
If it works, the following message should appear: 
`Executing (default): SELECT 1+1 AS result`
`Conectado ao banco: my_database`

## Application

- For the backend to run, at the root of the project in a terminal you must use the command:
    ```
        npm run dev
    ```
- For the front-end to run, in a new terminal you must use the following commands:
1.  ```
        cd front-end
    ```
2. 
    ```
       npm start
    ```
