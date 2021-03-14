import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoute from "./routes/postImg.js";
import userRoute from "./routes/User.js";
import path from "path";
import cors from "cors";
import fileUpload from "express-fileupload";
const app = express();

//Creation connexion mong
const uri =
  "mongodb+srv://admin:admin@cluster0.v7oal.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//reglage du probleme CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(cors());
//app.use(fileUpload({ createParentPath: true }));
/*app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);*/
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/postImg", postRoute);
app.use("/api/auth", userRoute);
app.use("/api/user", userRoute);
app.use("/images", express.static(path.join("images")));

export default app;
