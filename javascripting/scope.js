     var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;
	console.log("1");
         (function secondFunction(){
             var b = 8;
console.log("2");
console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){
                 var a = 7, c = 9;
console.log("3");
                 (function fourthFunction(){
                     var a = 1, c = 8;
console.log("4");
                 })();
             })();
         })();
     })();
