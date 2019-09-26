const { Router } = require ("express");
const routes = Router();
const UserController = require("./controllers/UserContolllers");

routes.post("/userstore", UserController.store);
routes.get("/userlist/:email", UserController.list);

module.exports = routes;
