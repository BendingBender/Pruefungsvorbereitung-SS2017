const arr  = [[1,2], [3,4]];

for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
       console.log(arr[i][j]);
   } 
}

for (let subArr of arr) {
   for (let value of subArr) {
       console.log(value);
   } 
}

arr.forEach((subArr, idx) => {
    subArr.forEach((value, idy) => {
        console.log(idx, idy, value);
    })
})
