import express from 'express'
import { deletejobs, getjobs, getjobsbyid, postjobs, updatejobs } from '../controllers/jobcontrollers.js';

const router=express.Router();

router.get('/',getjobs);
router.post('/',postjobs);
router.get('/:id',getjobsbyid);
router.put('/:id',updatejobs);
router.delete('/:id',deletejobs)

export default router;
