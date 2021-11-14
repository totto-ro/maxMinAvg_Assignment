
function maxMinAvg( arr ){
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    
    for( let i = 1; i < arr.length; i++){
        if( arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i]
        }
        sum = sum + arr[i];
    }
    
    let avg = sum /arr.length;

    return [ min, max, avg];
    
}

let arrayNum = [1, -2, 9, 4];

let nums = maxMinAvg( arrayNum );

console.log( "The minimum is", nums[0], "the maximum is" , nums[1], "and the average is", nums[2]);