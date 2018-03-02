var demo = {}, centerX = 1500 / 2; centerY = 1000 / 2; 'funny'; speed = 4;
demo.state0 = function(){};
demo.state0.prototype = {

  preload: function() {
    game.load.image('funny', 'assets/sprites/funny.png')
  },

  create: function() {
    game.stage.backgroundColor = "#4488AA";
    console.log('state0');
    addChangeStateEventListeners();
    //game.scale.scaleMode = PhaserManager.SHOW_ALL;

    funny = game.add.sprite(centerX, centerY, 'funny');
    funny.anchor.setTo(0.5, 0.5);

  },
  update: function() {
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      funny.x += speed;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      funny.x -= speed;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      funny.y -= speed;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      funny.y += speed;
    }

  },
};

  function changeState(i, stateNum) {
    game.state.start('state' + stateNum);
  }

  function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
  }

  function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

  }
