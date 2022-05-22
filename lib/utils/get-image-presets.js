module.exports = {
  default: {
    sizes: '100vw',
    widths: [480, 960, 1440]
  },
  avatar: {
    formats: ['jpg'],
    widths: [96],
  },
  'card-rectangle': {
    formats: ['jpg'],
    sizes: '50vw',
    widths: [360, 720],
  },
  'card-square': {
    formats: ['jpg'],
    sizes: '(max-width: 480px) 33vw, 20%',
    widths: [360, 720],
  },
  summary: {
    formats: ['jpg'],
    widths: ['1200'], // x 630
  },
  supporting: {
    sizes: '(max-width: 440px) 100vw, 40vw',
    widths: [320, 640, 960],
  },
  thumbnail: {
    formats: ['jpg'],
    sizes: '20vw',
    widths: [240, 480, 640],
  },
};
