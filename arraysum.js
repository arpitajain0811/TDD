function sumArray(a ,b){

  if(!valid(a)||!valid(b))
  {
    return null;
  }
  if(a.length!=b.length)
  {
    console.log('Unable to add as length of arrays is unequal.');
    return null;
  }
  let c=[];
  for(let i=0;i<5;i++){

  }
  return c;
}

function valid(a){
  if(!Array.isArray(a)){
    console.log('Input not an array.');
    return false;
  }
  else {
    for(let i=0;i<a.length;i++)
    {
      if(typeof a[i]!=='number' || a[i]===NaN){
        console.log('array elements must be numbers');
        return false;
      }
    }
    return true;
  }
}



console.log('the sum is right',isEqual(sumArray([1,2,3,4,5],[2,3,4,5,6]),[ 3, 5, 7, 9, 11 ])===true);
console.log('unequal array lengths',sumArray([1,2,3,4],[2,3,4,5,6])===null);
console.log('input not an array',sumArray('abc',[2,3,4,5,6])===null);
console.log('input not an array',sumArray([2,3,4,5,6],undefined)===null);
console.log('input element not a number',sumArray([1,2,3,4,'a'],[1,2,3,4,5])===null);

function isEqual(a,b)
{
  for(let i=0;i<a.length;i++)
  {
    if(a[i]!==b[i])
      return false;
  }
  return true;
}
