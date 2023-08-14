# paulrobertlloyd.com

_My personal website. There are many like it, but this is mine._

## Installation

1. `git clone git@github.com:paulrobertlloyd/paulrobertlloyd-v4.git`
2. `cd paulrobertlloyd-v4`
3. `npm install`
4. `git submodule update --init --remote`
5. `npm run build`

Ensure the following environment variables are set:

- `MAPBOX_TOKEN`: [API key from Mapbox](https://www.mapbox.com)
- `OMDBAPI_TOKEN`: [API key from OMDb API](http://omdbapi.com)
- `WEBCAL_TOKEN`: The token provided in the last part of a `webcal://` URL

Generated files are written to the `www` directory.

## Development

When developing the site, you may want files automatically compiled and the browser to refresh automatically. To do this, run `npm start`.

## Deployment

This site is deployed automatically by Netlify whenever files are pushed to the `main` branch.

© [Paul Robert Lloyd](https://paulrobertlloyd.com)
