import React,{ useState, useEffect } from 'react';

import { Router } from '@reach/router'

import './App.scss';

import AboutPage from './pages/aboutPage'
import AddPage from './pages/addPage'
import HomePage from './pages/homePage'
import NotFoundPage from './pages/notFoundPage'
import PlacePage from './pages/placePage'
import UpdatePage from './pages/updatePage'

function App() {

  const [places, setPlaces] = useState([])
  const [category, setCategory] = useState('all')
  const [filter, setFilter] = useState({
    city:"",
    category:"all",
    name:""

  })
  
  useEffect(() => {
    fetch("/api/places")
    .then(response => response.json())
    .then(data=>{
      setPlaces(data.places)
    })
  }, [places.id])

  return (
      <Router className="App">
        <HomePage path="/project03/" places={places} filter={filter} setFilter={setFilter} category={category} setCategory={setCategory} />
        <AboutPage path="/project03/about" />
        <AddPage path="/project03/place/add" places={places} setPlaces={setPlaces} />
        <PlacePage path="/project03/place/:id" places={places} />
        <UpdatePage path="/project03/place/:id/update" places={places} setPlaces={setPlaces} />
        <NotFoundPage default />
      </Router>
  );
}

export default App;
