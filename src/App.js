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
    price:0,
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
        <HomePage path="/" places={places} filter={filter} setFilter={setFilter} category={category} setCategory={setCategory} />
        <AboutPage path="/about" />
        <AddPage path="/place/add" places={places} setPlaces={setPlaces} />
        <PlacePage path="/place/:id" places={places} />
        <UpdatePage path="/place/:id/update" places={places} setPlaces={setPlaces} />
        <NotFoundPage default />
      </Router>
  );
}

export default App;
