import { pool } from "../config/db.js"

const table = 'tipo_habitacion'

export const allTypes = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM ${table}`)

        if (result.length <= 0) {
            return res.status(200).json({ msg: 'Ningun tipo de habitacion registrada', success: false })
        }

        res.status(200).json({ data: result, success: true })

    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}

export const getTypeByDescription = async (req, res) => {
    try {
        const { descripcion } = req.body
        const [result] = await pool.query(`SELECT * FROM ${table} WHERE descripcion = ?`, [descripcion])

        if (result.length <= 0) {
            return res.status(200).json({ msg: 'Tipo no encontrado', success: false })
        }

        res.status(200).json({ data: result[0], success: true })

    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}

export const createType = async (req, res) => {
    try {
        const { descripcion, precio } = req.body
        const [result] = await pool.query(`INSERT INTO ${table}(descripcion, precio) VALUES(?,?)`, [descripcion, precio])

        if (result.affectedRows > 0) {
            return res.status(201).json({ msg: 'Tipo guardado', success: true })
        }

        res.status(400).json({ msg: 'Error al registrar', success: false })

    } catch (error) {
        return res.status(500).json({ msg: 'Error interno', success: false })
    }
}

export const updateType = async(req, res) => {

}