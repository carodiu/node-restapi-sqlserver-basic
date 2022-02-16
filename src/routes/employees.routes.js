import  {Router} from 'express';

import {employees}  from '../controllers/employees.controller';

const router = Router();

router.get('/employees', employees.get);

router.post('/employees', employees.new);

router.get('/employees/count', employees.count);

router.get('/employees/:id', employees.getById);

router.delete('/employees/:id', employees.deleteById);

router.put('/employees/:id', employees.update);



module.exports = router;