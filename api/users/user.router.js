const { createUser,getUser,getUserById,deleteUser,login } = require("./user.controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");


router.post("/create",checkToken,createUser);
router.get("/getUser",checkToken,getUser);
router.get("/getUserById/:id",checkToken,getUserById);
router.delete("/deleteUser",checkToken,deleteUser);
router.post('/login',login);


module.exports = router;