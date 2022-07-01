# Authorization Boilerplate

## Features

- login/registration functional
- token functional
- confirm email functional
- get users functional

## Tech

- express.js
- nodemailer
- jwt
- ModngoDB

## Installation

Clone project.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run dev
```

## Environments

```sh
PORT=5000 - server port
DB_URL=mongodb://localhost:27017/db - MongoDb url
JWT_ACCESS_SECRET=jwt-auth-secret-key - jwt secret access key
JWT_REFRESH_SECRET=jwt-refresh-secret-key - jwt secret refresh key
SMTP_HOST=smtp.gmail.com - smtp mail host
SMTP_PORT=587 - mail smtp port
SMTP_USER=user@gmail.com - smtp mail user
SMTP_PASSWORD=cxzczcxcxzcxzcc - smtp mail password
API_URL=http://localhost:5000 - api url
CLIENT_URL=https://www.google.com/ - client url
```
