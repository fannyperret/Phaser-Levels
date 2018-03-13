var loadState = {

  preload: function() {

    var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Courier', fill: '#ffffff'});

    // Loading all assets
    game.load.image('funny', 'assets/sprites/player/funny.png');
    game.load.image('win', 'assets/sprites/enemies/win.png');
  ,

  create: function() {
    // Call the menuState
    game.state.start('menu');
  }
}
