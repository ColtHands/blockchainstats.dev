import { sanitizeString } from '~/server/utils'
import { Repository } from '~/server/db/models'
import { useMongooseClient } from '~/server/db/useMongooseClient'

type QueryParams = {
    query?: string
    limit?: string
}

export default defineEventHandler(async (event) => {
    const {
        query = '',
        limit = '5'
    } = getQuery<QueryParams>(event)

    const limitParsed = parseInt(limit)
    const findRegexQuery = { $regex: sanitizeString(query), $options: 'i' }

    return await useMongooseClient(async () => {
        const result = await Repository.find({
            $or: [
                { owner: findRegexQuery },
                { repository: findRegexQuery }
            ]
        })
            .where('owner').ne(null)
            .where('repository').nin([null, ''])
            .sort({ stars: -1 })
            .limit(limitParsed)

        return result
    })
})