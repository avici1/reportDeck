import express from 'express';
import bodyParser from 'body-parser';
import classRoutes from './server/routes/classRouter';
import stdp from './server/routes/studentParameterRouter';
import term from './server/routes/termRoutes';
import std from './server/routes/studentRoutes';
import section from './server/routes/sectionRoutes';
import courseTeacher from './server/routes/courseTeacherRoutes';
import staffRoutes from './server/routes/staffRoutes';
import reportRoute from './server/routes/reportRouter';
import decision from './server/routes/decisionRoutes';
import userRoute from './server/routes/userRoutes';
import cors from 'cors';

import path from 'path';
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', classRoutes);
app.use('/api/secure/signup',userRoute);
app.use('/api/staff',staffRoutes);
app.use('/api/stdp',stdp);
app.use('/api/term',term);
app.use('/api/std',std);
app.use('/api/decision',decision);
app.use('/api/section',section);
app.use('/api/ct',courseTeacher);
app.use('/api/report',reportRoute);
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,"views"));
app.set('views engine','hbs');
const port = process.env.PORT || 8003;

app.get('*', (req, res) => res.status(200).send({
    message: "Entrance"
}));

app.listen(port, () => {
    console.log("Entrance done, We are running at port " + port);
});


export default app;