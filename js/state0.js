var demo = {}, centerX = 1000 / 7; centerY = 750 / 1.2; 'funny'; speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {

  preload: function() {
    game.load.image('BG', 'assets/backgrounds/BG.png')
    game.load.image('funny', 'assets/sprites/funny.png')
    //game.load.spritesheet('funnySheet', 'assets/spritesheets/funnySheet.png', 240, 370)

  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = "#4488AA";
    console.log('state0');
    addChangeStateEventListeners();
    //game.word.setBounds(0, 0, 3000, 750); doesn't work
    //game.scale.scaleMode = PhaserManager.SHOW_ALL; doesn't work

    var BG = game.add.sprite(0, 0, 'BG'); // background

    funny = game.add.sprite(centerX, centerY, 'funny'); // sprite
    funny.anchor.setTo(0.5, 0.5);
    funny.scale.setTo(0.4, 0.4);
    game.physics.enable(funny);
    funny.body.collideWorldBounds = true
    //funny.animations.add('walk', [0, 1, 2, 3, 4]);

    game.camera.follow(funny);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 100, 0, 300, 500);

  },
  update: function() {
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      funny.scale.setTo(0.4, 0.4);
      funny.x += speed;
      //funny.animations.play('walk', 14, true);
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      funny.scale.setTo(-0.4, 0.4);
      funny.x -= speed;
      //funny.animations.play('walk', 14, true);
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      funny.y -= speed;
      if(funny.y < 625){
        funny.y = 625;
      }
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
