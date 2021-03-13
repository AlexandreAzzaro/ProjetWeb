import express from "express";
import postCtrl from "../controllers/postImg.js";
//import auth from '../middleware/auth.js';
import multer from '../middleware/multer-config';

const ctrl = new postCtrl();
//const authent = new auth();
const router = express.Router();

router.get('/', ctrl.getAllImg);
router.post('/', multer, ctrl.createImg);
router.get('/:id', ctrl.getOneImg);
router.put('/:id', ctrl.modifyImg);
router.delete('/:id', ctrl.deleteImg);

export default router;  