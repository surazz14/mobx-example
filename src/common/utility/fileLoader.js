// import React from 'react'
// import Loadable from 'react-loadable'
import Loadable from '@loadable/component'

// import Loading from '../components/progress/circular'

// const LoadingComponent = props => {
// 	if (props.isLoading) {
// 		// While our other component is loading...
// 		if (props.timedOut) {
// 			console.warn('Loader timed out!')
// 			// console.trace()
// 			// In case we've timed out loading our other component.
// 			return <div>&nbsp;</div>
// 			// return <div>Loader timed out!</div>;
// 		} else if (props.pastDelay) {
// 			// Display a loading screen after a set delay.
// 			return <Loading />
// 		} else {
// 			// Don't flash "Loading..." when we don't need to.
// 			return null
// 		}
// 	} else if (props.error) {
// 		console.error(props)
// 		// If we aren't loading, maybe
// 		return <div>Error! Component failed to load</div>
// 	} else {
// 		console.warn(props)
// 		// This case shouldn't happen... but we'll return null anyways.
// 		return null
// 	}
// }

// const loadFile = args => {
// 	return Loadable(
// 		Object.assign(
// 			{
// 				loading: LoadingComponent,
// 				delay: 200,
// 				timeout: 200
// 			},
// 			args
// 		)
// 	)
// }

const loadFile = args => {
	return Loadable(args)
}

export default loadFile
