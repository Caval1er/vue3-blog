import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import PurgeIcons from 'vite-plugin-purge-icons'
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: PluginOption[] = [vue()]
  vitePlugins.push(
    Components({
      dts: true,
      resolvers: [AntDesignVueResolver()],
    })
  )
  vitePlugins.push(PurgeIcons())
  return vitePlugins
}
