import { pool } from '../config/db.js'
import { comparePassword, hashPassword } from '../utils/bcrypt.js'

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const [result] = await pool.query(`SELECT users.*,roles.descripcion FROM users INNER JOIN roles ON roles.id = users.idrol WHERE users.email = ?`, [email])

        if (result.length <= 0) {
            return res.status(404).json({ msg: 'Usuario no encontrado', success: false })
        }

        if (result.length && await comparePassword(password, result[0].password)) {
            return res.status(200).json({ data: result[0], success: true })
        }

        res.status(501).json({ msg: 'Credenciales incorrectas', success: false })
        
    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}

export const signUpController = async (req, res) => {
    try {
        const { nombre, email, password, idrol } = req.body
        const hash = hashPassword(password)
        const [result] = await pool.query(`INSERT INTO users(nombre, email, password, idrol) VALUES (?,?,?,?)`,
        [nombre, email, hash, idrol])

        if (result.affectedRows > 0) {
            return res.status(201).json({ msg: 'Registro guardado', success: true })
        }

        res.status(400).json({ msg: 'Error al registrar', success: false })

    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}