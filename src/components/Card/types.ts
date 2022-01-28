export type PokemonCardProps = {
  id: number
  name: string
  pokemon_v2_pokemontypes: PokemonTypeProps[]
}

export type PokemonProps = {
  id: number
  name: string
  weight: string
  height: string
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      name: string
    }
  }
  pokemon_v2_pokemontypes: PokemonTypeProps[]
  pokemon_v2_pokemonstats: {
    base_stat: string
    pokemon_v2_stat: {
      name: string
    }
  }
}

type PokemonTypeProps = {
  pokemon_v2_type: {
    name: string
    id: string
  }
}