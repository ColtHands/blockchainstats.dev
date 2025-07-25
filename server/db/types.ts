export type Nullable<T> = { [P in keyof T]?: T[P] | null };

type DescriptionLocale = 'en' | string

type Model<T> = T & {
    _id: string,
}

/**
 * This model is used when fetching a single coin from CoinGecko API.
 * TODO: This model should include extra fields from other APIs (e.g. CoinMarketCap, CryptoCompare, etc.)
 */
export type CoinGeckoCoin = {
    id: string
    symbol: string
    name: string
    platforms: Record<string, string>,
    hashing_algorithm: string,
    categories: string[],
    description: Record<DescriptionLocale, string>,
    links: {
        homepage: string[],
        blockchain_site: string[],
        official_forum_url: string[],
        chat_url: string[],
        announcement_url: string[],
        twitter_screen_name: string,
        facebook_username: string,
        bitcointalk_thread_identifier: string,
        telegram_channel_identifier: string,
        subreddit_url: string,
        repos_url: {
            github: string[],
            bitbucket: string[]
        }
    },
    image: {
        thumb: string,
        small: string,
        large: string
    },
    country_origin: string,
    watchlist_portfolio_users: number
    market_cap_rank: number,
    coingecko_rank: number,
    coingecko_score: number,
    developer_score: number,
    community_score: number,
    liquidity_score: number,
    public_interest_score: number,
    community_data: {
        facebook_likes: number,
        twitter_followers: number,
        reddit_average_posts_48h: number,
        reddit_average_comments_48h: number,
        reddit_subscribers: number,
        reddit_accounts_active_48h: number,
        telegram_channel_user_count: number
    },
    public_interest_stats: {
        alexa_rank: number,
        bing_matches: number
    }
}
export type CoinGeckoCoinSimple = Pick<CoinGeckoCoin, 'id' | 'symbol' | 'name'>
export type CoinModelSimple = Model<Omit<CoinGeckoCoinSimple, 'id'>>
export type CoinModel = Model<Partial<Omit<CoinGeckoCoin, 'id'>>>

export type GitHubOwnerRepository = `${string}/${string}`

export type Repository = {
    coinId: string,
    owner?: string,
    repository?: string,
    stars?: number,
    forks?: number,
    subscribers?: number,
    open_issues?: number,
    growth?: {
        week?: {
            stars?: number | null,
            forks?: number | null,
            subscribers?: number | null,
            open_issues?: number | null,
        },
        month?: {
            stars?: number | null,
            forks?: number | null,
            subscribers?: number | null,
            open_issues?: number | null,
        },
        year?: {
            stars?: number | null,
            forks?: number | null,
            subscribers?: number | null,
            open_issues?: number | null,
        },
    },
    avatar_url?: string,
    html_url?: string,
    topics?: string[],
    language?: string
    fork?: boolean
    description?: string
}

export type RepositoryModel = Model<Repository>

export type RepositoryUpdate = {
    /** coin id */
    cId: string,
    /**
     * `or` is owner and repository
     * @example "ethereum/go-ethereum"
     */
    or: `${string}/${string}`,
    /** stars */
    s: number,
    /** forks */
    f: number,
    /** subscribers */
    subs: number,
    /** open issues */
    oi: number,
    /** mongoose generated field */
    createdAt?: Date
}

export type RepositoryUpdateModel = RepositoryUpdate

export type Topic = {
    display_name: string,
    short_description: string,
    description: string,
    created_by: string,
    released: string,
    created_at: Date,
    updated_at: Date,
    featured: boolean,
    curated: boolean,
    score: number,
    repositories: string[]
}

export type TopicModel = Model<Topic>
