//adam nelson 08032013 Wacky Functions
//How many smurfs will fit in a box?

function smurfBox(){
	var width =2;//declaring variable
	var height = 3;//declaring variable
	var length = 3;//declaring variable
	var area = width*height*length;//stating equation
	console.log(area);//printing to the console
}
smurfBox();//invocation

(smurfBox>10)?console.log("You can fit at least 5 smurfs!"):console.log("You can only fit a couple smurfs!")//ternary statement
