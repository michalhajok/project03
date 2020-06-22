import React from 'react'

import HyperLink from './../../atoms/link'
import Figure from './../../atoms/figure'
import Paragraph from './../../atoms/paragraph'

import './place.scss'

const Place = ({place}) => {

	const { foto_url, title, id} = place

	return (
		<div className="place">
			<Figure fotoUrl={foto_url} />
			<div>
				<Paragraph>{title}</Paragraph>
				<HyperLink to={`/project03/place/${id}`}>zobacz więcej</HyperLink>
			</div>
		</div>
	)
}

export default Place
