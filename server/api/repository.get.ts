import { Coin, Repository } from '../db/models.ts'
import { useMongooseClient } from '../db/useMongooseClient.ts'

type QueryParams = {
    owner: string
    repository: string
    includeCoinData: string
}

export default defineEventHandler(async (event) => {
    const { owner, repository, includeCoinData } = getQuery<QueryParams>(event)

    const query = Repository.findOne()
        .where('owner').equals(owner)
        .where('repository').equals(repository)
        .setOptions({ sanitizeFilter: true })

    if(includeCoinData === 'true') {
        query.populate({
            path: 'coinId',
            model: Coin
        })
    }

    return await useMongooseClient(() => {
        const result = query.exec()

        if(!result) {
            throw createError({ statusCode: 404, message: 'Repository not found' })
        }

        return result
    })
})
