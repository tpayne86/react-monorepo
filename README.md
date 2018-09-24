# ReactJs monorepo

# Objective
Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.
To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos). Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop all of their packages within a single repository.

# Why monorepo and lerna ?

## Pros:
- Single lint, build, test and release process.
- Easy to coordinate changes across modules.
- Single place to report issues.
- Easier to setup a development environment.
- Tests across modules are run together which finds bugs that touch multiple modules easier.

## Cons:

- Codebase looks more intimidating.
- Repo is bigger in size.
- Can't npm install modules directly from GitHub
- ???

# Plugins and tools 

- use `vs code` for best developer experience.
- download `EditorConfig for VS Code`
- download `EsLint` for vs code
- download `Prettier - code formatter` for vs code.
- you can try other code editors also. as long as they support the above mentioned pluguns.

# Under the hood.

- [Node.js](https://nodejs.org/en/)
- [lerna](https://lernajs.io/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)
- [ESLint](https://eslint.org/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [yarn](https://yarnpkg.com/en/)

# Install

this project uses `lerna` and `yarn workspaces` to implement `monorepo` and `local dependency` management and share code across all the applications

**STEPS**
1. install [Node.js](https://nodejs.org/en/). 
2. install [yarn](https://yarnpkg.com/en/) `npm install --global yarn`
3. install [python 2.7](https://www.python.org/downloads/) which is used by sass compiler. (this may change in future)
4. install [lerna](https://lernajs.io/) `npm install --global lerna`
5. go to root of the project and hit `yarn project:init`
6. bootstrap application which will install all dependencies and linking local packages by `yarn app:bootstrap`  
7. build all common local packages by `yarn build:all-packages`

# Scripts
  - **app:bootstrap** - initializes the repo, installs all node modules and links all local dependencies.  
      must be called everytime a new packe is added to the project
  - **app:clean** - cleans repo by removing all the node modules and links between the modules.
      must call it when package or library errors occur
  - **app:list** - lists all local packages registered with lerna
  - **app:changes** - shows all changes in the packages. should call before git push.
      shows all changes in all the packages.
  - **app:diff** - shows diff
  - **app:build** - builds all the applications for production in sequence 
      server >> local packages >> webpack apps.
  - **app:start-commons** - starts common in watch mode.    
  - **app:start-server** - starts server in watch mode.    
  - **node:add-module** - need to provide app name after this command ex yarn node:add_module @pkg/app.
      this will add a new node module to the packages. and update its package.json with dep name.
  - **node:outdated** - lists down all the outdated node modules.
  - **node:update-packages** - will run `yarn upgrade` and updates all node modules.  
      **read changelog of modules before doing this** 
  - **git:push** - will do `git push origin branchname` and also increase your app versions. 
      do it always to push the branch. dont do manual push, as it increases the app version.
  - **build** - execures build command in each package.json
  - **build:package** - build a package. need to provide package name ex `yarn build:package @pkg/name`
  - **build:all-packages** - builds all packages by runing build command in each package.json
  - **build:server** - build only server application
  - **build:commons** - builds all packages except server
  - **test** - runs test in all packages . to run for specific package. add folder to the command
      ex `yarn test packages/components`
  - **test:watch** - runs test in all packages in watch mode.
  - **exec** - lets u execute non lerna commands 
  - **execute** - lets u run any npm command ex  `yarn execure start`
  - **execute:parallel** - executes npm command in parllel
  - **wp:start** - starts a webpack project . need to specify app name also ex `yarn wp:start --env.app=appname`
  - **wp:dev** - starts dev proxy webpack build in watch mode
  - **wp:stage** - starts stage prox webpack build in watch node
  - **wp:build** - builds webpack project in prod mode. need to specify app name ex `yarn wp:build --env.app=appname`
  - **wp:analyze-speed** - adds a webpack plugin to dev build to find speed of webpack execution
  - **wp:build:analyze-bundle** - adds a webpack plugin to prod build bundle analyzer
  - **wp:build:analyze-buddy** - adds a webpack plugin to prod build bundle buddy
  - **dev-server** - starts webpack dev sever
  - **wp:profile** - creates a stat.json that can be uploaded to webpack org to get stats.
  - **project:init** - initializes project with yarn workspaces. which is required for this project


# Files and folders

## Root
```
.
├── /__mocks__/                # contains jest mocks
├── /app-templates/            # contain template apps. 
├── /coverage/                 # contains code coverage generated by jest tests (instanbuljs). 
├── /dist/                     # dist folder will contain build application which can be deployed
├── /node_module/              # contains all dependencies modules
├── /packages/                 # contains all packages where the development will be coded
├── /webpack-config/           # contains a single webpack build config for the application
├── /.editorconfig             # commom configuration to code editor
├── /.eslintrc                 # eslint rules and configuration
├── /.eslintignore             # some rules to ignore for eslint
├── /.gitattributes            # git attributes 
├── /.gitignore                # ignore files to git
├── /babel.config.js           # babel config for builds
├── /CHANGELOG                 # major changes
├── /jest.config.js            # jest test runner config
├── /lerna.json                # lerna configuration
├── /LICENSE                   # license
├── /manifest.json             # contains webpack projects info
├── /.package.json             # dependencies for client app
├── /README.md                 # instructions and help
├── /webpack.config.js         # contains webpack config root
├── /yarn.locl                 # contains yarn lock files
```
## Packages
```
.
├── /assets/                   # contains all common static assets, like logos, images, libraries etc.
├── /components/               # contains all shareble commomn components
├── /constants/                # contains all common app constants
├── /elements/                 # contains element components , wrapper over ui library components
├── /server/                   # nodejs express server app 
├── /styles/                   # contains global styles. which can be shared accross apps
├── /utilities/                # contains utility service/functions etc
```

# Packages

packages are the small projects/applications which can be treated as npm modules. each package can be imported by other packages 
this enables maximum code re-use and good organization of the code, unit testing.
`lerna` is a good tool for organizing and managing javascript projects. in this project we will treat
each application as a package. if there are features that can be used by other or future application should be 
written in common packages. 
each package must have :
1. **name** which starts with @namespace/appname this is an industry standart and all future applications
should follow. 
2. **package.json** must have this defaults in package.json 

```
{
  "private": true,
  "name": "@healthifyme/name",
  "version": "1.0.0",
  "description": "description of the package",
  "main": "dist/index.js",
  "author": "hannad rehman",
  "license": "MIT",
  "scripts": {
  },
  "dependencies": {

  },
  "peerDependencies": {

  },
  "devDependencies": {
  }
}

```
in future we will have a automated app creation tool which will add these defaults to the packages.
3. must have `editorconfig`, `babelconfig`,`.eslintrc`, you can copy it from other packages.
these may also change as per project requirments.
4. **common** packages will have `babel` build and watch
5. **webpack** applications dont need any build sctipt as its already written in root.
6. **webpack** apps should be registered in `manifest.json`
6. **common** packages must have `build` and `watch` command in their scripts

# Tools

## 1. lerna 
Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.
Lerna can also reduce the time and space requirements for numerous copies of packages in development and build environments - normally a downside of dividing a project into many separate NPM package. See the hoist documentation for details.

read documentation [here](https://github.com/lerna/lerna)

## 2. babel

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:
Transform syntax
Polyfill features that are missing in your target environment (through @babel/polyfill)
Source code transformations (codemods)
And more! (check out these videos for inspiration)

read documentation [here](https://babeljs.io/)


## 3. jest 

Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases.

read documentation [here](https://jestjs.io/)


## 4. enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

read documentation [here](https://airbnb.io/enzyme/)


## 5. eslint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:
ESLint uses Espree for JavaScript parsing.
ESLint uses an AST to evaluate patterns in code.
ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

read documentation [here](https://eslint.org/)


## 6. webpack

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

read documentation [here](https://webpack.js.org/)

# demo

## run server in development

`yarn app:start-server`

## run common packages in development

`yarn app:start-server`

## run webpack apps

`yarn wp:start --env.app=appname`


## build server in production

`yarn build:server`

## build common packages in production

`yarn build:commons`

## build webpack app

`yarn wp:build --env.app=appname`

## build all applications at once for production

`yarn app:build`

## test

`yarn test`

## test in watch mode 

`yarn test:watch`

## test package

`yarn test packages/foldername`

## test and watch package

`yarn test:watch packages/foldername`
