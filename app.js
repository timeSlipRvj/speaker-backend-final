require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./config/sequelize");
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sqlite = require("better-sqlite3");

// Startup Routes
require("./startup/routes")(app);

const SqliteStore = require("better-sqlite3-session-store")(session);
const db = new sqlite(process.env.SESSION_DATABASE);

app.use(
  session({
    store: new SqliteStore({
      client: db,
      expired: {
        clear: true,
        intervalMs: 900000, //ms = 15min
      },
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// syncing schema and starting server
sequelize
  .sync({
    alter: true,
  })
  .then(() => {
    return console.log("Successfully connected to database");
  })
  .then(() => {
    return app.listen(port, () => {
      console.log(`App listening at http://${host}:${port}`);
    });
  })
  .catch((err) => console.log(err));