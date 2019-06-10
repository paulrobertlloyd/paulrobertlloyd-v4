# paulrobertlloyd.com

*My personal website. There are many like it, but this is mine.*

## Installation

1. `git clone git@github.com:paulrobertlloyd/paulrobertlloyd-v4.git`
2. `cd paulrobertlloyd-v4`
4. `npm install`
5. `npm run build`

Generated files are written to the `www` directory.

Then, ensure the `WEBMENTION_IO_TOKEN` environment variable is set, which should be populated with your [API key from webmention.io](https://webmention.io/settings).

## Development

When developing the site, you may want files automatically compiled and the browser to refresh automatically. To do this, run `npm run watch`.

### Running locally with HTTPS

To run with HTTPS locally on macOS first [follow the setup steps described here](https://gist.github.com/jed/6147872). To create the required SSL certificates, follow these steps:

1. Change into the correct directory: `cd etc`
2. Create the certificate files:

   ```
   openssl req \
   -new \
   -newkey rsa:2048 \
   -sha256 \
   -days 3650 \
   -nodes \
   -x509 \
   -keyout etc/test.key \
   -out etc/test.crt \
   -subj /CN=v4.paulrobertlloyd.test \
   -reqexts SAN \
   -extensions SAN \
   -config <(cat /System/Library/OpenSSL/openssl.cnf \
   <(printf '[SAN]\nsubjectAltName=DNS:v4.paulrobertlloyd.test'))
   ```

## Deployment

This site is deployed automatically by Netlify whenever files are pushed to the `master` branch.

## Repo structure

```bash
paulrobertlloyd.com
├── etc
│   ├── browser-sync.config.js   # BrowserSync configuration
│   ├── postcss.config.js        # PostCSS configuration
│   ├── rollup.config.js         # Rollup configuration
│   └── test.conf                # Local nginx server configuration
│
├── lib
│   ├── filters                  # Eleventy template filters
│   ├── libraries                # Eleventy template libraries
│   └── transforms               # Eleventy transforms
│
├── src
│   ├── _content                 # Content (Markdown)
│   ├── _data                    # Global website data (JSON)
│   ├── _includes                # Components and layout templates (Liquid)
│   ├── assets                   # Assets (CSS, JavaScript, WOFF2, SVG)
│   ├── images                   # Content images
│   ├── app.webmanifest.liquid   # Web App Manifest template
│   ├── feed.json.liquid         # RSS (JSON Feed) template
│   ├── feed.xml.liquid          # RSS (Atom) template
│   ├── robots.txt.liquid        # robots.txt template
│   ├── search.json.liquid       # Search database template
│   ├── serviceworker.js.liquid  # Service worker template
│   └── sitemap.xml.liquid       # Sitemap template
│
├── .editorconfig                # Text editor configuration
├── .eleventy.js                 # Eleventy configuration
├── .gitattributes               # Files tracked by Git LFS
├── .gitignore                   # Files not tracked by Git
├── .markdownlintrc              # markdownlint configuration
├── .stylelintrc                 # Stylelint configuration
├── netlify.toml                 # Netlify configuration
├── package.json                 # Node.js package manifest
├── package-lock.json            # Node.js package lock
└── README.md                    # This file
```

© [Paul Robert Lloyd](https://paulrobertlloyd.com)
