module.exports = {
  default: {
    widths: [480, 960, 1440],
    steps: 3
  },
  summary: {
    formats: ['jpg'],
    widths: ['1200'], // x 630
  },
  supporting: {
    sizes: '(max-width: 440px) 100vw, 40vw',
    widths: [320, 640, 960],
  },
  'card-rectangle': {
    sizes: '50vw',
    widths: [240, 480, 720],
  },
  'card-square': {
    sizes: '(max-width: 480px) 33vw, 20%',
    widths: [240, 480, 720],
  },
  thumbnail: {
    sizes: '20vw',
    widths: [240, 480, 640],
  },
};
