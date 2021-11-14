
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

    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + '.';
    
}

console.log( maxMinAvg([1, -2, 9, 4]) );