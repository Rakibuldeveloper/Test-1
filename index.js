//    Number 1


function circuitPower(voltage, current) {
    const power = voltage * current;

    return power;
}

const voltage = 110;
const current = 3;

const circuitPowerResult = circuitPower(voltage, current);

console.log(circuitPowerResult);






    //   Number 2


function findMaxNumbers(arr) {
    if(arr.length === 0){
        return null;
    }
    let max = arr[0]
    for(let i = 1; i <arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

const numbers = [1,2,3,4,5,6,7,];
const maxNumbers = findMaxNumbers(numbers);
console.log(maxNumbers);

const empty = [];
const emptyArray = findMaxNumbers(empty);
console.log(emptyArray);


    //    Number 3

function mergeArrays(arr1, arr2) {
    const merge = [...arr1, ...arr2]
    return merge;
}

const mergeArray1 = [1,3,5];
const mergeArray2 = [2,4,6];

const mergeArray = mergeArrays(mergeArray1, mergeArray2);
console.log(mergeArray); 



    //   Number 4


function arrayValuesTypes(arr) {
    const dataType = arr.map(element => typeof element);

    return dataType;
}

const data = [1, 2, 'null', true, undefined, null];
const dataTypes = arrayValuesTypes(data);
console.log(dataTypes);