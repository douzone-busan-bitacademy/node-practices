# MySite on Node(Express)

## 설치 패키지
$ npm i express
$ npm i express-session
$ npm i serve-favicon
$ npm i ejs
$ npm i moment
$ npm i sequelize
$ npm i mysql2
$ npm i dotenv
$ npm i multer
$ npm i winston
$ npm i winston-daily-rotate-file

$ npm i -D nodemon


## scripts in package.json
```JSON
.
.
  "scripts": {
    "debug": "nodemon index.js",
    "start": "node index.js"
  }
.
.
```


## project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- config
    |--- public
    |--- logging
    |--- routes
    |--- controllers
    |--- models
    |--- views
            |--- main
            |--- admin
            |--- user
            |--- board
            |--- guestbook
            |--- gallery


</pre>