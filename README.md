# bouQuet

## About

BouQuet project is the group assessment of Advanced Internet Programming in Spring 2017 at UTS. BouQuet application is the HR agency web application where job seekers can post their resumes and employers can search the resumes of potential employees.


## Authors

This project is created by UTS students Roman and Ming.

## BouQuet online

https://aipbouquet.herokuapp.com/

## Key Features

* Sing up, Login, Logout
  - Users need to create an account and log in to create their resume.
* Create, View, Search, Edit and Delete 
  - Registered users can create their resumes.
  - Administrator can edit and delete resumes.
  - Everyone can search for resumes.
* The app is integrated with a Twitter.
  - The administrator can publish the links for the resumes on twitter account.
  
## Installation instructions

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. You will also need to install and run a [Mongo DB](https://www.mongodb.com/download-center). From your command line:

```bash
# Clone the repository
$ git clone https://github.com/r0manski/bouquet.git

# Go into the repository
$ cd bouquet

# Install dependencies
$ npm install

# Run the app
$ npm start
```
For the sake of security in this project environment variables are stored in the .env. The following lines should be created for this file with your variables instead of "...". The * comments should be removed from the .env file.

* twitter developer's vars
  JWT_SECRET=...
  CONSUMER_KEY=...
  CONSUMER_SECRET=...
  ACCESS_TOKEN=...
  ACCESS_TOKEN_SECRET=...
* local DB
  DBURI_PROD=...
* production DB
  DBURI_LOC=...

## Coding Principals:

1.	Validate all input data
2.	Handle error friendly
3.	Keep code readable
4.	Code should have minimal dependencies
5.	Proper indentation
6.	Nest tags properly
7.	Eliminate unnecessary resources/tags
8.	Follow name conventions (e.g. variable/object: changeColor, class/method: InputManager)
9.	Logical ordering
10.	Provide good documentation
11.	Provide good annotation
12.	Modular design
13.	Minimize coupling
14.	Do not repeat yourself(DRY)
15. Write unit and acceptance tests

