import React from 'react'

import Place from './../../molecules/place'

import './placeList.scss'

const PlaceList = ({ places, filter }) => {
	return (
		<div className="placeList">
			<div></div>
			<div className="list">
				{
				filter.category === "all"?
				places.map(place=>(
					<Place key={"place "+ place.id} place={place} />
				))
				:
				places.filter(place => place.category === filter.category ).map(
					filteredPlace =>(
						<Place key={"place "+ filteredPlace.id} place={filteredPlace}/>
					)
				)}
			</div>
			<div></div>
		</div>
	)
}

export default PlaceList
