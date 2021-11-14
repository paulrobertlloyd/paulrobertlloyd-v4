# paulrobertlloyd.com

*My personal website. There are many like it, but this is mine.*

## Installation

1. `git clone git@github.com:paulrobertlloyd/paulrobertlloyd-v4.git`
2. `cd paulrobertlloyd-v4`
3. `npm install`
4. `npm run build`

Ensure the following environment variables are set:

* `WEBMENTION_IO_TOKEN`: [API key from webmention.io](https://webmention.io)
* `OMDBAPI_TOKEN`: [API key from OMDb API](http://omdbapi.com)

Generated files are written to the `www` directory.

## Development

When developing the site, you may want files automatically compiled and the browser to refresh automatically. To do this, run `npm run watch`.

## Deployment

This site is deployed automatically by Netlify whenever files are pushed to the `master` branch.

## Repo structure

```bash
paulrobertlloyd.com
├── lib
│   ├── collections              # Eleventy collections
│   ├── filters                  # Eleventy template filters
│   ├── libraries                # Eleventy template libraries
│   ├── shortcodes               # Eleventy template shortcodes
│   ├── transforms               # Eleventy template transforms
│   └── utils                    # Utility scripts
│
├── src
│   ├── assets                   # Assets (CSS, JavaScript, WOFF2, SVG)
│   ├── content                  # Content (Markdown)
│   ├── data                     # Global website data (JSON)
│   ├── images                   # Content images
│   ├── includes                 # Components (Liquid)
│   ├── layouts                  # Layout templates (Liquid)
│   ├── app.webmanifest.liquid   # Web App Manifest template
│   ├── feed.json.liquid         # RSS (JSON Feed) template
│   ├── feed.xml.liquid          # RSS (Atom) template
│   ├── key.txt                  # Public PGP key
│   ├── robots.txt.liquid        # robots.txt template
│   ├── serviceworker.js.liquid  # Service worker template
│   └── sitemap.xml.liquid       # Sitemap template
│
├── .editorconfig                # Text editor configuration
├── .eleventy.js                 # Eleventy configuration
├── .gitattributes               # Files tracked by Git LFS
├── .gitignore                   # Files not tracked by Git
├── .markdownlintrc              # markdownlint configuration
├── .nvmrc                       # NVM configuration
├── .stylelintrc                 # Stylelint configuration
├── netlify.toml                 # Netlify configuration
├── package.json                 # Node.js package manifest
├── package-lock.json            # Node.js package lock
└── README.md                    # This file
```

© [Paul Robert Lloyd](https://paulrobertlloyd.com)
