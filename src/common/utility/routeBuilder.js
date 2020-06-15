import React from 'react'
import { Route } from 'react-router-dom'

function RouteBuilder(route) {
	return (
		<Route
			path={route.path}
			{...route.options}
			render={props => {
				return <route.component {...props} routes={route.routes} />
			}}
		/>
	)
}

export default RouteBuilder
