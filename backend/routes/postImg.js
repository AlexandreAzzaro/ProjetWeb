import express from "express";
import postCtrl from "../controllers/postImg.js";
//import auth from '../middleware/auth.js';
//import storage from '../middleware/upload.js';
//import multer from 'multer'

const ctrl = new postCtrl();
//const upload = multer({storage: storage});
//const authent = new auth();
const router = express.Router();

router.get('/getAllImg', ctrl.getAllImg);
router.get('/getAllImgByUser/:username', ctrl.getAllImgByUser);
router.get('/getAllImgByTag/:tags', ctrl.getAllImgByTag);
router.post('/createImg', ctrl.createImg);
router.get('/getOneImg/:id', ctrl.getOneImg);
router.put('/modifyImg/:id', ctrl.modifyImg);
router.delete('/deleteImg/:id', ctrl.deleteImg);

export default router;  