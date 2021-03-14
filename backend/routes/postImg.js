import express from "express";
import postCtrl from "../controllers/postImg.js";
//import auth from '../middleware/auth.js';
import multer from '../middleware/upload.js';

const ctrl = new postCtrl();
//const authent = new auth();
const router = express.Router();

router.get('/getAllImg', ctrl.getAllImg);
router.get('/getAllImgByUser/:username', ctrl.getAllImgByUser);
router.get('/getAllImgByTag/:tags', ctrl.getAllImgByTag);
router.post('/createImg', multer, ctrl.createImg);
router.get('/getOneImg/:id', ctrl.getOneImg);
router.put('/modifyImg/:id', ctrl.modifyImg);
router.delete('/deleteImg/:id', ctrl.deleteImg);

export default router;  