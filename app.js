const synth = new Tone.PolySynth().toMaster()

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

let html = ''

for (let octave = 0; octave < 2; octave++) {

  for (let i = 0; i < notes.length; i++) {
    let hasSharp = true
    let note = notes[i]

    if (note == 'E' || note == 'B') {
      hasSharp = false
    }
    html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this, false)' onmouseleave='noteUp(this, false)' data-note='${note + (octave + 4)}'>`
    if (hasSharp) {
      html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this, true)' data-note='${note + '#' + (octave + 4)}'></div>`
    }
    html += `</div>`

  }
}

document.getElementById('container').innerHTML = html

function noteUp(elem, isSharp) {
  elem.style.background = isSharp ? 'black' : '#fffff0'

}

function noteDown(elem, isSharp) {
  let note = elem.dataset.note
  elem.style.background = isSharp ? '#777' : '#ccc'
  // synth.triggerAttackRelease(note, '16n')
  synth.triggerAttackRelease(note, '8n')

  event.stopPropagation()
}

document.addEventListener("keydown", e => {
  console.log(e)
  switch (e.key) {
    case "d":
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
  // switch (e.key) {
  //   case "d":
  //   case "r":
  //   case "f":
  //   case "t":
  //   case "g":
  //   case "h":
  //   case "u":
  //   case "j":
  //   case "i":
  //   case "k":
  //   case "o":
  //   case "l":
      synth.triggerRelease();
  // }
});