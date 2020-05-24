//Get Smallest Number - First Way
let array1 = [3,5,9,1,35,153,-3,15,-8];
let min = Math.min.apply(null,array1);

document.write(min + '<br>');

//Get Smallest Number - Second Way
let array2 = [3,5,9,1,35,153,-3,15,-7];

document.write(Math.min(...array2) + '<br>');

//Get Smallest Number - Third Way
let arr = [3,5,9,1,35,153,-3,15,-6];
let minNum = getMinNumber(arr);

function getMinNumber(arr) {
  let minNum = null;
  for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  document.write(minNum);
};

