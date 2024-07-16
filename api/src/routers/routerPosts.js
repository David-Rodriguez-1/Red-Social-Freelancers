import { Router } from 'express'
import { Postsontroller } from '../controllers/posts-controller.js'


export const router = Router()

router.get('/', Postsontroller.getPosts)
router.post('/', Postsontroller.addPostUser)
// posts.put('/:id', UpdatePostHandler)


