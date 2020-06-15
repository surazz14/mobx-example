import localConfig from './app.local'
import developmentConfig from './app.development'

export default () => {
	let configs = {}

	configs.local = {
		...localConfig
	}
	configs.development = {
		...developmentConfig
	}
	configs.test = {}
	configs.production = {}

	return configs[process.env.NODE_ENV || 'development']
}
