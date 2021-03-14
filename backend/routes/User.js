import express from "express";
import userCtrl from '../controllers/User.js'

const ctrl = new userCtrl();
const router = express.Router(); 

router.post('/signup', ctrl.signup);
router.post('/login', ctrl.login);
router.get('/isUsernameExist/:username', ctrl.isUsernameExist);
router.get('/isEmailExist/:email', ctrl.isEmailExist);
router.get('/getOneUsr/:username', ctrl.getOneUsr);
router.get('/getAllUsr', ctrl.getAllUsr);
router.get('/isAdmin/:username', ctrl.isAdmin);
router.put('/modifyUsr/:username', ctrl.modifyUsr)
router.delete('/deleteUsr/:username', ctrl.deleteUsr);

export default router;