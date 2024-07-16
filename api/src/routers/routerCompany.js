import { Router } from 'express'
import { ControllerCompany } from '../controllers/company-Controller.js'


 export const router = Router()

router.post('/', ControllerCompany.createCompany)
router.get('/', ControllerCompany.getCompany)
router.post('/follow', ControllerCompany.followCompany)
router.put('/follow', ControllerCompany.unfollowCompany)
// router.put('/', putrouterHandler)

