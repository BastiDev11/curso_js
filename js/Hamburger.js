function HamburgerMenu(menu, btn, link){
const $D = document
$D.addEventListener('click', e => {
  if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
    
  $D.querySelector(menu).classList.toggle('is-active')
  $D.querySelector(btn).classList.toggle('is-active')

  }

  if (e.target.matches(link)) {
  $D.querySelector(menu).classList.remove('is-active')
  $D.querySelector(btn).classList.remove('is-active')
  }

})
}

export default HamburgerMenu