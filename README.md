Here we will copy all the steps of the screen shot .

starting the node project
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % npm init

![alt text](image.png)

![alt text](image-2.png)

updating the npm :

ratxensolutionspvtltd@ratxens-MacBook-Pro backend % npm install -g npm@10.8.2
![alt text](image-3.png)

initialize git :
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % git init
![alt text](image-4.png)

create git project
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % gh repo create mern_sequelize --public --source=. --remote=origin
![alt text](image-5.png)

pushing to git
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % git branch -m main
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % git add .
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % git commit -m "this is vercel backend for sequelize"
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % git push -u origin main

![alt text](image-6.png)

How to pull from git :
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % git pull

![alt text](image-7.png)

Connecting vercel:
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % npm install -g vercel

![alt text](image-8.png)

ratxensolutionspvtltd@ratxens-MacBook-Pro backend % vercel login
![alt text](image-9.png)

![alt text](image-10.png)
![alt text](image-11.png)

vercel configuration

![alt text](image-12.png)

Express app preparation
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % npm install dotenv express
ratxensolutionspvtltd@ratxens-MacBook-Pro backend % npm install nodemon

![alt text](image-16.png)

![alt text](image-17.png)

.env configuration

![alt text](image-13.png)

index.js configuration

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

Now run the vercel in local dev side

![alt text](image-14.png)

![alt text](image-15.png)
