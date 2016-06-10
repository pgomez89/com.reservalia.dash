## Reservalia Monitor

### Main Features
 - Universal (Isomorphic) Javascript
 - Asyncronous Redux actions example

### Setup

 - Clone the repo `git clone git@github.com:despegar/com.reservalia.monitor.git`
 - Make sure you are using Node v6.0.0 (I recommend using [nvm](https://github.com/creationix/nvm) for Node version management)
 - Run `npm install`
 - If your local environment is not reflected by `config/default.json`, then add a file at `config/local.json` to provide local customisation.

### Running Dev Server

 - Run `npm start` will start Webpack dev server - for serving the client, and also start the API server
 - Go to http://localhost:3001 in two seperate tabs - see changes propagate in real time (Hot Module Replacement works too)

### Running Production Server

You will need to roll out your own deployment script for a server, but before you can ship you will need to:

 - Build the client with `npm run build:prod`
 - Ensure all production npm modules are installed on the server. e.g. `npm install --prod`
 - Rsync your application to your server
 - Set up nginx or your web server of choice to map HTTP requests for your URL to `http://localhost:3000`
 - Run `npm run start:prod` to run on your server
 - Go to your URL

### Generators

> Need [redux-cli] (https://github.com/SpencerCDixon/redux-cli)

```bash

$ npm i -g redux-cli

```
##### For help

```bash

redux help g

```

#### Presentational React Components

```bash

$ redux g component componentA

```
this looks like:

```bash

/universal/components/  # Presentational React Components
├── component_a
│   ├── index.js     # component code
│   └── index.scss   # css here

...

test/conponents/
└── component_a_test.js

```

#### Containner React Components


```bash

$ redux g containner app

```


```bash

$ redux g containner app

```
this looks like:

```bash

universal/containers/
├── app
│   └── index.js

...

test/containers/
└── app_test.js

```

#### Redux reducers


```bash

$ redux g reducer reducerA

```
this looks like:

```bash

universal/reducers/
├── index.js
└── reducer_a
    └── index.js

...

test/reducers
└── reducer_a_test.js


```

### Tech Used

| **Tech** | **Description** | **Version** |
| ---------|-----------------|-------------|
| [React](https://facebook.github.io/react/) | View layer | 15.0.2 |
| [React Router](https://github.com/reactjs/react-router) | Universal routing | 2.4.0 |
| [Redux](http://redux.js.org/) | State management | 3.5.0 |
| [Express](http://expressjs.com/) | Node.js server framework | 4.13.0 |
| [Socket.io]() | Used for realtime communication between clients and server | 1.4.0 |
| [Webpack](https://webpack.github.io/) | Module bundling + build for client | 1.13.0 |
| [Superagent](https://github.com/visionmedia/superagent) | Universal http requests | 1.8.0 |
| [Stylus](http://stylus-lang.com/) | Expressive, dynamic, robust CSS | 0.54.0 |

