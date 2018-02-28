var game = {};

demo.state0 = function(){};
demo.state0.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '';
    console.log('state0');

    game.input.Keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);

    game.input.Keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 2);

  },
  update: function() {},

  function changeState(stateNum) {
    game.state.start('state' + stateNum);
  }

};
