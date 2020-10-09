import { tns } from 'tiny-slider/src/tiny-slider'

const optionSlider = {
  container: '.rex-slider',
  controlsText: [
    '<i class="icon-left"></i>',
    '<i class="icon-right"></i>'
  ],
  autoplayText: [
    '<i class="icon-play"></i>',
    '<i class="icon-pause"></i>'
  ],
  speed: 2000,
  autoplay: true,
  controlsContainer: document.querySelector('.my-controls')
}

export default tns(optionSlider)
