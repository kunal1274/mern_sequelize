Here we will copy all the steps of the screen shot .

##### starting the node project

```sh
npm init
```

![alt text](image.png)

![alt text](image-2.png)

##### updating the npm :

```sh
npm install -g npm@10.8.2
```

![alt text](image-3.png)

##### initialize git :

```sh
git init
```

![alt text](image-4.png)

##### create git project

```sh
gh repo create mern_sequelize --public --source=. --remote=origin
```

![alt text](image-5.png)

##### pushing to git

```sh
git branch -m main
git add .
git commit -m "this is vercel backend for sequelize"
git push -u origin main
```

![alt text](image-6.png)

##### How to pull from git :

```sh
git pull
```

![alt text](image-7.png)

##### Connecting vercel:

```sh
npm install -g vercel
```

![alt text](image-8.png)

```sh
vercel login
```

![alt text](image-9.png)

![alt text](image-10.png)
![alt text](image-11.png)

##### vercel configuration

![alt text](image-12.png)

##### Express app preparation

```sh
npm install dotenv express nodemon
```

![alt text](image-16.png)

![alt text](image-17.png)

##### .env configuration

![alt text](image-13.png)

##### index.js configuration

```javascript
import expressInstance from "express";
import { config } from "dotenv";

config();

const appInstance = expressInstance();

const portValue = process.env.PORT || 8000;

appInstance.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

appInstance.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// listening at port should be used only when you are not using vercel dev .
// in case of vercel dev - we should not use this .
const startServer = () => {
  try {
    appInstance.listen(portValue, () => {
      console.log(`Node JS server is listening at port ${portValue}`);
    });
  } catch (error) {
    console.log(
      `Failed to listen the server at ${portValue} with the error : ${error}`
    );
  }
};

// commented so that vercel dev can be used.
//startServer();

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

export default appInstance;
```

##### Now run the vercel in local dev side

![alt text](image-14.png)

![alt text](image-15.png)

##### if size issue in pushing the file to git hub :

- in folder : ratxensolutionspvtltd@ratxens-MacBook-Pro backend %

```sh
git config --global http.postBuffer 524288000
```

##### Connect the vercel project to git hub

![alt text](image-18.png)

##### How to create a git hub branch

```sh
git branch -m "dev1"
git add .
git commit -m "dev1 - 1"
git push -u origin dev1
```

![alt text](image-19.png)

##### Installing mysql

![alt text](image-20.png)

![alt text](image-21.png)

![alt text](image-22.png)

###### through the homebrew

- to check version

```sh
mysql --version
```

- to install mysql

```sh
brew install mysql
```

Upgrading from MySQL <8.4 to MySQL >9.0 requires running MySQL 8.4 first:

- brew services stop mysql
- brew install mysql@8.4
- brew services start mysql@8.4
- brew services stop mysql@8.4
- brew services start mysql

We've installed your MySQL database without a root password. To secure it run:
mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
mysql -u root

To restart mysql after an upgrade:
brew services restart mysql
Or, if you don't want/need a background service you can just run:
/opt/homebrew/opt/mysql/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql

- to secure with root user and password

```sh
mysql_secure_installation
```

![alt text](image-24.png)

- to connect to mysql now it should be with password

```sh
mysql -u root -p
```

- to start mysql services

```sh
brew services start mysql
```

- to restart mysql services

```sh
brew services restart mysql
```

-

##### installing mysql workbench

![alt text](image-23.png)

### Now configuring the node js backend with sequelize

```sh
npm install mysql2
```
