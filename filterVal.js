function filterVal(arr, filterFunc) {
    const userArray = [];

    for (let j = 0; j < arr.length; j++) {
        
        const result = filterFunc(arr[j], j, arr);

        if (result) {
            userArray[userArray.length] = arr[j]; // Add element to the end of userArray
        }
    }

    return userArray;
}

// 
const names = [{name:"ian",Age:19},
{name:"chelsea",Age:20},
{name:"Terry",Age:17}];

const longNamesThan5 = filterVal(names,function(item,index){
    return item.name == "chelsea";
});
// const longNamesThan5 = filterVal(names, function(name, index, arr) {

//   return name.length > 5;
// });

console.log("Listed below are names with words greater than five ")
console.log(longNamesThan5); 
