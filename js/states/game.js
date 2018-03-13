var game = new Phaser.Game (800, 600, Phaser.AUTO, 'demoDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

// We start the game by calling the bootState
game.state.start('boot');
