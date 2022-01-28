import { useEffect, useState } from 'react';
import Card from './components/Card'
import { PokemonCardProps } from './components/Card/types';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)
  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([] as PokemonCardProps[])

  useEffect(() => {
    fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          query: `
            query getPokemonsList($limit: Int, $offset: Int) {
              pokemon_v2_pokemon(limit: $limit, offset: $offset) {
                id
                name                
                pokemon_v2_pokemontypes {
                  pokemon_v2_type {
                    name
                    id
                  }
                }
              }
            }
          `,
          variables: {
            limit: null,
            offset: null
          }
        }
      )
    })
      .then((res) => res.json())
      .then((results) => {
        setPokemons(results.data.pokemon_v2_pokemon)
        setHasError(false)
      })
      .catch((err) => {
        console.log("Error: :(")
        setHasError(true)
      }) 
      .finally(() => {
        setIsLoading(false)
      }
    )
  }, [])

  if (isLoading) {
    return (
      <p>Loading ...</p>
    )
  }
    
  return (
    <>
      {
        pokemons.length > 0 || !hasError ? (
          <>    
            {
              pokemons.map((pokemon) => {
                return (
                  <Card 
                    props={
                      pokemon
                    }
                  />
                )
              })
            }
          </>
        ) : (
          <p>Error :(</p>
        )
      }
    </>
  )
}

export default App


// query ExampleQuery($limit: Int, $offset: Int) {
//   pokemon_v2_pokemon(limit: $limit, offset: $offset) {
//     id
//     name
//     weight
//     height
//     pokemon_v2_pokemonabilities {
//       pokemon_v2_ability {
//         name
//       }
//     }
//     pokemon_v2_pokemontypes {
//       pokemon_v2_type {
//         name
//         id
//       }
//     }
//     pokemon_v2_pokemonstats {
//       base_stat
//       pokemon_v2_stat {
//         name
//       }
//     }
//   }
// }