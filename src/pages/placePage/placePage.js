import React from 'react'

import { useParams } from '@reach/router'

import Nav from './../../components/organisms/nav'
import Figure from './../../components/atoms/figure'
import HyperLink from './../../components/atoms/link'
import Footer from './../../components/molecules/footer'

import './placePage.scss'

const PlacePage = ({places}) => {

	const params = useParams()
	const id = params.id

	return (
		<div className="placePage">
			<Nav />
			<div className="content">
				<Figure place={places[id]} />
				<div className="info">
					<div>
						<h2>{places[id].title}</h2>
						<p>{places[id].price}zł</p>
						<HyperLink to={"/place/"+id+"/update"}>Zaktualizuj</HyperLink>
					</div>
					<div>
						<p>{places[id].city}</p>
						<p>{places[id].address}</p>
					</div>
					<div>
						<p>
							{places[id].description}
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default PlacePage
