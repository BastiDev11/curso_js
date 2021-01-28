const $D = document

function Digital(clock, init, stop){
let clockTempo;

$D.addEventListener('click', e => {
if (e.target.matches(init)) {
  clockTempo = setInterval(() => {
    let clockHour = new Date().toLocaleTimeString()
  $D.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
  }, 1000);

  $D.querySelector(init).setAttribute('disabled', 'true')
}
if (e.target.matches(stop)) {
    clearInterval(clockTempo)
    $D.querySelector(clock).innerHTML = null
    $D.querySelector(init).removeAttribute('disabled')
}
})
}

function Alarm(sound, init, stop){
let alarmTempo;
const $alarm = document.createElement('audio')
$alarm.src = sound


$D.addEventListener('click', e => {
  if (e.target.matches(init)) {
    $D.querySelector(init).setAttribute('disabled', 'true')
    alarmTempo = setTimeout(() => {
      $alarm.play()
    }, 1000);
  }

  if(e.target.matches(stop)) {
    $alarm.pause()
    $alarm.currentTime = 0
    clearTimeout(alarmTempo)
    $D.querySelector(init).removeAttribute('disabled')
  }
})
}

export {Digital, Alarm}