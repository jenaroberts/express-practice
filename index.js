import express from "express";
import { hello, helloPerson, greetNewPerson } from "./src/hello.js";
import { welcomeHome } from "./src/welcome.js";

const PORT = 3030;
const app = express();
app.use(express.json());
app.get("/hello", hello);
app.post("/hello", greetNewPerson);

app.get("/hello/:person", helloPerson);
app.get("/", welcomeHome);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}...`));
