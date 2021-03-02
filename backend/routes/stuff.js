import express from "express";
import stuffCtrl from '../controllers/stuff.js'

const ctrl = new stuffCtrl();
const router = express.Router();

router.get('/', ctrl.getAllStuff);
router.post('/', ctrl.createThing);
router.get('/:id', ctrl.getOneThing);
router.put('/:id', ctrl.modifyThing);
router.delete('/:id', ctrl.deleteThing);

export default router;