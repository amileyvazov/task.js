
function isPolindrome(num){
   var x=0;
    y=num;
   sum=0;
   if(num>9){
     while(num>0){
        x=num%10;
        num=(num-x)/10;
        sum=sum*10+x;
     }
     
     if(y == sum){
        alert("Eded polidromdur");
     }
     else{
        alert("Eded polidrom deyil");
     };
    }
   else{
    alert("duzgun reqem daxil edin");
   };
}
isPolindrome(prompt("Ededin polidrom olub-olmadigini yoxlayin"));