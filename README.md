# My personal site

Hello, I'm Mátyás Budavári, and you're looking at the source of my personal site.

You can see it LIVE on [github pages](https://budavariam.github.io).

## Local Development

```bash
hugo new site budavariam.github.io
hugo serve

git submodule add git@github.com:budavariam/hugo-PaperMod.git themes/PaperModBudavariam --depth=1
git submodule update --init --recursive # needed when you reclone your repo (submodules may not get cloned automatically)

hugo new about.md
hugo new post about.md
hugo serve -D
```

## Compress images

Install [jpegoptim](https://github.com/tjko/jpegoptim) to compress your images, not to fill this repo unnecessarily.

## Docker

You can set the development environment up locally easier with docker.
Run `docker compose up`, wait until you see that *the server is running*,
navigate to [localhost:4000](localhost:4000).
You can edit the content and changes trigger regeneration.
