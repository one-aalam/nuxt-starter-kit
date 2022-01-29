
<div align="center">
<img src="./assets/nsk.png" height="80px" title="Nuxt Starter Kit" />
</div>
<br />

<div align="center"><strong>Nuxt.js 3 + Supabase starter for Typescript lovers</strong></div>


_Nuxt Starter Kit_ is an opinionated boilerplate based off of [Nuxt3](https://v3.nuxtjs.org/)(beta), with all the bells and whistles you would want ready, up and running when starting a Nuxt project to play and experiment with.
<br/>
<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/one-aalam/nuxt-starter-kit?style=flat-square&color=5e17eb&labelColor=000000">

  <a href="https://twitter.com/intent/follow?screen_name=aftabbuddy">
    <img src="https://img.shields.io/twitter/follow/aftabbuddy?style=flat-square&color=5e17eb&labelColor=000000" alt="Follow @aftabbuddy" />
  </a>
</div>
<br/>
<!--
<div align="center">
  <sub>Created by <a href="https://twitter.com/aftabbuddy">Aftab Alam</a> with the help of many <a href="https://github.com/one-aalam/nuxt-starter-kit/graphs/contributors">wonderful contributors</a>.</sub>
</div>
<br />
-->

Out of the box you get all the `essentials`
- __Typescript__ as the language choice
- __Tailwind CSS__ for quick styling without getting out of your HTML
- __Daisy UI__ for pre-made TailwindCSS component classes
- __Tailwind UI__ for robust headless logic you can use for components like Dialog/Modal, Dropdown, List, etc.
- __FontSource__ for effortless custom font integration
- __Icons through Unplugin__ for thousands of icons as components that are available on-demand and universally
- __ESLint__ for static code analysis (added but it's currently failing due to [#171](https://github.com/nuxt/eslint-config/issues/171)) and
- __Prettier__ for code formatting

with [Supabase](https://supabase.io/) support
- __Authentication System__ with Supabase GoTrue
- __User Profiles__ available on `/profile` as an example for Supabase PostgREST (CRUD API)
- __User Avatar__ which is Supbase Storage(AWS S3 backed effortless uploads) supported

and a bunch of pre-made, hand-rolled(easily replace-able) components, that you almost always end up installing/using for any non-trivial project
- __Button__ Button with DaisyUI style support for all the basic use cases
- __Alert/Toast__ to notify your users of the outcome of an event - `success, `error` or `default` is supported
- __Modal__(feat. Headless UI) as you always come back to `em
- __Loaders__ for reporting the progress of an API call + a page load
- __Avatar__ for user avatar's

and more...

__Note__: Refer the [basic](https://github.com/one-aalam/nuxt-starter-kit/tree/basic) branch for a bare minimum starter structure with all the `essentials`

🚧 Nuxt 3 is currently in beta and is not yet production ready.
🚧 Use `const { $supabase } = useNuxtApp()` to access Supabase client. Composables built around Supabase like `useSupabase`, although available are pretty much unusable due to initialization issues

## Quick Start

The best way to start with this template is to click "Use this template" above, create your own copy and work with it

### Development

To start the project locally, run:
```bash
yarn dev
```
which kickstarts the nuxt3 development and build server `nuxi`. Open `http://localhost:3000` with your browser to see the result.

Check `package.json` for the full list of commands available at your disposal.

## How to Setup Supabase for Nuxt Starter Kit?
If new to Supabase
- Create account at [Supabase](https://app.supabase.io/)
- Create a Organisation, and a project

Once done, or if you already have a Supabase project
- Copy the generated project's API authentication details from `https://app.supabase.io/project/<your-awesome-nuxt-project>/api/default?page=auth`
- Place the details in `.env` as `SUPABASE_URL` and `SUPABASE_KEY`
- Install NPM dependencies, by running `yarn`

Nuxt Start Kit supports user profiles and user avatars. To get the profile table and storage ready, execute the following queries at `https://app.supabase.io/project/<your-awesome-nuxt-project>/editor/sql`

```sql
-- Create a table for Public Profiles
create table profiles (
  id uuid references auth.users not null,
  username text unique,
  avatar_url text,
  website text,
  updated_at timestamp with time zone,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );
```

## Known Issues

- [ESLint](https://github.com/nuxt/eslint-config/issues/171) - Once the issue is resolved you can add
```json
        "*.+(js|ts|vue)": [
            "yarn run lint"
        ],
```
in `package.json` under the `lint-staged` section for linting on commits

## License
MIT
