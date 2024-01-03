const express = require('express');
const router = express.Router();
const UserController = require("../controller/userController");

router.get("/getUsers", UserController.getUsers);
router.post("/createUser", UserController.createUser);
router.get("/getUser/:id", UserController.getUser);
router.delete("/deleteUser/:id", UserController.deleteUser);
router.patch("/updateUser/:id", UserController.updateUser);

module.exports = router;