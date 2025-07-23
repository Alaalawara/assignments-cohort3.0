const fs= require('fs');
fs.readFile('2-counter.js','utf-8',(err,data)=>{
    if(err){
        console.error(err)
    }
    console.log(data);
})

function heavyoperation(){
  for(let x=0;x<100000;x++){
     console.log(x);
  }
  return;
}
heavyoperation();
