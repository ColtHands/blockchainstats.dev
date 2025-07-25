import { model } from 'mongoose'
import { Collections, Entities } from './config'
import type {
    CoinModel,
    RepositoryModel,
    RepositoryUpdate as RepositoryUpdateType
} from './types.ts'
import schemas from './schemas'

export const Coin = model<CoinModel>(Entities.Coin, schemas.Coin, Collections.Coins)
export const Repository = model<RepositoryModel>(Entities.Repository, schemas.Repository, Collections.Repositories)
export const RepositoryUpdate = model<RepositoryUpdateType>(Entities.RepositoryUpdate, schemas.RepositoryUpdate, Collections.RepositoryUpdates)
export const Topic = model<RepositoryUpdateType>(Entities.Topic, schemas.Topic, Collections.Topics)
