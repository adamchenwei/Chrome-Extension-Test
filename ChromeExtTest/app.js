'use strict';
function Robot() {
  this.head = 'MetalHead';
}
Robot.prototype.changeHead = function() {
  return 'Gold Head!';
};

var CrazyRobot = new Robot();
CrazyRobot.changeHead = function() {
  return 'Nasty Rotten Lunch Head!';
};

Robot.prototype.snapOffArms = function() {
  return 'Klank! Arms are off like a champ!';
};
 

var myTest="Allahu Akabar!";


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  document.getElementById("theButton").addEventListener("click",
	    function() {
	    	console.log('event added');
	  		window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
	}, false);
	
});




/*var HeroRobot = new CrazyRobot();
HeroRobot.prototype.putBackEverything = function() {
  return 'everything back normal!';
};

HeroRobot.changeHead = function() {
  return 'A Super Hero head is on!';
};

var TheHero = new HeroRobot();
TheHero.prototype.yesIAm = function() {
  return 'Legendary!';
};
*/