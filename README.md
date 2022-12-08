# Angular Weather app with Spott and Yahoo API
This codebase was created to demonstrate a  Weather application built with Angular 13 that interacts with an actual backend server using Yahoo API

### Get started

### Clone the repo

```shell
git clone https://github.com/sameenhewage/weather-app.git
cd weather-app
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start or npm open
```

Make sure you have the Angular CLI installed globally. We use NPM to manage the dependencies, so we strongly recommend you to use it. Then run npm install to resolve all dependencies (might take a minute).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm open` - same as `npm start` and it's automatically open in a browser".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.

## environment.ts

This contains supportive keys and api urls to get the weather API data

## API

This project is based on City API and Yahoo weather api

* `City API` - basic subscription (Free) fro all, but requests limits to 1000/month (Hard limit) and 10 requests per minute.
    * `API documentation` - `https://rapidapi.com/Spott/api/spott`
* `Yahoo weather API` - basic subscription (Free) fro all, but requests limits to 1000/month (Hard limit) and 10 requests per minute.
    * * `API documentation` - `https://rapidapi.com/apishub/api/yahoo-weather5/`


## Web App documentation
`https://docs.google.com/document/d/1AwDem8-ONab5yD2tU8bsevFPVPFi-qKsb20JOa9at6E/edit`
