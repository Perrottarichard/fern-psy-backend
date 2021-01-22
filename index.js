require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const middleware = require("./middleware");
const loginRouter = require("./controllers/userLogin");
const userRouter = require("./controllers/users");
const forumRouter = require("./controllers/forum");
const adminRouter = require("./controllers/adminLogin");
const contactRouter = require("./controllers/contact");
const path = require("path");

const app = express();
app.use(middleware.tokenExtractor);

const MONGO_URI = process.env.MONGO_URI;
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(
  express.static(path.join(__dirname, "build"), {
    etag: false,
    lastModified: false,
    setHeaders: (res, dest) => {
      if (dest.indexOf("index.html") !== -1) {
        res.set("Cache-Control", "no-store");
      }
    },
  })
);

app.set("etag", false);
app.disable("x-powered-by");

app.use((req, res, next) => {
  // hide x-powered-by for security reasons
  res.set("X-Powered-By", "some server");
  // This should apply to other routes
  res.set("Cache-Control", "no-store");
  next();
});

app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);
app.use("/api/forum", forumRouter);
app.use("/api/admin", adminRouter);
app.use("/api/contact", contactRouter);

// app.get("/*", (request, response) => {
//   response.set("Cache-Control", "no-store");
//   response.sendFile(path.join(__dirname + "/build/index.html"));
// });

app.get("/", (req, res) => {
  // I think this is redundant
  res.set("Cache-Control", "no-store");
  res.sendFile(path.join(__dirname + "/build/index.html"), {
    etag: false,
    lastModified: false,
  });
});

app.get("*", (req, res) => {
  // I think this is redundant
  res.set("Cache-Control", "no-store");
  res.sendFile(path.join(__dirname + "/build/index.html"), {
    etag: false,
    lastModified: false,
  });
});

let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
