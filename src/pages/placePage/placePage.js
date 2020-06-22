import React from 'react'

import { useParams } from '@reach/router'

import Nav from './../../components/organisms/nav'
import Figure from './../../components/atoms/figure'
import HyperLink from './../../components/atoms/link'
import Footer from './../../components/molecules/footer'

import './placePage.scss'

const PlacePage = ({places}) => {

	const params = useParams()
	const { id } = params
	const { title, price, foto_url, city, address, description } = places[id]

	return (
		<div className="placePage">
			<Nav />
			<div className="content">
				<Figure fotoUrl={foto_url} />
				<div className="info">
					<div>
						<h2>{title}</h2>
						<p>{price}zł</p>
						<HyperLink to={`/project03/place/${id}/update`}>Zaktualizuj</HyperLink>
					</div>
					<div>
						<p>{city}</p>
						<p>{address}</p>
					</div>
					<div>
						<p>
							{description}
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default PlacePage
