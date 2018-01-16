function countWords(inputWords){
  return inputWords.reduce(function(acc,currentValue){
    if(currentValue in acc)
      acc[currentValue]++;
    else {
      acc[currentValue]=1;
    }
    return acc;
  },{});
}
module.exports=countWords;

function equalObject(a,b){
   var aProps = Object.getOwnPropertyNames(a);
   var bProps = Object.getOwnPropertyNames(b);
   if(aProps.length!==bProps.length)
          return false;
   else{
          for(let i=0;i<aProps.length;i++)
          {
            let propName_A=aProps[i];
            let propName_B=bProps[i];
            if(propName_A!==propName_B)
                return false;
          }
          return true;
        }
}

console.log("checking equalObject",equalObject({a:1,b:2,c:3},{a:1,b:2,c:3})===true);
console.log("checking equalObject",equalObject({a:1,b:2,c:3},{a:1,b:2,d:3})===false);
console.log("checking equalObject",equalObject({a:1,b:2,c:3},{a:1,b:2})===false);
console.log("reducing objects correctly",equalObject(countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']),{Apple: 2,
  Banana: 1,Durian: 3})===true);
