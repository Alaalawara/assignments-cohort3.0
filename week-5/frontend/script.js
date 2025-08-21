const axios= require('axios');
// async function main(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const show= await response.json();
//     console.log(show);

// }

async function main(){
    const response = await axios.get('https://dummyjson.com/posts')
    console.log(response.data);

}
main();