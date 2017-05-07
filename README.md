# rgr

Experimenting with React, GraphQL, flux, &amp; Relay. With a bigger emphasis on GraphQL and Relay!

### Setup
```sh
# Install dependencies
$ yarn install

# NO YARN? 😢🐼! Alternative
$ npm i --no-progresss

# Start mongoDB
$ mongod

# Setup mongoDB
$ mongo
  > use links
  switched to db links
  > db.links.insert([{
     "title": "React.js Main Website",
     "url": "https://facebook.github.io/react/"
   }, {
     "title": "Relay.js Main Website",
     "url": "https://facebook.github.io/relay/"
   }, {
     "title": "GraphQL Main Website",
     "url": "https://facebook.github.io/graphql/"
   }, {
     "title": "GraphQL Org",
     "url": "http://graphql.org"
   }])
  WriteResult({ "nInserted": 4 })
```

### Run
```sh
# Runs babel-node on server/index.js
$ npm start

# Runs webpack watch in dev mode
$ npm run webpack
```
### GraphQL Goodness 😮
[graphiQL](http://localhost:3000/graphql)

### Architecture
```sh
├── README.md
├── client                * Front-end Application
│   ├── components        * React Views
│   │   └── Main.jsx
│   ├── index.jsx
│   └── store             * Flux things
│       ├── actions.js
│       ├── constants.js
│       ├── disptacher.js
│       └── index.js
├── package.json
├── public                * Webpack Bundle Output
│   ├── bundle.js
│   └── index.html
├── server                * API server
│   ├── db.js
│   ├── graphql.js
│   └── index.js
├── webpack.config.js
└── yarn.lock
```
