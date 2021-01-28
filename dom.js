import HamburgerMenu from './js/Hamburger.js'
import { Digital, Alarm } from './js/Clock.js'

const $D = document

$D.addEventListener('DOMContentLoaded', () => {
  HamburgerMenu('.menu', '.menu-btn', '.menu a')
  Digital('.clock', '#init', '#stop')
  Alarm('./assets/alarma.mp3', '#alarm-init', '#alarm-stop')
})