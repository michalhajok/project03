import React from 'react'

import { useParams } from '@reach/router'

import Nav from './../../components/organisms/nav'
import Figure from './../../components/atoms/figure'
import HyperLink from './../../components/atoms/link'
import Footer from './../../components/molecules/footer'

const PlacePage = ({places}) => {

	const params = useParams()

	return (
		<div>
			<Nav />
			<Figure place={places[params.id]} />
			{params.id}
			<HyperLink to={"/place/"+params.id+"/update"}>Zaktualizuj</HyperLink>
			<Footer />
		</div>
	)
}

export default PlacePage
