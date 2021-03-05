import express from "express";
import postCtrl from "../controllers/postImg.js";
//import auth from '../middleware/auth.js';

const ctrl = new postCtrl();
//const authent = new auth();
const router = express.Router();

router.get('/', ctrl.getAllStuff);
router.post('/', ctrl.createThing);
router.get('/:id', ctrl.getOneThing);
router.put('/:id', ctrl.modifyThing);
router.delete('/:id', ctrl.deleteThing);

export default router;  