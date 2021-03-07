import express from "express";
import userCtrl from '../controllers/User.js'

const ctrl = new userCtrl();
const router = express.Router(); 

router.post('/signup', ctrl.signup);
router.get('/login', ctrl.login);
router.get('/isUsernameExist', ctrl.isUsernameExist);
router.get('/isemailExist', ctrl.isemailExist);

export default router;