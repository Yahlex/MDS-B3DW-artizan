import ArtisansList from '../components/artisans/ArtisansList'
import useFetch from '../hooks/Api'


function Artisans() {

  const { response, error, isLoading } = useFetch('http://localhost:1337/api/artisans?populate=*');

  if (isLoading) return <h2>Loading...</h2>

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <>
      <ArtisansList artisans = {response} />
    </>
  )
}

export default Artisans
