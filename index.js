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
