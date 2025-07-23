## Counter without setInterval

<!-- Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->

let counter=0;

const updatecounter = () = setTimeout(()=>{
    console.log(counter++);
    updatecounter();
},1000)
updatecounter();






































































(Hint: setTimeout)