//adam nelson 08032013 Industrial Functions
//Is the waiting room big enough for all the children scheduled for appointments today?

prompt("I am figuring out if the waiting room is big enough for all the children scheduled today! What is the width of the waiting room in feet?");
prompt("What is the height of the waiting room?");
prompt("How many children are scheduled today?");

var enoughRoom = function(width,height,scheduled){
	 var room = width*height/scheduled;
	 return room;
}
var a = enoughRoom(4,5,45);
console.log(a);

