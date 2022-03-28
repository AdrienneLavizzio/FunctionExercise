//Function Exercise
//1
function fozzieBear(){
    console.log('Wocka Wocka');
}
fozzieBear();
console.log(`=`.repeat(25));

//2
function beaker(speak){
    console.log(speak.repeat(4));
}
beaker(`Meep`);
console.log(`=`.repeat(25));
//3
function muppetShow(a,b){
    if(a=== `Muppet`&& b===`Show`){
        console.log(`It's time to play the music.It's time to light the lights.`)
    }
    return ``;
}
console.log(muppetShow(`Muppet`, `Show`));
console.log(muppetShow(`Hi`,`Bye`));

console.log(`=`.repeat(25));

//4
function kermit(){
    console.log(`Kermit the Frog`);
}
kermit();

console.log(`=`.repeat(25));
//5
function muppetShowSeasons(seasons){
    if(seasons===5){
        return true;
    }
    return false;
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));
//6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet`);
}
manOrMuppet();
console.log(`=`.repeat(25));

//7
rainbowConnection =()=> console.log(`Someday we'll find it.The Rainbow Connection.The lovers,the dreamers and me`);

rainbowConnection();

//8
//No

//9
//Yes