let i=0;
function repeat(operation, num){	
  if(num>0)
  {
    operation();
    i++;
    repeat(operation,--num);
  }
  return i;
}
module.exports=repeat;

function operation(){
  return 1;
}

console.log("checking operation",operation()===1);
console.log("checking repeat",repeat(operation,3)===3);
