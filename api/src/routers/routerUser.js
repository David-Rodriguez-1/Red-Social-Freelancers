import { Router } from 'express'
import { UserController } from '../controllers/user-Controller.js'


export const router = Router()

router.get('/', UserController.GetUsers)
router.post('/', UserController.createUser)
router.post('/login', UserController.login)
router.post('/follow', UserController.followUser)
router.put('/follow', UserController.unfollowUser)
