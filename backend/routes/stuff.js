import express from "express";
import stuffCtrl from '../controllers/stuff.js'
import auth from '../middleware/auth.js';

const ctrl = new stuffCtrl();
const authent = new auth();
const router = express.Router();

router.get('/', ctrl.getAllStuff);
router.post('/', ctrl.createThing);
router.get('/:id', ctrl.getOneThing);
router.put('/:id', ctrl.modifyThing);
router.delete('/:id', ctrl.deleteThing);

export default router;  