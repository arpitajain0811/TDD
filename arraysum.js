function sumarray(a ,b){
var c=[];
for(var i=0;i<5;i++){
  c[i]=sum(a[i],b[i]);
}
  return c;
}
function sum(a,b)
{
  return a+b;
}

console.log("the sum is right",isequal(sumarray([1,2,3,4,5],[2,3,4,5,6]),[ 3, 5, 7, 9, 11 ])===true);
console.log("the sum is right",sumarray([1,2,3,4],[2,3,4,5,6])===false);

function isequal(a,b)
{
  for(var i=0;i<5;i++)
  {
    if(a[i]!=b[i])
    return false;
  }
  return true;
}
