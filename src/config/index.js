import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || process.env.PORT_DEV
export const DB_HOST = process.env.DB_HOST || process.env.DB_HOST_DEV
export const DB_USER = process.env.DB_USER || process.env.DB_USER_DEV
export const DB_PASSWORD = process.env.DB_PASSWORD || process.env.DB_PASSWORD_DEV
export const DB_NAME = process.env.DB_NAME || process.env.DB_NAME_DEV
export const DB_PORT = process.env.DB_PORT || process.env.DB_PORT_DEV
