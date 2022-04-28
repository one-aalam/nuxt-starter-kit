import { defineNuxtModule, addPlugin, addComponentsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: Boolean
}

const CONFIG_KEY = 'alert' as const

export default defineNuxtModule<ModuleOptions>({
  meta: {
      // Usually  npm package name of your module
    name: 'nuxt-starter-kit-alert',
    // The key in `nuxt.config` that holds your module options
    configKey: CONFIG_KEY,
    // Compatibility constraints
    compatibility: {
        // Semver version of supported nuxt versions
        nuxt: '^3.0.0'
    }
  },
  defaults: {
    addPlugin: true
  },
  async setup (options, nuxt) {
    if (options.addPlugin) {
        // Create resolver to resolve relative paths
        const { resolve } = createResolver(import.meta.url)
        await addComponentsDir({
            path: resolve('./runtime/components')
        })
        addPlugin(resolve('./runtime/plugin'))
    }
  }
})
