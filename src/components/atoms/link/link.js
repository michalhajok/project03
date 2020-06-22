import React from 'react'

import { Link } from '@reach/router'



const HyperLink = ({to, children}) => {
	return (
		<Link to={to}>{children}</Link>
	)
}

export default HyperLink
