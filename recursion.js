function reduce(arr, fn, initial) {
  return function reducer(prev, index){
    if(index>=arr.length)
      return prev;
    else{
      return reducer(fn(prev,arr[index],index,arr),index+1);
    }
  }(initial,0);
}

module.exports = reduce;

console.log('recursively adding elemets of array',reduce([2,3,1],function sum(a,b){
  return a+b;},0)===6);
