import { Topic } from '~/server/db/models'
import { useMongooseClient } from '~/server/db/useMongooseClient'

export default defineEventHandler(async () => {
    return await useMongooseClient(() =>
        Topic.countDocuments()
    )
})