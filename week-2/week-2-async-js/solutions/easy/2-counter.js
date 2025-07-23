let counter=0;

const updatecounter = () => setTimeout(()=>{
    console.log(counter++);
    updatecounter();
},1000)
updatecounter();
