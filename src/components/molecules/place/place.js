import React from 'react'

import HyperLink from './../../atoms/link'
import Figure from './../../atoms/figure'
import Paragraph from './../../atoms/paragraph'

const Place = ({place}) => {
	return (
		<div>
			<Figure place={place} />
			<div>
				<Paragraph>{place.title}</Paragraph>
				<HyperLink to={"/place/"+place.id}>zobacz więcej</HyperLink>
			</div>
		</div>
	)
}

export default Place
