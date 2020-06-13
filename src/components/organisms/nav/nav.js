import React from 'react'

import HyperLink from './../../atoms/link'

import './nav.scss'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<HyperLink to="/project03/">Home</HyperLink>
				</li>
				<li>
					<HyperLink to="/project03/about">About</HyperLink>
				</li>
				<li>
					<HyperLink to="/project03/place/add">Add Place</HyperLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
