import { MissionProps } from "./types"

import defaultMissionImage from "/images/default-mission-image.jpg"

type CardProps = {
    props: MissionProps
}

const Card = ({props}: CardProps) => {
    return (
        <article>
            <header>
                <div>
                    {
                        props.links.flickr_images.length === 0 ? (
                            <img src={defaultMissionImage} alt={props.mission_name} width={320} height={180}/>
                        ) : (
                            <img src={props.links.flickr_images[0]} alt={props.mission_name} width={320} height={180} />
                        )
                    }


                    <h3>{props.mission_name}</h3>
                    <span>{props.launch_date_local}</span>
                </div>
            </header>
            {props.mission_name}
        </article>
    )
}

export default Card