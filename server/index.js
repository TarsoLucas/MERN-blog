import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const  app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}));
app.use(cors());

//database is being populated when creating posts, but appears as empty objects.
//Solved, I can finally continue to part 2 :D
//FIXED: I solved this problem by doing the following as suggested:
//1) on the client folder, open command line and type: npm install --force react-file-base64
//2) on server's index.js - delete the body parser's lines and copy the following 2 lines:
//app.use(express.json({ limit: '30mb' }));
//app.use(express.urlencoded({ limit: '30mb' }));

const CONNECTION_URL = 'mongodb+srv://tarsolucas:123@tarsocluster.xv4i8mp.mongodb.net/?retryWrites=true&w=majority';
const PORT = process || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
.catch((error) => console.error(error.message));

//mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloud/atlas