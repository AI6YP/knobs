#!/usr/bin/env node

let easymidi = require('easymidi');

easymidi.getInputs().forEach(inputName => {
  console.log(inputName);
  let input = new easymidi.Input(inputName);
  input.on('message', function (msg) {
    let vals = Object.keys(msg).map(key =>
      key + ': ' + msg[key]
    );
    console.log(inputName + ': ' + vals.join(', '));
  });
});
