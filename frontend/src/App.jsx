import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArtisansList from './components/artisans/ArtisansList'
import ArtisansListItem from './components/artisans/ArtisansListtem'


function App() {
  // on prépare l'état local (la variable) qui va stocker les composant
  const [artisans, setArtisans] = useState([])

  useEffect(() => { 
    // on récupère les données depuis l'API
    const getData = async () => {
      const response = await fetch('http://localhost:1337/api/artisans?populate=*')
      const responseData = await response.json()
      setArtisans(responseData.data)

    }
    getData()

  }, [])
  

  return (
    <>
      <ArtisansList artisans = {artisans} />
    </>
  )
}

export default App
