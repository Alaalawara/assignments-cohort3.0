/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    let pro= new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },n*1000);
    });
    return pro;
}

module.exports = wait;
