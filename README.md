# Austin Lien Portfolio

A lightweight multi-page portfolio intended for software engineering internship
and AI/ML research opportunities. The home page is a minimal introduction with
LinkedIn and GitHub links, with projects, research, and personal interests on
separate pages.

## Updating Content

Most content lives at the top of `script.js` in the `portfolioData` object:

- Add or edit project cards in `projects`.
- To show a project demo, place an MP4 or MOV in the repository and set that
  project's `demoVideo` value, for example `assets/my-demo.mp4`. An optional
  `demoPoster` image can be set beside it.
- To show a project screenshot, set `image` to a local image path and add an
  informative `imageAlt` description.
- Edit the LinkedIn and GitHub links shown beneath the home-page bio in
  `contacts`.
- Replace the About-page placeholders in `currently`, `recipes`,
  `fragrances`, and `music`. Recipe entries can point to local photos with
  their `image` field.
- Use browser-friendly image files such as `.webp`, `.jpg`, or `.png` for
  recipes; original phone `.heic` files are not reliably supported online.
- Replace the placeholder LinkedIn and GitHub values in `contacts` with your
  links.
Page structure lives in `index.html`, `projects.html`, `research.html`, and
`about.html`. Shared styling in `style.css` and rendering
logic in `script.js` keep the look and editable content consistent across pages.
The moon/sun button switches between light and dark themes and remembers the
visitor's choice in their browser.

The landing-page cat uses an adapted MIT-licensed `oneko.js` sprite animation.
See `THIRD_PARTY_NOTICES.md` for attribution and license details.

## Local Preview

Open `index.html` directly in a browser, or serve the directory with any static
file server.

## Deployment

For the `austinlien.github.io` repository, GitHub Pages can publish directly
from the root of the `main` branch. No package installation or build command is
required.
