console.log("Hello from the Server!");
const express = require("express");

const app = express();
const data = {
  firstName: "Tharun",
  lastName: "Pullareddy",
};
// app.get("/", (req, res) => {
//   res.send("Hello from ");
// });
// app.post("/profile", (req, res) => {
//   console.log("Data is created");
//   res.send(data);
// });
// app.delete("/profile", (req, res) => {
//   console.log("Data is deleted");
//   res.send("Data is deleted");
// });
// app.patch("/profile", (req, res) => {
//   res.send("data updated ");
// });
// app.get("/test", (req, res) => {
//   res.send("Hello from test");
// });
// app.get("/profile", (req, res) => {
//   if (req.query) {
//     res.send(req.query);
//   }
//   res.send("Hello from profile");
// });
// app.get("/profile/:proId", (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });
app.use(
  "/users",
  [
    (req, res, next) => {
      console.log("1st Response");
      next();
    },
    (req, res, next) => {
      console.log("2nd Response");
      next();
    },
  ],
  (req, res, next) => {
    console.log("3rd Response");
    next();
  },
  (req, res, next) => {
    console.log("4th Response");
    next();
  },
  (req, res, next) => {
    console.log("5th Response");
    // next();
    res.send("Hi from user");
  }
);
// app.use((req, res) => {
//   res.send("Error page");
// });
app.listen(3000, () => {
  console.log("Listening from the port 3000");
});
