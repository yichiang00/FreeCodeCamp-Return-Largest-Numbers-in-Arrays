
function largestOfFour(arr) {
  var myarray=[];
  for (var i = 0; i < arr.length; i++) {
    var temp=0;
    arr[i].forEach(function(num){
      if(num>temp)
      {
        temp=num;
      }

    });
    myarray.push(temp);
  }
  return myarray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
