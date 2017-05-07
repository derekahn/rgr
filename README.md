# rgr

Experimenting with React, GraphQL, flux, &amp; Relay. With a bigger emphasis on GraphQL and Relay!

### Setup
```sh
# Install dependencies
$ yarn install

# NO YARN? 😢🐼! Alternative
$ npm i --no-progresss
```

### Run
```sh
# Runs babel-node on server/index.js
$ npm start

# Runs webpack watch in dev mode
$ npm run webpack
```

### Architecture
```sh
├── README.md
├── client                  * Front-end Application
│   ├── components          * React Views
│   │   └── Main.jsx
│   ├── index.jsx           * Mount React
│   └── store               * Flux things
│       ├── actions.js
│       ├── constants.js
│       ├── disptacher.js
│       └── index.js
├── package.json
├── public                  * Webpack Bundle Output
│   ├── bundle.js
│   └── index.html
├── server                  * API server
│   ├── db.js
│   ├── index.js
│   └── router.js
├── webpack.config.js
└── yarn.lock
```
