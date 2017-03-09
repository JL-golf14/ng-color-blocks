colorBlocks.controller('GameController',['DataFactory', function(DataFactory) {

console.log('game controller running');

var self = this;
 self.colors = DataFactory.colors;
 self.highScore= DataFactory.highScore;
//
// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?';
  self.highScore;
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    self.highScore += parseInt((self.colors.length/2)*100);
    console.log(self.highScore);
    alert('You got it!\n\nNow try another!');
    init();
  } else if (self.highScore<-10000) {
    self.messageText = 'Are you Color Blind????';
  }
  else {
    self.highScore -= parseInt((self.colors.length/4)*100);
    console.log(self.highScore);
    self.messageText = 'Oh no! You guessed wrong!';
  }
}

// UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
