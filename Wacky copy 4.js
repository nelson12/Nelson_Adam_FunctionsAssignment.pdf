//adam nelson 08032013 Wacky Functions
//How many smurfs will fit in a box?

function smurfBox(){
	var width =2;
	var height = 3;
	var length = 3;
	var area = width*height*length;
	console.log(area);
}
smurfBox();

(smurfBox>10)?console.log("You can fit at least 5 smurfs!"):console.log("You can only fit a couple smurfs!")
