# bouQuet

## About

BouQuet project is the group assessment of Advanced Internet Programming in Spring 2017 at UTS. BouQuet application is the HR agency web application where job seekers can post their resumes and employers can search the resumes of potential employees.

### A bouQuet Online Example

https://aipbouquet.herokuapp.com/

## Authors

This project is created by UTS students Roman and Ming.


## Key Features

* Sign up, Login, Logout, Password Reset (Email)
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
# Go into the Mongodb installation bin folder
$ cd $mongodb_root_path/bin

# Run the Mongodb
$ ./mongod
```

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

```js
//twitter developer's vars
  JWT_SECRET=...
  CONSUMER_KEY=...
  CONSUMER_SECRET=...
  ACCESS_TOKEN=...
  ACCESS_TOKEN_SECRET=...
//local DB
  DBURI_PROD=...
//production DB
  DBURI_LOC=...
```

## API Docs
* Get Resumes - [GET] (/api/resumes)
  - Return all saved resumes in json.
* Get a Resume - [GET] (/api/resumes/:resumeid)
  - Get a resume based on resume id.
* Create a Resume - [POST] (/api/resumes)
  - Create a resume from posted data.
* Update a Resume - [PUT] (/api/resumes/:resumeid)
  - Update a resume based on resume id.
* Delete a Resume - [DELETE] (/api/resumes/:resumeid)
  - Delete a resume based on resume id.
* Search Resumes - [POST] (/api/resumes/search)
  - Search resumes from posted keyword.
* Register a User - [POST] (/api/register)
  - Register a new user from posted data.
* Sign in a User - [POST] (/api/login)
  - Sign in a existing user from posted data.
* Send a Twitter - [POST] (/twitter/:resumeid)
  - Send a Twitter from posted data.
* Send a Password Reset Email - [POST] (/forgot)
  - Semd a password reset email from posted email address.
* Reset a password - [POST] (/reset/:token)
  - Reset a password based on token.

## Coding Principals

1.	Validate the input data
2.	Handle error friendly
3.	Keep code readable
4.	Code should have minimal dependencies
5.	Proper indentation
6.  Declare a variable before using it
7.	Eliminate unnecessary resources/tags
8.	Follow name conventions (e.g. variable/object: changeColor, class/method: InputManager)
9.	Logical ordering
10.	Provide good documentation
11.	Provide good annotation
12.	Modular design
13.	Minimize coupling
14.	Do not repeat yourself (DRY)
15. Password must be encrypted

## Contributing

In general, we welcome anyone who can help us improve our code! 
You can follow the below steps to start:

1. Fork the project first
2. Clone the project to your own system
3. Work on your fork
4. Make your changes and comments
5. Add changes to README.md if needed
6. Commit changes to your own branch
7. Make sure you merge the latest version from "upstream" and resolve any conflicts if there is
8. Push your work back up to your fork
9. Submit a Pull request so that we can review your changes

## License

This project is licensed under the MIT License.

## Acknowledgments

* There are several open sourced frameworks and packages we used in this project, including:
  - Express.js (https://github.com/expressjs/express)
  - Helmet (https://github.com/helmetjs/helmet)
  - Validator (https://github.com/chriso/validator.js/)
  - Passport (https://github.com/jaredhanson/passport)
  - Twit (https://github.com/ttezel/twit)
  - JQuery (https://github.com/jquery/jquery)
  - Bootstrap (https://github.com/twbs/bootstrap)
  - Popper (https://github.com/FezVrasta/popper.js)
  
* There are two background images downloaded from Pexels (https://www.pexels.com/)
