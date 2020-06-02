import React from 'react'

import Nav from './../../components/organisms/nav'
import PlaceList from './../../components/organisms/placeList'
import FilterBar from './../../components/organisms/filterBar'
import Footer from './../../components/molecules/footer'

const HomePage = ({ places, category, setCategory }) => {
	return (
		<div>
			<Nav />
			<FilterBar category={category} setCategory={setCategory} />
			<PlaceList places={places} category={category} />
			Home
			<Footer />
		</div>
	)
}

export default HomePage
