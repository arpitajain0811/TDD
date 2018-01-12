function sumarray(a ,b){
if(a.length!=b.length)
{
    console.log("Unable to add as length of arrays is unequal.");
    return null;
}
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
console.log("unequal array lengths",sumarray([1,2,3,4],[2,3,4,5,6])===null);

function isequal(a,b)
{
  for(var i=0;i<5;i++)
  {
    if(a[i]!=b[i])
    return false;
  }
  return true;
}
