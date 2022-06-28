import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { createVitePlugins } from './build/vite/plugin/index'
import { wrapperEnv } from './build/utils'

export default defineConfig(({ command, mode }) => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	const viteEnv = wrapperEnv(env)
	const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv
	const isBuild = command === 'build'
	return {
		base: VITE_PUBLIC_PATH,
		root,
		resolve: {
			alias: [
				{
					find: '@',
					replacement: resolve(__dirname, 'src')
				}
			]
		},
		server: {
			open: true,
			host: true,
			port: VITE_PORT
		},
		plugins: createVitePlugins(viteEnv, isBuild)
	}
})
