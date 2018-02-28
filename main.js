var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state0', game.state0);
game.state.add('state1', game.state1);
game.state.add('state2', game.state2);
game.state.add('state3', game.state3);
game.state.add('state4', game.state4);
game.state.add('state5', game.state5);
game.state.add('state6', game.state6);
game.state.add('state7', game.state7);
game.state.add('state8', game.state8);
game.state.add('state9', game.state9);

game.state.start('state0');
