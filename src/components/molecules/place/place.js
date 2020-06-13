import React from 'react'

import HyperLink from './../../atoms/link'
import Figure from './../../atoms/figure'
import Paragraph from './../../atoms/paragraph'

import './place.scss'

const Place = ({place}) => {
	return (
		<div className="place">
			<Figure place={place} />
			<div>
				<Paragraph>{place.title}</Paragraph>
				<HyperLink to={"/project03/place/"+place.id}>zobacz więcej</HyperLink>
			</div>
		</div>
	)
}

export default Place
