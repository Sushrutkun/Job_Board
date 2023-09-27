import express from 'express'
import { deletejobs, getjobs, getjobsbyid, postjobs, updatejobs } from '../controllers/jobcontrollers.js';
import { getsignupdata, postsignup } from '../controllers/signupcontrollers.js';

const router = express.Router();

router.get('/', getjobs);
router.post('/', postjobs);
router.get('/:id', getjobsbyid);
router.put('/:id', updatejobs);
router.delete('/:id', deletejobs);

router.post('/signup', postsignup);
router.get('/signup', getsignupdata);

export default router;
