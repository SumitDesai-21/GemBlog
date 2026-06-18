import express from 'express'
import 'dotenv/config' // to use environment variables
import cors from 'cors' // to connect backend with frontend
import connectDB from './config/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

// create express application
const app = express();
await connectDB(); // connet backend with mongoDB server

// built in middleware
app.use(cors());
app.use(express.json());

// routes
// home route
app.get('/', (req, res)=>{
    res.send("API is working");
})

app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);
// API endpoint using that user can upload new blog post & image will be uploaded on media kit.

const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log("Server running on port: "+ PORT);
})
export default app;

// connect backend with frontend so that we can create a fully functional blog application
// where admin can post a new blog post & user can read blog post on website
