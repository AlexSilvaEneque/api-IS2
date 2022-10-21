import bcryptjs from 'bcryptjs'

export const hashPassword = (password) => {
    return bcryptjs.hashSync(password, 10)
}

export const comparePassword = async (password, hash) => {
    return await bcryptjs.compare(password, hash)
}