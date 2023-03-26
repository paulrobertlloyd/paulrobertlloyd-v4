module.exports = {
  default: {
    formats: ['jpeg', 'webp'],
    sizes: '100vw',
    widths: [960, 1440],
  },
  card: {
    formats: ['jpeg', 'webp'],
    widths: [960],
  },
  supporting: {
    formats: ['jpeg', 'webp'],
    sizes: '(max-width: 440px) 100vw, 40vw',
    widths: [960],
  },
  thumbnail: {
    formats: ['jpeg'],
    sizes: '20vw',
    widths: [320, 640],
  },
};
