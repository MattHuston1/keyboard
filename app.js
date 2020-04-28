const synth = new Tone.Synth();
synth.oscillator.type = 'sine';
synth.toMaster()

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

let html = ''
let key = ''
let isSharp = false
console.log(key)
const container = document.getElementById('container')
let whiteNote = document.querySelector('.whitenote')
let blackNote = document.querySelector('.blacknote')


for (let octave = 0; octave < 2; octave++) {

  for (let i = 0; i < notes.length; i++) {
    let hasSharp = true
    let note = notes[i]

    if (note == 'E' || note == 'B') {
      hasSharp = false
    }
    //testing
    let whites = document.createElement('div')
    console.log(whites)
    // whites.classList.add('whitenote')
    whites.setAttribute('class', 'whitenote')
    // whites.addEventListener('mousedown', noteDown(this, false))
    // whites.addEventListener('mouseup', noteUp(this, false))
    // whites.addEventListener('mouseleave', noteUp(this, false))
    whites.addEventListener('mousedown', noteDown)
    whites.addEventListener('mouseup', noteUp)
    // whites.addEventListener('mouseleave', noteUp, false)
    whites.setAttribute('data', `note: '${note + (octave + 4)}'`)
    container.appendChild(whites)


    // html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this, false)' onmouseleave='noteUp(this, false)' data-note='${note + (octave + 4)}'>`

    if (hasSharp) {
      //testing
      let blacks = document.createElement('div')
      console.log(blacks)
      // blacks.classList.add('blacknote')
      blacks.setAttribute('class', 'blacknote')
      // blacks.addEventListener('mousedown', noteDown(this, true))
      // blacks.addEventListener('mouseup', noteUp(this, true))
      // blacks.addEventListener('mouseleave', noteUp(this, true))
      blacks.addEventListener('mousedown', noteDown)
      blacks.addEventListener('mouseup', noteUp)
      // blacks.addEventListener('mouseleave', noteUp, true)
      blacks.setAttribute('data', `note: '${note + '#' + (octave + 4)}'`)
      whites.appendChild(blacks)

      // html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this, true)' data-note='${note + '#' + (octave + 4)}' data-='${key}'></div>`
    }
    // html += `</div>`

  }
}

// document.getElementById('container').innerHTML = html

function noteUp(elem) {

  if (elem.path[0].classList[0]== 'blacknote') {
    isSharp = true
    event.target.style.background = 'black'
  }
  if (elem.path[0].classList[0]== 'whitenote') {
    isSharp = false
    event.target.style.background = '#fffff0'
  }
  console.log(isSharp)
  // console.log(this)
  // console.log(event.target)
  // console.log(elem.path[0])
  // console.log(isSharp)
  // console.log(event)
  // elem.style.background = isSharp ? 'black' : '#fffff0'
  // event.target.style.background = isSharp ? 'black' : '#fffff0'
}

function noteDown(elem) {

  if (elem.path[0].classList[0] == 'blacknote') {
    isSharp = true
    event.target.style.background = '#777'

  }
  if (elem.path[0].classList[0]== 'whitenote') {
    isSharp = false
    event.target.style.background = '#ccc'

  }
  console.log(event.target)
// function noteDown(isSharp) {
  console.log(elem.path[0].classList[0])
  console.log(this.dataset)
  console.log(isSharp)
  console.log(elem)
  let noteSplit = elem.path[0].attributes[1].nodeValue.split(' ')
  let noteSplice = noteSplit[1].slice(1, -1)
  console.log(noteSplice)
  // console.log(event.target)
  let note = noteSplice
  // this.style.background = isSharp ? '#777' : '#ccc'
  // event.target.style.background = isSharp ? '#777' : '#ccc'

  // synth.triggerAttackRelease(note, '16n')
  synth.triggerAttackRelease(note, '8n')

  event.stopPropagation()
}

// whiteNote.addEventListener('keydown', whiteKeyDown(this, true))

// function whiteKeyDown(elem, isSharp) {
//   e.style.background = isSharp ? '#777' : '#ccc'

// }

document.addEventListener("keydown", e => {
  console.log(e)
  console.log(document.querySelector('.whitenote'))
  console.log(e.key)

  let whiteNote = document.querySelector('.whitenote')
  let blackNote = document.querySelector('.blacknote')
  console.log(whiteNote)
  
  if (e.key == 'd' || 'f' || 'g' || 'h' || 'j' || 'k' || 'l') {
      // event.target.style.background = '#ccc'
  }
  else {
      // event.target.style.background = '#777'

  }
  // if (e.path[0].classList[0] == 'blacknote') {
  //   isSharp = true

  // }
  // if (e.path[0].classList[0]== 'whitenote') {
  //   isSharp = false

  // }

  switch (e.key) {
    case "d":
    console.log(synth.triggerAttack())
    console.log()
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("C#4");
    case "f":
      return synth.triggerAttack("D4");
    case "t":
      return synth.triggerAttack("D#4");
    case "g":
      return synth.triggerAttack("E4");
    case "h":
      return synth.triggerAttack("F4");
    case "u":
      return synth.triggerAttack("F#4");
    case "j":
      return synth.triggerAttack("G4");
    case "i":
      return synth.triggerAttack("G#4");
    case "k":
      return synth.triggerAttack("A4");
    case "o":
      return synth.triggerAttack("A#4");
    case "l":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {

  // if (e.path[0].classList[0]== 'blacknote') {
  //   isSharp = true
  //   event.target.style.background = 'black'
  // }
  // if (e.path[0].classList[0]== 'whitenote') {
  //   isSharp = false
  //   event.target.style.background = '#fffff0'
  // }

  switch (e.key) {
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
      synth.triggerRelease();
  }
});

function keyNote(note) {
  switch (note) {
    case "C4":
      key = 'd';
    case "C#4":
      key = 'r';
    case "D4":
      key = 'f';
    case "D#4":
      key = 't';
    case "E4":
      key = 'g';
    case "F4":
      key = 'h';
    case "F#4":
      key = 'u';
    case "G4":
      key = 'j';
    case "G#4":
      key = 'i';
    case "A4":
      key = 'k';
    case "A#4":
      key = 'o';
    case "B4":
      key = 'l';
    default:
      return;
  }
}

