import { pool } from '../config/db.js'
import { hashPassword } from '../utils/bcrypt.js'
const table = 'users'

export const allUsers = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM ${table}`)

        if (result.length <= 0) {
            return res.status(404).json({ msg: 'Lista vacía', success: false })
        }

        res.status(200).json({ data: result, success: true })
        
    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params
        const [result] = await pool.query(`SELECT * FROM ${table} INNER JOIN roles ON roles.id = ${table}.idrol WHERE ${table}.id = ?`, [id])

        if (result.length <= 0) {
            return res.status(404).json({ msg: 'Usuario no encontrado', success: false })
        }

        res.status(200).json({ data: result, success: true })
        
    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const {nombre, email, password, idrol} = req.body
        const hash = hashPassword(password)
        const [result] = await pool.query(`UPDATE ${table} SET nombre = ?, email = ?, password = ?, idrol = ? WHERE id = ?`, [nombre, email, hash, idrol, id])

        if (result.affectedRows > 0) {
            return res.status(201).json({ msg: 'Usuario modificado', success: true })
        }

        res.status(400).json({ msg: 'Error al actualizar', success: false })
        
    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}