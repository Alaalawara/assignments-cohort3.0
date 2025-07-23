const fs = require('fs').promises;

async function writefile(filename,content) {
  try{
    await fs.writeFile(filename,content,'utf-8');
    console.log('file written successfully');
  }catch(error){
    console.error(error);
  }
}
writefile('example.txt','hello, cohort!');