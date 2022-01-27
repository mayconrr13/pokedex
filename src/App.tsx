import { useEffect, useState } from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";
import Card from './components/Card'
import { AnimeProps } from './components/Card/types';

function App() {
  const [animes, setAnimes] = useState<AnimeProps[]>([] as AnimeProps[])

  const getTypeQuery = gql`
    query getAnimesList ($perPage: Int)  {
      Page(perPage: $perPage) {
        media {
          siteUrl
          title {
            english
            native
          }
          description
          status
          episodes
          chapters
          coverImage {
            extraLarge
          }
          bannerImage
          averageScore
          isFavourite
        }
      }
    }   
  `

  const { data, loading, error, fetchMore } = useQuery(getTypeQuery, {
    variables: {
      perPage: 100
    }
  })

  useEffect(() => {
    if (data) {
      setAnimes(data.Page.media)
    }
  }, [data])

  console.log(data)
  
  return (
    <>
      {
        data && !error && !loading &&
          animes.map((item: any) => {
            return (
              <Card props={item}/>
            )
          })
      }

      {loading && <p>Loading ...</p>}
      {error && <p>Error :(</p>}
    </>
  )
}

export default App
