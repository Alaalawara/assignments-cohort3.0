/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let Output=[];
  let categoryfound;
  for(let i=0;i<transactions.length;i++){
    for(let j=1;j<Output.length;j++){
      if( transactions[i]["category"] == Output[j]["category"] ){
        Output[j]["totalSpent"]+=transactions[i]["price"];
        categoryfound=true;
        break;
      }
    }
    if(categoryfound == false){
      Output.push({
        category: transactions[i]["category"],
        totalSpent:transactions[i]["price"],
      })
    }
  }
  return Output;
}
module.exports = calculateTotalSpentByCategory;
