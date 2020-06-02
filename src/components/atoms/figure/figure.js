import React from 'react'

const Figure = ({place}) => {
	return (
		<figure>
			<img src={place.foto_url} alt="error" />
		</figure>
	)
}

export default Figure
