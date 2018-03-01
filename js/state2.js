demo.state2 = function(){};
demo.state2.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#4488AA";
    console.log('state2');

    addChangeStateEventListeners();
  },
  update: function() {}

};
