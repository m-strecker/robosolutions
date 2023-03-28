var array = [4,3,55,5,0,1,-2];
var x = sortArray(array);
console.log("The sum is: " + divisibles(x));
printArray(x);


//array sort function --> arrange in ascending value
function sortArray(array){
    for (var i=0; i<array.length-1; i++){
        for (var j = i+1; j<array.length; j++){
            if (array[i]>array[j]){
                var temp= array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    
return array;
}

//sums numbers in an array that are divisible by 5 --> ignore/don't sum anything with a remainder
function divisibles(arr){
    var sum=0;
    for(var q=0; q<arr.length; q++){
        if (arr[q]%5===0){
            sum += arr[q];
        }
    }
return sum;
}

//prints all values in array to console
function printArray(arr){
    for (var q=0; q<arr.length; q++){
        console.log(arr[q]);
    }
}