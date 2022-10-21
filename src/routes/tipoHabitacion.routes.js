import { Router } from 'express'
import { allTypes, createType, getTypeByDescription } from '../controllers/tipoHabitaciones.controller.js'

const router = Router()

router.get('/', allTypes)
router.get('/type', getTypeByDescription)
router.post('/new', createType)

export default router