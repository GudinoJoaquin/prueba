import express from "express";
import route from "./routes.js";
import cors from "cors";
const app = express();
const port = process.env.port || 1234;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   const { api } = req.body;
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
