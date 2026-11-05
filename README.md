# Field Notes

A small photo journal built with Hugo and deployed through Cloudflare Pages.

## Local development

Install Hugo, then run:

```sh
hugo server -D
```

Open <http://localhost:1313>.

Create a new post:

```sh
hugo new content posts/my-new-note/index.md
```

Put images beside the post's `index.md`. Hugo page bundles keep writing and photos together.

## Cloudflare Pages

- Production branch: `main`
- Build command: `hugo --minify --cacheDir=$PWD/.cache`
- Build directory: `public`
- Environment variable: `HUGO_VERSION` set to your installed Hugo version

Do not commit `public/`; Cloudflare generates it during deployment.
