# Astro with Tailwind

```sh
pnpm create astro@latest -- --template with-tailwindcss
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

## Participation form (Turso)

The `/participar` page and the home-page "Participá" section let people suggest
topics or offer to give a talk. Submissions are stored in a [Turso](https://turso.tech)
(libSQL) database. The `submissions` table is created automatically on first
request — no migration step needed.

### Setup

1. Install the [Turso CLI](https://docs.turso.tech/cli/installation) and run `turso auth login`.
2. Provision the database and credentials:
   ```sh
   turso db create rust-uy
   turso db show rust-uy --url      # -> TURSO_DATABASE_URL
   turso db tokens create rust-uy   # -> TURSO_AUTH_TOKEN
   ```
3. Copy `.env.example` to `.env` and fill in both values for local dev.
4. In Netlify, add `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` as environment
   variables (Site settings → Environment variables) so the deployed site can
   reach the database.

### Reading submissions

```sh
turso db shell rust-uy "SELECT * FROM submissions ORDER BY created_at DESC;"
```
