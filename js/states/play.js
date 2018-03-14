create: function() {

  // Setting the Keyboard
  this.keyboard = game.input.keyboard;
  // Setting the Player
  this.player = game.add.sprite(16, 16, 'funny');
  game.physics.enable(this.player, Phaser.Physics.ARCADE);
  // Setting the Enemy
  this.win = game.add.sprite(256, 256, 'win');
  game.physics.enable(this.win, Phaser.Physics.ARCADE);
}
