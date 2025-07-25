import { RepositoryUpdate } from '~/server/db/models'
import { useMongooseClient } from '~/server/db/useMongooseClient'
import { timeFrameValues } from './repositories/index.get'

type QueryParams = {
    timeFrame?: typeof timeFrameValues[number],
    owner: string,
    repository: string
}

export default defineEventHandler(async (event) => {
    const {
        owner,
        repository,
        timeFrame
    } = getQuery<QueryParams>(event)

    if(!owner || !repository) {
        throw createError({
            statusCode: 400,
            statusMessage: 'No owner/repository provided'
        })
    }

    const or = `${owner}/${repository}`

    const updates = await RepositoryUpdate
        .find({ or })
        .sort({ createdAt: 1 })
        .setOptions({ sanitizeFilter: true })

    return await useMongooseClient(async () => {
        if(!updates || updates.length === 0) return []

        if(timeFrame === 'month') {
            let hashMonth = Infinity
            let baseUpdate = updates[0]

            const updatesByMonth = updates.filter(upd => {
                const currentMonth = new Date(upd.createdAt!).getMonth()
                let shouldKeep = false

                if(hashMonth !== currentMonth) {
                    shouldKeep = true
                } else {
                    shouldKeep = false
                }

                hashMonth = currentMonth

                return shouldKeep
            }).map(upd => {
                const update = {
                    stars: upd.s - baseUpdate.s,
                    issues: upd.oi - baseUpdate.oi,
                    subs: upd.subs - baseUpdate.subs,
                    forks: upd.f - baseUpdate.f
                }

                baseUpdate = upd

                return {
                    rawUpdate: upd,
                    ...update
                }
            })

            return updatesByMonth
        } else {
            return updates
        }
    })
})

// import { RepositoryUpdate } from './../../../db/models'
// import type { RequestWithQuery } from './../../../types'

// type QueryParams = {
//     timeFrame?: typeof timeFrameValues[number]
// }

// /**
//  * @public
//  *
//  * This Request returns repository updates timeline for a single repository
//  */
// export async function getRepositoryUpdates(req: RequestWithQuery<QueryParams, any>, res: Response) {
//     const { owner, repository } = req.params
//     if(!owner || !repository) res.send('No owner/repository provided')

//     const or = `${owner}/${repository}`

//     const updates = await RepositoryUpdate
//         .find({ or })
//         .sort({ createdAt: 1 })
//         .setOptions({ sanitizeFilter: true })

//     if(!updates || updates.length === 0) return res.send([])

//     if(req.query.timeFrame === 'month') {
//         let hashMonth = Infinity
//         let baseUpdate = updates[0]

//         const updatesByMonth = updates.filter(upd => {
//             const currentMonth = new Date(upd.createdAt!).getMonth()
//             let shouldKeep = false

//             if(hashMonth !== currentMonth) {
//                 shouldKeep = true
//             } else {
//                 shouldKeep = false
//             }

//             hashMonth = currentMonth

//             return shouldKeep
//         }).map(upd => {
//             let update = {
//                 stars: upd.s - baseUpdate.s,
//                 issues: upd.oi - baseUpdate.oi,
//                 subs: upd.subs - baseUpdate.subs,
//                 forks: upd.f - baseUpdate.f,
//             }

//             baseUpdate = upd

//             return {
//                 rawUpdate: upd,
//                 ...update
//             }
//         })

//         return res.send(updatesByMonth)
//     } else {
//         return res.send(updates)
//     }
// }