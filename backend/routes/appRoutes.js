import express from 'express'
import { deletejobs, getjobs, getjobsbyid, postjobs, updatejobs } from '../controllers/jobcontrollers.js';
import { getlogindata, postsignup } from '../controllers/signcontrollers.js';

const router = express.Router();

router.get('/', getjobs);
router.post('/', postjobs);
router.get('/:id', getjobsbyid);
router.put('/:id', updatejobs);
router.delete('/:id', deletejobs);
router.post('/sign', postsignup);
router.get('/sign', getlogindata);


export default router;
