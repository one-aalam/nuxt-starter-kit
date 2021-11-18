# Nuxt Starter Kit
_Nuxt Starter Kit_ is an opinionated boilerplate based off of [Nuxt3](https://v3.nuxtjs.org/)(beta), with all the bells and whistles you would want ready, up and running when starting a Nuxt project to play and experiment with. Out of the box you get all the `essentials`
- __Typescript__ as the language choice
- __Tailwind CSS__ for quick styling without getting out of your HTML
- __Daisy UI__ for pre-made TailwindCSS component classes
- __Tailwind UI__ for robust headless logic you can use for components like Dialog/Modal, Dropdown, List, etc.
- __FontSource__ for effortless custom font integration
- __Icons through Unplugin__ for thousands of icons as components that are available on-demand and universally
- __ESLint__(added but it's currently failing due to [#171](https://github.com/nuxt/eslint-config/issues/171)) and
- __Prettier__ for static code analysis and code formatting

with [Supabase](https://supabase.io/) support landing soon!

and a bunch of pre-made, hand-rolled(easily replace-able) components, that you almost always end up installing/using for any non-trivial project
- __Button__ Button with DaisyUI style support for all the basic use cases
- __Alert/Toast__ to notify your users of the outcome of an event - `success, `error` or `default` is supported
- __Modal__(feat. Headless UI) as you always come back to `em
- __Loaders__ for reporting the progress of an API call + a page load
- __Avatar__ for user avatar's

and more...

## Known Issues

- [ESLint](https://github.com/nuxt/eslint-config/issues/171) - Once the issue is resolved you can add
```json
        "*.+(js|ts|vue)": [
            "yarn run lint"
        ],
```
in `package.json` under the `lint-staged` section for linting on commits
