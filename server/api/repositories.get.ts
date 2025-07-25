import { Coin, Repository } from '../db/models.ts'
import { useMongooseClient } from '../db/useMongooseClient.ts'

export const timeFrameValues = ['day', 'week', 'month', 'year'] as const
const sortByValues = ['stars', 'forks', 'subscribers', 'open_issues', 'issues'] as const

type QueryParams = {
    limit: string
    offset: string
    includeCoinData?: 'true'
    timeFrame: typeof timeFrameValues[number]
    sortBy: typeof sortByValues[number]
    topics: string | string[]
}

export default defineEventHandler(async (event) => {
    const {
        timeFrame = 'week',
        sortBy = 'stars',
        limit = '25',
        offset = '0',
        includeCoinData,
        topics
    } = getQuery<QueryParams>(event)
    const limitParsed = parseInt(limit)
    const offsetParsed = parseInt(offset)
    const sortByParsed = sortBy === 'issues' ? 'open_issues' : sortBy
    const topicsParsed = (Array.isArray(topics) ? topics : [topics])

    if(!timeFrameValues.includes(timeFrame)) {
        throw createError({ statusCode: 400, message: 'timeFrame is incorrect' })
    }

    if(!sortByValues.includes(sortByParsed)) {
        throw createError({ statusCode: 400, message: 'sortBy is incorrect' })
    }

    return await useMongooseClient(async () => {
        const query = Repository
            .find({
                owner: { $ne: null },
                repository: { $nin: [null, ''] }
            })
            .sort({ [`growth.${timeFrame}.${sortByParsed}`]: -1 })
            .limit(limitParsed)
            .skip(offsetParsed)
            .maxTimeMS(60000)
            .setOptions({
                sanitizeAllArrays: true
            })

        if(includeCoinData === 'true') {
            query.populate({
                path: 'coinId',
                model: Coin
            })
        }

        if(topics && topicsParsed) {
            query.where('topics').all(topicsParsed)
        }

        const [repositories, count] = await Promise.all([
            query.exec(),
            Repository.count(query.getFilter())
        ])

        return {
            repositories,
            count
        }
    })
})
