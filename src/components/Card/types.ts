export type MissionProps = {
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    }
    links: {
        article_link: string
        video_link: string
        flickr_images: string[]
    }
    rocket: {
        rocket_name: string
    }
    launch_success: boolean
}