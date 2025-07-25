export const MONGO_USERNAME = process.env.MONGO_USERNAME
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD
export const MONGO_HOST = process.env.MONGO_HOST
export const mongoDbName = 'bestOfBlockchain'
export const mongoConnectUrlWithDb = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${mongoDbName}`

/** List of all possible collections */
export enum Collections {
    Coins = 'Coins',
    Repositories = 'Repositories',
    RepositoryUpdates = 'RepositoryUpdates',
    Topics = 'Topics',
}

/**
 * List of all possible entities in the database.
 * Each entity is a type of data.
 * Different entities can be stored in a same collection.
 */
export enum Entities {
    Coin = 'Coin',
    Repository = 'Repository',
    RepositoryUpdate = 'RepositoryUpdate',
    Topic = 'Topic'
}