import mongoose from 'mongoose'
import { mongoConnectUrlWithDb } from './config'

export async function useMongooseClient<T>(callback: () => Promise<T>): Promise<T> {
    const connection = await mongoose.connect(mongoConnectUrlWithDb)
    const result = await callback()
    await connection.disconnect()

    return result
}