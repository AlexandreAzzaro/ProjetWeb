import express from "express";
import userCtrl from '../controllers/User.js'

const ctrl = new userCtrl();
const router = express.Router(); 

router.post('/signup', ctrl.signup);
router.post('/login', ctrl.login);

export default router;