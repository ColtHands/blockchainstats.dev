import { Topic, Repository } from '~/server/db/models'
import { useMongooseClient } from '~/server/db/useMongooseClient'

type QueryParams = {
    limit: string,
    offset: string,
    repositoryLimit: string,
}

/**
 * @public
 * This method returns count of all Topics
 */
export default defineEventHandler(async (event) => {
    const {
        limit = '50',
        offset = '0',
        repositoryLimit = '5'
    } = getQuery<QueryParams>(event)

    const limitParsed = parseInt(limit)
    const offsetParsed = parseInt(offset)
    const repositoryLimitParsed = parseInt(repositoryLimit)

    return await useMongooseClient(async () => {
        const result = await Topic.find()
            .limit(limitParsed)
            .skip(offsetParsed)
            .populate({
                path: 'repositories',
                model: Repository,
                select: 'owner repository avatar_url',
                options: {
                    sort: {
                        stars: -1
                    },
                    limit: repositoryLimitParsed
                }
            })

        return result
    })
})
