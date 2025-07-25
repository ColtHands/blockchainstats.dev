/* eslint-disable camelcase */
import { Schema } from 'mongoose'
import { Collections } from './config'
import type { CoinModel, RepositoryModel, RepositoryUpdateModel, TopicModel } from './types.ts'

/** Full Coin Schema that should contain all of the data from crypto and github APIs. */
const Coin = new Schema<CoinModel>({
    _id: String,
    symbol: String,
    name: String,
    platforms: Schema.Types.Mixed,
    hashing_algorithm: String,
    categories: [String],
    description: Schema.Types.Mixed,
    links: {
        homepage: [String],
        blockchain_site: [String],
        official_forum_url: [String],
        chat_url: [String],
        announcement_url: [String],
        twitter_screen_name: String,
        facebook_username: String,
        bitcointalk_thread_identifier: String,
        telegram_channel_identifier: String,
        subreddit_url: String,
        repos_url: {
            github: [String],
            bitbucket: [String]
        }
    },
    image: {
        thumb: String,
        small: String,
        large: String
    },
    country_origin: String,
    watchlist_portfolio_users: Number,
    market_cap_rank: Number,
    coingecko_rank: Number,
    coingecko_score: Number,
    developer_score: Number,
    community_score: Number,
    liquidity_score: Number,
    public_interest_score: Number,
    community_data: {
        facebook_likes: Number,
        twitter_followers: Number,
        reddit_average_posts_48h: Number,
        reddit_average_comments_48h: Number,
        reddit_subscribers: Number,
        reddit_accounts_active_48h: Number,
        telegram_channel_user_count: Number
    },
    public_interest_stats: {
        alexa_rank: Number,
        bing_matches: Number
    }
}, { collection: Collections.Coins, timestamps: true })

/**
 * NOTE: _id is a full url of the repository
 * NOTE: It was evaluated if _id as full url is needed, and use of `{owner}/{repository}` is better, considering urls might miss
 *
 */
const Repository = new Schema<RepositoryModel>({
    // TODO: Evaluate if _id as full url is needed, maybe better it would be ow as in `{owner}/{repository}`
    _id: String,
    coinId: String,
    owner: String,
    repository: String,
    stars: Number,
    forks: Number,
    subscribers: Number,
    open_issues: Number,
    growth: {
        week: {
            stars: Number,
            forks: Number,
            subscribers: Number,
            open_issues: Number
        },
        month: {
            stars: Number,
            forks: Number,
            subscribers: Number,
            open_issues: Number
        },
        year: {
            stars: Number,
            forks: Number,
            subscribers: Number,
            open_issues: Number
        }
    },
    avatar_url: String,
    html_url: String,
    topics: [String],
    language: String,
    fork: Boolean,
    description: String
}, { collection: Collections.Repositories })

const RepositoryUpdate = new Schema<RepositoryUpdateModel>({
    cId: String,
    or: String,
    s: Number,
    f: Number,
    subs: Number,
    oi: Number
}, {
    timeseries: {
        timeField: 'createdAt',
        granularity: 'hours'
    },
    timestamps: {
        createdAt: true,
        updatedAt: false
    },
    autoCreate: true,
    collection: Collections.RepositoryUpdates
}).index({ createdAt: 1 })

const Topic = new Schema<TopicModel>({
    _id: String,
    display_name: String,
    short_description: String,
    description: String,
    created_by: String,
    released: String,
    created_at: Date,
    updated_at: Date,
    featured: Boolean,
    curated: Boolean,
    score: Number,
    repositories: [String]
})

export default {
    Coin,
    Topic,
    Repository,
    RepositoryUpdate
}