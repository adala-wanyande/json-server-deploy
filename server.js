const jsonServer = require("json-server");
const express = require('express')
const cors = require('cors')
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

const app = express()
app.use(express.json())
app.use(cors({
  origin: ["https://64a66fd73d9b154ec7ec4893--stately-profiterole-c7db15.netlify.app/"], // the link of my front-end app on Netlify
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://xxx.netlify.app/"); // the link of my front-end app on Netlify
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    res.setHeader('content-type', 'application/json');
    next();
  });

server.use(middlewares);
server.use(router);

server.listen(port);
