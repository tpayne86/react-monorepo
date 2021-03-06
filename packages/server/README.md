# NODEJS Application

## info

express application that is used to serve the static client application after building for production.
acts as a proxy server for client app while delopment also. this app should be used for basic auth, routing, session management and serving the client application.
this app includes

1. express, morgan, compression and helmet, http-proxy-middleware
2. eslint
3. customizable build config
4. unit test cases with jest
5. es2017

**this project requires**

1. `NodeJS`
2. `npm`.

## How to set up ? Install.

this app is a simple HTTP static web server which is going to server front end application when running in production.
it will mainly be used to return static files and do simple authentication.

install node modules and run server application

### start

after installing all modules hit `npm start`
this will run the applications in `watch` mode. meaning any file change will be reacted and updated
in the browser.

### build

to build for deployment/production.

- hit `npm run build`

doing this will create a `dist` folder in the application root which will contain a built
`nodejs` application redy to deploy with its own `package.json` install node modules and run the app.


**important**
to run the built application it needs following environment variables

1. `NODE_ENV`='production'
2. `NODE_ENV_PORT`='3000' or any available port

## npm scripts.

```
 "scripts": {
  "start": "export NODE_ENV=development&& export NODE_ENV_PORT=3000&& npm run start:lint",   # start the application with lint and env variables.
  "start:lint": "nodemon ./src/index.js --exec 'npm run lint && node' ",                     # start node app with eslint.
  "start:no-lint": "nodemon ./src/index.js",                                                 # start project with no eslint (not recommended).
  "build": "npm run test && node build.js",                                                  # build the app, first runs the test and starts build config.
  "lint": "esw ./src/"                                                                       # starts eslint on src
},
```

## under the hood

- [Node.js](https://nodejs.org/en/)
- [Express](https://github.com/expressjs/express)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Morgan](https://github.com/expressjs/morgan)
- [Helmet](https://helmetjs.github.io/)
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

## recommendations

its best to use vs code with the following plugins installed.

1. EditorConfig for VS Code
2. EsLint
3. Prettier - code formatter

## folder structure

**server folder**

```
 .
 ├── /node_module/              # contains all dependencies modules
 ├── /src/                      # contains the actual source code
 ├── /.babelrc                  # babel configuration and env specific plugins are kept here
 ├── /.editorconfig             # commom configuration to code editor
 ├── /.eslintignore             # some rules to ignore for eslint
 ├── /.eslintrc                 # eslint rules and configuration
 ├── /.gitignore                # ignore files to git
 ├── /.build.js                 # contains small build config written in js executed by nodejs
 ├── /.package.json             # dependencies for client app
 ├── /README.md                 # instructions and help
 ├── /LICENSE                   # license details
 ├── /CHANGELOG.md              # all changes mentioned
```

**src folder**

```
 .
 ├── /config/                   # exports all environment variables and configuration for the application needed.
 ├── /proxy/                    # exports are proxy routues for the express application.
 ├── /public/                   # contains files that are in the public domain ex all static files.
 ├── /routes/                   # exports all routes for express application.
 ├── /utility/                  # exports all utility functions used by the express app
 ├── /api/                      # exports all apis if needed for the applications.
 ├── /index.js/                 # creates an express app. imports all modues and starts the server.
```
