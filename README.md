# TALKSHOP Assignment

## Problem Statement

[Problem Statement Document](https://docs.google.com/document/d/1IK3KQo44JLm9QDGNghLt34tPpYgOV4T6f8SBpdyUYek/edit)

## Running the app
 - install postgres 15 on your local machine
 - update the credentials inside the .env file
 - run command
    ```
    node src/app.js
    ```


## Infrastructure

- **DB**: PostgreSQL (reason: it's open source, will help in saving infra cost during scaling up, and we can go to bare bones)
- **Server**: EC2 instances
- **CI/CD**: Jenkins

## Assumptions

1. Our POST API will only append data with different post IDs. In case of the same post IDs, we will change the insert query to an upsert query and update the existing data.
2. POST API body format should be JSON with two fields: `id` (integer) and `text` (string).
3. Handling any text with the following special characters: `, . ! ?`. Any other special characters can also be handled using regex.


## Project Structure

This is a simple Express backend service with the following directory structure:

        .
        └── src                         # Compiled files 
            ├── routes                  # Folder for all routes and route versions like /v1*, /v2*, etc 
            |   └── v1                  # contains v1 routes for this app 
            |   └── index.js            # contains health check endpoint a 
            ├── controllers
            |   └── controllers.js      # contoller file 
            ├── db                      # all things related db
            |   └──db.js                # has db connections
            |   └──dao.js               # has all dao functions
            ├── shared                  # folder for enums, help, consts, etc.
            |   └──helper.js            # contains all the helper function
            ├── config                  # folder for all the configs, can be expanded for dev config, text config, etc
            |   └──config.js            # contains config
            └── README.md