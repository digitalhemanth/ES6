const arr= [5,1,7,2,11,0,-45];
  
var maxValue = null;
for (var i = 0; i < arr.length; i++) {
if (maxValue === null || maxValue < arr[i]) {
maxValue = arr[i];
}
}
 console.log(maxValue);

 var minValue = null;
 for (var j = 0; j < arr.length; j++) {
 if (minValue === null || minValue > arr[j]) {
   minValue = arr[j];
   }
  }
console.log(minValue);


















 
/*function findMinMax(arr) {
    let min = arr[0].y , max = arr[0].y;
  
    for(let i=1; i=arr.length; i++) {
      let v = arr[i].y;
      min = (v < min) ? v : min;
      max = (v > max) ? v : max;
    }
      return [min, max];
  }
  console.log(findMinMax(arr));*/