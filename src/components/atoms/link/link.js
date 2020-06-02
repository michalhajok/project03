import React from 'react'

import { Link } from '@reach/router'

const HyperLink = (props) => {
	return (
		<Link to={props.to}>{props.children}</Link>
	)
}

export default HyperLink
