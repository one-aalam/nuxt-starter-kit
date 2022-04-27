import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: Boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
      // Usually  npm package name of your module
    name: 'nuxt3-module-x',
    // The key in `nuxt.config` that holds your module options
    configKey: 'moduleX',
    // Compatibility constraints
    compatibility: {
        // Semver version of supported nuxt versions
        nuxt: '^3.0.0'
    }
  },
  defaults: {
    addPlugin: true
  },
  setup (options, nuxt) {
    if (options.addPlugin) {
        // Create resolver to resolve relative paths
        const { resolve } = createResolver(import.meta.url)
        addPlugin(resolve('./runtime/plugin'))
    }
  }
})
