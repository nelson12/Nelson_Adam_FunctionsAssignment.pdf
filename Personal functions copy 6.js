//adam nelson 08032013 Personal Functions
//What will happen if my daughter wakes up too many times in one night?

prompt("I am trying to see if Izzy wakes up at night! Does Izzy wake up between 8pm and midnight?")
prompt("Does Izzy wake up between midnight and 8am?")

var c =timesAwake(3,2);

function timesAwake(a,b){
	var c = a+b;//stating equation
	return c;
}
console.log(c);//printing to the console

if(timesAwake<1){
	console.log("She sleeps all night long!");
}else{
	console.log("She come to my room and sleeps with me :(");
}
	