import React from 'react'

import HyperLink from './../../atoms/link'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<HyperLink to="/">Home</HyperLink>
				</li>
				<li>
					<HyperLink to="/about">About</HyperLink>
				</li>
				<li>
					<HyperLink to="/place/add">Add Place</HyperLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
