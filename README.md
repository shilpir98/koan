[![KOAN](/client/images/koan.png)](https://koan.herokuapp.com)

[![Build Status](https://travis-ci.org/soygul/koan.svg?branch=master)](https://travis-ci.org/soygul/koan)

KOAN Stack is a boilerplate that provides a nice starting point for full stack JavaScript web development with [Koa](http://koajs.com/), [Angular](https://angular.io/), [Node.js](http://www.nodejs.org/), and [MongoDB](https://www.mongodb.org/). A summary of tech stack:
* **Client**: Angular 2 and Angular Material.
  * ES6 modules in Angular2 via [WebPack](https://webpack.github.io).
  * ES6, ES7 support both in client and server via [Babel](https://babeljs.io/).
* **Server**: Koa for RESTful API serving on Node.js.
  * [WebSockets](https://developer.mozilla.org/en/docs/WebSockets) along with JSON-RPC is used for real-time client-server communication and browser sync.
  * OAuth 2 is used for social authentications. Instead of auth cookies, we use JWT along with HTML5 *local storage*.
  * MongoDB for persistence.

## KOAN for AngularJS 1.x

Use the [v1.x branch](tree/v1.x).

## Live Example
Browse the live KOAN example on [https://koan.herokuapp.com](https://koan.herokuapp.com) which is a Facebook like real-time sharing app.

## Getting Started
Make sure that you have Node.js v4/v5, and MongoDB v2/v3 (running on the default port 27017) installed on your computer. To get started with KOAN stack, do following:

```bash
git clone --depth 1 https://github.com/soygul/koan.git
cd koan
npm install
npm start
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000). If you want to run tests, simply type:

```bash
npm test
```

## Configuration
All configuration is specified in the [/server/config](/server/config/) directory, particularly the [config.js](/server/config/config.js) file. Here you can hook up any social app keys if you want integration with Twitter, Facebook, or Google.

## Heroku Deployment
Before you start make sure you have <a href="https://toolbelt.heroku.com/">heroku toolbelt</a> installed.

```bash
git init
git add .
git commit -m "initial version"
heroku apps:create
heroku addons:add mongohq
heroku config:add NODE_ENV=production
git push heroku master
heroku open
```

Optionally, you can pass credentials to KOAN via environment variables as it might not be secure to store them in your repo. Note that if you do this, you'll need to adjust other configuration options accordingly (i.e. FB/Google client IDs, etc.).

```bash
heroku config:add SECRET=jwt_secret PASS=login_pass FACEBOOK_SECRET=facebook_oauth_secret GOOGLE_SECRET=google_oauth_secret
```

## Coding Style
Use [Airbnb JS Guide](https://github.com/airbnb/javascript). It is enforced along with the test runs (see below), or separately using `npm run lint`.

## Testing
You can run all the tests with `npm test`. Tests are run with:
* Client (unit): Jasmine + Karma
* Client (e2e): Jasmine + Protractor
* Server: Jasmine
* Linter: ESLint

## The Name
The project name is an acronym for Koa, Angular, and Node. It also is the name for a Zen Buddhist riddle used to focus the mind during meditation and to develop intuitive thinking.

## License
MIT

## Screenshots

Screenshots from the demo app, in case Heroku is down.

**Login page:**

![Login Page](/client/images/scrshot_login.png)

**User home page:**

![Home Page](/client/images/scrshot_home.png)
