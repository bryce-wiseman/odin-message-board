import express from 'express'
import { getForm, getPostDetails, getPosts, newPost } from '../controllers/postController.js'
export const router = express.Router()

// get posts
router.get('/', getPosts)

// get one post
router.get('/post/:id', getPostDetails)

// get form
router.get('/new', getForm)

// post new message and redirect to updated index
router.post('/new', newPost)