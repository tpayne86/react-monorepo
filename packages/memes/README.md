# React Application

## info

a complete react project with :

1. react, redux , redux sagas
2. eslint
3. customizable build config
4. jest and enzyme test framework
5. babel and eslint config to support es2017
6. react hot module replacement
7. code splitting
8. code organisation based on "Feature first approach"
9. webpack.

**this project requires**

1. `NodeJS`
2. `npm`.
3. `python 2.7` which may change in future

## How to set up? Install

if running the project for the first time . got to project root and
`yarn app:clean`
`yarn app:bootstrap`

this app is where all front end code will live. in most of the cases it will be a single page application
build with react,redux,sagas, and build by webpack.


### start

after bootstrapping the project in the root 
`yarn wp:start --env.app=@healthifyme/appname`
this will run the applications in `watch` mode. meaning any file change will be reacted and updated`
in the browser. (Hot module replacement)

### build

to build for deployment/production.

- hit `yarn wp:build --env.app=@healthifyme/appname`

doing this will initiate webpack build, and transpile the file to dist folder
 in root `dist/public/appname` folder in the application root which will contain a full stack build
`nodejs` application ready to deploy with its own `package.json`.
 install node modules and run the app.

### Unit Testing

we are using jets and enzyme for unit testing javascript and react components. you can write unit test cases for
each javascript module (in ES6, commonJS a module is simply a javascript file .js ). to test any module just create
the same filename with .`spec.js` or `.spec.jsx` at the end. in the `__tests__` folder in the same directory, for example `api.service.js` => `__tests__/api.service.spec.js`
and `home.component.jsx` => `__tests__/home.component.spec.jsx`

tests can be run in 2 modes.

1. watch mode => where you can make changes to test files and on save all the jest tests will re run.
2. complete mode => where you start the tests and it runs to completion. no file changes are monitored in this mode.

**npm scripts**

in the root of the project.
- `yarn test packages/foldername --watchAll` runs the tests in watch mode. it provides some cli options which you can play with
- `yarn test packages/foldername` runs tests without watch mode. these are simple run to completion tests.

**important**
to run the built application it needs following environment variables

1. `NODE_ENV`='production'

## npm scripts.


## under the hood

- [Node.js](https://nodejs.org/en/)
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reactjs/redux)
- [Sagas](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [React Router v4](https://github.com/reactjs/react-router)
- [AntD with scss](https://ant.design/)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)
- [ESLint](https://eslint.org/)

## recommendations

its best to use vs code with the following plugins installed.

1. EditorConfig for VS Code
2. EsLint
3. Prettier - code formatter

## folder structure

**client folder**

```
.
├── /node_module/              # contains all dependencies modules
├── /src/                      # contains the actual source code
├── /.babelrc                  # babel configuration and env specific plugins are kept here
├── /.editorconfig             # commom configuration to code editor
├── /.eslintignore             # some rules to ignore for eslint
├── /.eslintrc                 # eslint rules and configuration
├── /.gitignore                # ignore files to git
├── /.package.json             # dependencies for client app
├── /.package-lock.json        # dependencies lock
├── /README.md                 # instructions and help
├── /LICENSE                   # license details
├── /CHANGELOG.md              # all changes mentioned
```

**src folder**

```
.
├── /App/                     # App folder which contains all react components
├── /Assets/                  # Assets folder contain all images, logos, global styles, css etc which does not belong to react components
├── /Constants/               # Contains all app level constants for the app. like api endpoints etc.
├── /Services/                # All helper methods, functions modules that are used accross the application, shared code which should be reused everywhere
├── /Store                    # contains redux store and other redux utilities
├── /Styles/                  # styles for the app, libraries and common classes that should be re-used. also scss variables and antd theme variables are kept here.
├── /App.hot.js               # initializations for React HMR
├── /index.ejs                # index.html we are using ejs as templating engine so that we could inject variables into template
├── /index.jsx                # starting point of the app. which will initialises the react app.
```

**src/App folder**

```
.
├── /__tests__/               # Contains test files for App Component.
├── /Layout/                  # Layout component declares the application lyout. ex navbar,body, footer, side pan. which defines the app lyaout.
├── /Router/                  # Router component imports react router and declares the routing for the sub apps. all the routing should be registered here. and lyout will import router
├── /Modules                  # Modules are independent apps which in most of the cases is a PAGE or Router ex Home, Profile,Chat,Massenger etc.
├── /actionNames.js/          # Contains all App level action Names for the redux
├── /actions.js/              # Contains all redux actions on app level.
├── /action.spec.js           # Tests fir actions
├── /index.jsx                # App component definition is here.
├── /operations.js            # Contains all Sagas helper methods.
├── /reducer.js               # Contains reducer for app level actions.
├── /reducer.spec.js          # Tests for reducer.
├── /sagas.js                 # default export for app level sagas.
```

**src/Assets folder**

```
.
├── /Images/                  # Contains all images for the app.
```

**src/Constants folder**

```
.
├── /api/                    # Contains all constants for apis like endpoints, params etc
├── /app/                    # Contains all App level constants.
├── /elements/               # Contains Element level constants.
```

**src/Services folder**

```
.
├── /api/                    # Contains all api services like requests, request maker, authorizations etc.
├── /utility/                # Contains all utility functions like for objects,arrays, debounce, timers etc
```

**src/Store folder**

```
.
├── /combinedReducer.js      # All the reducers are combined here and given to the store.
├── /index.js                # Initializes the  redux store with all middlewares.
├── /logger.js               # A simple redux middleware which logs all the actions.
```

**src/Styles folder**

```
.
├── /display/                # All display classes like flex,margin,padding etc are here
├── /theme                   # Theme variables for app and antd
├── /variables               # Variables like colors and themes etc
├── /global.scss             # Global css.
```

## A simple Component structure.

here is a template for a component folder structure.
**src/Styles folder**

```
ComponentName
    ├── /__tests__/                        # contains all unit test cases files corrosponding to component, actions, reducer, operations, utility.
    ├── /Components                        # Child components that may be used by this component, which may be not be common.
    ├── /ComponentName.actionNames.js      # Action names for the component
    ├── /ComponentName.actions.js          # Action creators for the componentName
    ├── /ComponentName.component.jsx       # React component decleration
    ├── /ComponentName.reducer.js          # Reducer for the component
    ├── /ComponentName.operations.js       # operations for component
    ├── /ComponentName.styles.scss         # Styles for the component
    ├── /ComponentName.utility.js          # utility methods which do not belong to the component
```

if the component does not need redux actions and seperate store then

```
ComponentName
    ├── /__tests__/                        # contains all unit test cases files corrosponding to component, actions, reducer, operations, utility.
    ├── /Components                        # Child components that may be used by this component, which may be not be common.
    ├── /ComponentName.component.jsx       # React component decleration
    ├── /ComponentName.component.spec.js   # Test files component
    ├── /ComponentName.styles.scss         # Styles for the component
```

# Redux

redux is the most important part of the application because it handles the data.
we are only storing business data in the redux store. which means data that 
is external or which has business implication.
data with respect to UI and UI state or elements need not to be stored in the redux store as it can be handled by the component itself.
its a common misconception that we store every piece of data in the redux store. that's really not necessary. of you want to store the
`open` state of a accordion in the redux store then its wrong. the component 
using the accordion should have that state

## Redux hierarchy

we have organized redux store as per our project structure. it makes it easy 
to maintain the store when u know what part of the application
requires what part of the store, there is no misconception or confusion when using the store in components.

also it should be noted that not each and every component needs not to be connected to the redux store. we should only connect top level components to the store
and pass around props to the child components. it makes data flow easy to understand in the component and you can visually understand that what props are passed to a component
without opening the component definition.

**redux hierarchy**

```
Store
  ├── App                    # contains app global data, can be a nested obect
  ├    ├──AppGlobals
  ├    ├──AppContext
  ├    ├──AppConfiguration
  ├    ├──AppVersion
  ├── User                   # User related data
  ├    ├──UserGlobals
  ├    ├──UserProfile
  ├    ├──UserConfiguration
  ├    ├──UserConrexr
  ├── Modules                # Seperate store for each sub application/routes
  ├    ├──Home
  ├    ├──Profile
  ├    ├──Todo
  ├    ├──About
  ├    ├──Error
```

maintaining the same hierarchy in redux store has many benefits. one of them 
is code organization.
each sub application has a `reducer`,`sagas` which are default exported and combined and given to the store.

## Handling side effects with sagas

front end application is all about handling side effects. for us the most important side effects are the api calls.
apis give us external data and our react components should be able to handle them without making it complicated.

the best practice is to have react components only handle the view. no 
additional logic. that even includes making api calls.
react component should not be concerned about how the data is fetched from external source. it should only consider the data passed to it
as a props. that's why we are handling external data outside the component 
echo system. and passing objects to the components as props.

### why sagas ?

there are other alternatives to manage side effects one them is [thunk](https://github.com/reduxjs/redux-thunk). thunks are good but the problem is
thunks are very painful to unit test.

sagas use `generator` functions to handle the async tasks which makes it unit testable.

## Saga Data structure for apis.

Every Api calls in most of the cases will have 3 states.

1. Loading
2. Success
3. Failure

at one instant of time there will be only one of these three states . and we can show according Ux as per the state. ex

1. Loading state => show a loader/loading screen
2. Success state => show the actual data
3. Failure state => show error fallback/alert/toas etc.

storing all three states in store has good benefits. there will be no useless
 logic with respect to maintaining these states

it can be passed as props to the component, and thus component will re-render automatically when state changes, and our fallback will render
automatically.

there is less code in the component. component will focus on view layer only.

so we data point which needs to be stored in the redux store, must have these three states. ex.

`home reducer` stores `homeTiles` from an api. so our reducer will have

```
 var home = {
   loading:false,
   data: null,
   error: null
 }
```

and for each state change a action has to be dispatched which `saga operation` will take care of.

```
import { put } from 'redux-saga/effects';

import {
  homeTiles,
} from 'Services/api/api.requests';

import {
  HomeFetchHomeTilesLoading,
  HomeFetchHomeTilesSuccess,
  HomeFetchHomeTilesFailure,
} from './actions';

export function* fetchHomeTilesSaga() {
  try {
    yield put(HomeFetchHomeTilesLoading()); // dispatched loading action which reducer will set loading state
    const profile = yield homeTiles(); // yeilds homeTiles when promise is success
    yield put(globalFetchHomeTilesSuccess(profile)); // dispatched data as success action
  } catch (e) {
    yield put(globalFetchHomeTilesFailure(e)); // dispatched error when api fails.
  }
}
```

**home reducer**

```
import homeActionNames from './actionNames';

const defaultState =  {
   loading:false,
   data: null,
   error: null
 }
const homeReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case homeActionNames.FETCH_HOME_TILES_LOADING:
      return {
        ...state,
        loading: true
      }
    case homeActionNames.FETCH_HOME_TILES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case homeActionNames.FETCH_HOME_TILES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default homeReducer;
```
