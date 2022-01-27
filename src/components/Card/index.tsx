import { AnimeProps } from "./types"

type CardProps = {
    props: AnimeProps
}

const Card = ({props}: CardProps) => {
    return (
        <article>
            <header>
                <div>
                    <img src={props.bannerImage || props.coverImage.extraLarge} alt={props.title.english} width={320} height={180} />

                    <h3>{props.title.english}</h3>
                    <span>{props.averageScore}</span>
                </div>
            </header>
            
            <div>
                <span>{props.title.native}</span>  
                <p>
                    <div style={{display: "contents"}} dangerouslySetInnerHTML={{__html: props.description}} />
                </p>
                <p>Number of episodes: <strong>{props.episodes}</strong></p>
                <p>Status: {props.status}</p>
                
            </div>

            <a href={props.siteUrl} target="_blank">
                {props.title.english}
            </a>
        </article>
    )
}

export default Card