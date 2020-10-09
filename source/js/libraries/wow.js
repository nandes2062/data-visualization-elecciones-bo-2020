/*
  |--------------------------------------------------------------------------
  | WOW.JS
  |--------------------------------------------------------------------------
  |
  | npm install wow.js --save
  |
  */
import WOW from 'wow.js/dist/wow.min'

export const wowjs = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: false
  })
  wow.init()
}
