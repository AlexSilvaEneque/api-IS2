import { Router } from 'express'
import { loginController, signUpController } from '../controllers/auth.controller.js'

const router = Router()

router.post('/login', loginController)
router.post('/signup', signUpController)

export default router