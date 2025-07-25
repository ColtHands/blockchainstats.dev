import mongoose from 'mongoose'
import { mongoConnectUrlWithDb } from './config'

let isConnected = false

export async function useMongooseClient<T>(callback: () => Promise<T>): Promise<T> {
    if(!isConnected) {
        await mongoose.connect(mongoConnectUrlWithDb)
        isConnected = true
        console.log('MongoDB connected')
    }

    try {
        const result = await callback()
        return result
    } catch (error) {
        console.error('Error during database operation:', error)
        throw error
    }
}