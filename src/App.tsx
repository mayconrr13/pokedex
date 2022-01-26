import { useEffect, useState } from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";
import Card from './components/Card'
import { MissionProps } from './components/Card/types';

function App() {
  const [missions, setMissions] = useState<MissionProps[]>([] as MissionProps[])

  const getTypeQuery = gql`
    query getMissionsQuery {
      launchesPast(limit: 10) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
          flickr_images
        }
        rocket {
          rocket_name
        }
        launch_success
      }
    }    
  `

  const { data, loading, error, fetchMore } = useQuery(getTypeQuery, {
    variables: {
      offset: 0,
      limit: 10
    }
  })

  useEffect(() => {
    if (data) {
      setMissions(data.launchesPast)
    }
  }, [data])
  
  return (
    <>
      {
        data && !error && !loading &&
          missions.map((item: any) => {
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
