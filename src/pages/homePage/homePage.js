import React from 'react'

import Nav from './../../components/organisms/nav'
import PlaceList from './../../components/organisms/placeList'
import FilterBar from './../../components/organisms/filterBar'
import Footer from './../../components/molecules/footer'

const HomePage = ({ places, category, setCategory, filter, setFilter }) => {
	return (
		<div>
			<Nav />
			<FilterBar filter={filter} setFilter={setFilter} />
			<PlaceList places={places} filter={filter} category={category} />
			<Footer />
		</div>
	)
}

export default HomePage
