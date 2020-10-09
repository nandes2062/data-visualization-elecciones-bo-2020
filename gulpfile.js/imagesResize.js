/**
 * imagesResize
 * Resize all JPG images to three different sizes: 200, 500, and 630 pixels
 */
const imagesResize = {
  '*.{jpg,png,jpeg,gif,webp}': [{
    width: 100,
    suffix: '-100'
  }, {
    width: 100 * 2,
    suffix: '-100-2x'
  }],
  'slides/*.{jpg,png,jpeg,gif,webp}': [{
    width: 100,
    suffix: '-ss'
  }, {
    width: 100 * 2,
    suffix: '-ssss'
  }]
};

module.exports = imagesResize;