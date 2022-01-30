import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

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
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
