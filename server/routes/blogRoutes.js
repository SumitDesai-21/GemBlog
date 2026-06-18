import express from 'express'

import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import addBlog, { addComment, deleteBlogByID, generateContent, getAllBlogs, getBlogByID, getBlogComments, togglePublish } from '../controllers/blogController.js';

// create express router
const blogRouter = express.Router();
// API endpoints
blogRouter.post(
	"/add",
	auth,
	(req, res, next) => {
		upload.single('image')(req, res, (err) => {
			if (err) return res.status(400).json({ success: false, message: err.message });
			next();
		});
	},
	addBlog
);
blogRouter.get('/all', getAllBlogs); // get all blogs 
blogRouter.get('/:blogId', getBlogByID);    
blogRouter.post('/delete',auth, deleteBlogByID);    
blogRouter.post('/toggle-publish',auth, togglePublish);
// comment part
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComments);
blogRouter.post('/generate', auth, generateContent); // link this API with frontend
// add middleware
// to parse the image we'll use the multer package.
export default blogRouter; 
