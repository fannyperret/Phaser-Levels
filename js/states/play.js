var playState = {

  create: function() {

    // Setting the Keyboard
    this.keyboard = game.input.keyboard;
    // Setting the Player
    this.player = game.add.sprite(16, 16, 'funny');
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    // Setting the Enemy
    this.win = game.add.sprite(49, 41, 'win');
    game.physics.enable(this.win, Phaser.Physics.ARCADE);

  },

  update: function() {

    game.physics.arcade.overlap(this.player, this.win, null, this);

    if(this.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.body.velocity.x = -175;
    } else if(this.keyboard.isDown(Phaser.Keyboard.D)) {
      this.player.body.velocity.x = 175;
    } else {
      this.player.body.velocity.x = 0;
    }
    if(this.keyboard.isDown(Phaser.Keyboard.W)) {
      this.player.body.velocity.y = -175;
    } else if(this.keyboard.isDown(Phaser.Keyboard.S)) {
      this.player.body.velocity.y = 175;
    } else {
      this.player.body.velocity.y = 0;
    }

  },

  win: function() {

    game.state.start('win');
  },


};
