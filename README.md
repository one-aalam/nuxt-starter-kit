# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Known Issues

- [ESLint](https://github.com/nuxt/eslint-config/issues/171) - Once the issue is resolved you can add

```json
        "*.+(js|ts|vue)": [
            "yarn run lint"
        ],
```

in `package.json` under the `lint-staged` section for linting on commits

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
