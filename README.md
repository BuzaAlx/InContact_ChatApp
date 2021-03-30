# Full stack ChatApp "InContact"

----

## Features


 
 - Using GraphQL as client-server middleware,
 - Using Sequelize ORM for MySQL database (init proj,creating models,seeding data),
 - using GraphQl subscription (PubSub) for geting real-time changes,
 - clientSide based on CRA,
 - using Material UI for styling,
 - SignIn/SignUp with serverSide validation,
 - JWTtoken for authorization,
 - adding reaction to the message,
 - Redux.
 - Client side typisation using Typescript
 

> The purpose of creating this app is 
> leaning GraphQl middleware(appollo server,apollo client), 
> basics of Sequelize ORM(what is model?migration?),MySQL queries, 
> Material UI. And of course to improve my React skills.

![Image of ChatApp](https://i.postimg.cc/mDCD51nS/Chat.png)


## Tech


- [Sequelize ORM],
- [MySQL database],
- [Apollo GraphQl],
- [React]
- [Material-UI]
- [TypeScript]


## Installation

 - To install copy repository to some of your folder on your machine using git.

```
git clone [link]
```
 - install sequelize-cli globaly run:
 
```
npm i -g sequelize-cli
```

 - Then you must to install MySQL Workbench -> create a user and you own password.
 - Put your credentials into ---confing.json--- in config folder.
 ```
"development": {
    "username": "root",
    "password": " your password",
    "database": "chat",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 ```
 - in MySQL workbench create new connection,use your password;
 - create new database:
```
    CREATE DATABASE chat
 ```
 
 - then type for using the database
```
    use [database]
```

 - initialaze all seeders for adding some data to database ---> run:
```
 sequelize db:seed:all  
```

 - then to start the server run 
```
npm install
```
server will run on port  http://localhost:4000/

 To start client :
 - open new terminal and type "cd client" to go to client folder
 - then run npm install to initialize all dependencies;
 - then run npm start to run 
client will run on port http://localhost:3000/

