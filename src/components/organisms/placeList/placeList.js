import React from 'react'

import Place from './../../molecules/place'

const PlaceList = ({ places, category }) => {
	return (
		<div>
			{
			category === "all"?
			places.map(place=>(
				<Place key={"place "+ place.id} place={place} />
			))
			:
			places.filter(place => place.category === category ).map(
				filteredPlace =>(
					<Place key={"place "+ filteredPlace.id} place={filteredPlace}/>
				)
			)}
		</div>
	)
}

export default PlaceList
