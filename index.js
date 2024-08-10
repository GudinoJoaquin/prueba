import express from "express";
import route from "./routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 1234;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("trust proxy", true);

// app.use((req, res, next) => {
//   const api = req.headers['x-api-key'];
//   if (!api) {
//     res.status(401).send("Usuario no autorizado");
//     return;
//   }
//   next();
// });

app.use(route);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
