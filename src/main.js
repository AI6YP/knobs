'use strict';

const webmidi = require('webmidi');
const WebMidi = webmidi.WebMidi;

global.KNOBS = () => {
  console.log(webmidi);
  // Enable WebMidi.js and trigger the onEnabled() function when ready
  WebMidi
    .enable()
    .then(onEnabled)
    .catch(err => alert(err));

  // Function triggered when WebMidi.js is ready
  function onEnabled() {

    // Display available MIDI input devices
    if (WebMidi.inputs.length < 1) {
      console.log('No device detected.');
    } else {
      WebMidi.inputs.forEach((device, index) => {
        console.log(index, device.name);
      });

      const knobs = WebMidi.inputs[1];
      // 'WORLDE easy control MIDI 1'

      const chans = knobs.channels;

      console.log(chans);

      chans[1].addListener('controlchange', e => {
        console.log(e);
      });
    }

  }
};

/* eslint-env browser */
