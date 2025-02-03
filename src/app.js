console.log("Hello from the Server!");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from ");
});

app.get("/test", (req, res) => {
  res.send("Hello from test");
});
app.get("/profile", (req, res) => {
  res.send("Hello from profile");
});
app.use((req, res) => {
  res.send("Error page");
});
app.listen(3000, () => {
  console.log("Listening from the port 3000");
});
