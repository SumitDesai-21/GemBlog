import express from 'express'
import adminLogin, { adminRegister, deleteCommentById, getAllBlogsAdmin, getAllComments, ApproveCommentById, getDashBoard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();


// admin dashbaord endpoints.

adminRouter.post("/register", adminRegister);
adminRouter.post("/auth", adminLogin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth, getAllComments); // only accesible to admin
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, ApproveCommentById);
adminRouter.get("/dashboard", auth, getDashBoard);


export default adminRouter;
