export type AnimeProps = {
    siteUrl: string
    title: {
        english: string
        native: string
    }
    description: string
    status: string
    episodes: string
    chapters: string
    coverImage: {
        extraLarge: string
    }
    bannerImage: string
    averageScore: string
    isFavourite: string
}