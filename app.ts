let message: string = "Help me, ObiWan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4;
// episode = '4';
console.log("This episode is " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);

let favoriteDroid: string;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);

let isEnoughToBeatMF = function (parsecs: number) : boolean {
  return parsecs < 12;
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'Yes' : 'No'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call("R2")

function inc (speed: number, inc: number = 1) : number {
  return speed + inc
}
console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)
