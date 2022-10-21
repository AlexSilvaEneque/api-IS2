import { Router } from 'express'
import { allUsers, getUserById, updateUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/', allUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUser)

export default router