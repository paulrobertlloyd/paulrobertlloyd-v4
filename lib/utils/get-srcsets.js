const attributes = {loading: 'lazy'};
const cloudinaryBaseUrl = 'https://res.cloudinary.com/paulrobertlloyd/image/fetch/';

module.exports = {
  default: {
    attributes,
    sizes: '100vw',
    fallbackWidth: 960,
    minWidth: 320,
    maxWidth: 1600,
    steps: 3,
    resizedImageUrl: (src, width) => `${cloudinaryBaseUrl}c_fill,q_auto,f_auto,w_${width}/${process.env.URL}${src}`,
  },
  wide: {
    attributes,
    sizes: '100vw',
    fallbackWidth: 960,
    minWidth: 320,
    maxWidth: 1600,
    steps: 3,
    resizedImageUrl: (src, width) => `${cloudinaryBaseUrl}c_fill,q_auto,f_auto,ar_2.25,w_${width}/${process.env.URL}${src}`,
  },
  supporting: {
    attributes,
    sizes: '40vw',
    fallbackWidth: 400,
    minWidth: 200,
    maxWidth: 800,
    steps: 3,
    resizedImageUrl: (src, width) => `${cloudinaryBaseUrl}c_fill,q_auto,f_auto,w_${width}/${process.env.URL}${src}`,
  },
  'card-rectangle': {
    attributes,
    sizes: '40vw',
    fallbackWidth: 400,
    minWidth: 200,
    maxWidth: 800,
    steps: 4,
    resizedImageUrl: (src, width) => `${cloudinaryBaseUrl}ar_1.5,c_fill,q_auto,f_auto,w_${width}/${process.env.URL}${src}`,
  },
  'card-square': {
    attributes,
    sizes: '(max-width: 480px) 33vw, 20%',
    fallbackWidth: 400,
    minWidth: 200,
    maxWidth: 800,
    steps: 4,
    resizedImageUrl: (src, width) => `${cloudinaryBaseUrl}ar_1.0,c_fill,q_auto,f_auto,w_${width}/${process.env.URL}${src}`,
  },
  thumbnail: {
    attributes,
    sizes: '20vw',
    fallbackWidth: 400,
    minWidth: 200,
    maxWidth: 600,
    steps: 1,
    resizedImageUrl: (src, width) => `${cloudinaryBaseUrl}c_fill,q_auto,f_auto,w_${width}/${process.env.URL}${src}`,
  },
};
