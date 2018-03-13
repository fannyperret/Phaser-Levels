var bootState = {

  create: function () {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Calling the loadState
    game.state.start('load');
  }
}
