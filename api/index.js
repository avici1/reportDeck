import express from 'express';
import bodyParser from 'body-parser';
import mustache_ from 'mustache-express';
import hbs from 'handlebars';
import classRoutes from './server/routes/classRouter';
import stdp from './server/routes/studentParameterRouter';
import term from './server/routes/termRoutes';
import std from './server/routes/studentRoutes';
import section from './server/routes/sectionRoutes';
import courseTeacher from './server/routes/courseTeacherRoutes';
import staffRoutes from './server/routes/staffRoutes';
import decision from './server/routes/decisionRoutes';
import userRoute from './server/routes/userRoutes';
import view from './server/routes/viewRoute';
import cors from 'cors';
import { join } from 'path';
const app = express();
app.use(express.static(__dirname+'/server/public'));
// app.engine('hbs',mustache_());
// app.set('view engine','html');
app.set('views',__dirname+'/server/views');
app.use('/report',view);
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
app.set('views',join(__dirname,'/server/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8003;

app.get('*', (req, res) => res.status(200).send({
    message: "Entrance"
}));

app.listen(port, () => {
    console.log("Entrance done, We are running at port " + port );
});


export default app;