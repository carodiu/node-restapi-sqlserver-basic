import express from 'express';
import config from './config';

import employeesRoutes from './routes/employees.routes';

const app = express();

//settings
app.set('port', config.port ); 

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(employeesRoutes);

export default app;