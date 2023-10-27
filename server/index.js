import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/posts',postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://media:media123@cluster0.nhiq3ou.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT} and db connection successfull`)))
    .catch((error) => console.log(error.message));
