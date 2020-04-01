const min_number = 1;
const max_number = 10;
var numberOfNumbers = max_number - min_number + 1;
var arr = [];

// determine a random location for each number and place into arr:
for(var i=min_number;i<=max_number;i++){
    while(true){
        var numRandLoc = Math.floor(Math.random() * numberOfNumbers);
        if (!arr[numRandLoc]){
            arr[numRandLoc] = i;
            break;
        }
    }
}

// output the outcome:
for(var i in arr){
    console.log(arr[i]);
}
