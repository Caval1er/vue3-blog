// 处理环境变量中值的类型

export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {}
	for (const envKey of Object.keys(envConf)) {
		let envVal = envConf[envKey]
		if (envVal === 'true') {
			envVal = true
		} else if (envVal === 'false') {
			envVal = false
		}

		if (envKey === 'VITE_PORT') {
			envVal = Number(envVal)
		}

		ret[envKey] = envVal
	}
	return ret
}
