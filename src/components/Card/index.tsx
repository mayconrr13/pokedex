import { PokemonCardProps } from "./types"

type CardProps = {
    props: PokemonCardProps
}

const Card = ({props}: CardProps) => {
    return (
        <article>
            {/* <img src="" alt="" /> */}

            <span>{props.id}</span><br />
            <strong>{props.name}</strong>

            <ul>
                {props.pokemon_v2_pokemontypes.map((type) => {
                    return (
                        <li key={type.pokemon_v2_type.id} >{type.pokemon_v2_type.name}</li>
                    )
                })}
            </ul>
        </article>
    )
}

export default Card