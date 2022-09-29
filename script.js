let input = document.getElementById("input");

function one(){
  let one = document.getElementById("block1").value;
   input.value += one ;

}


function two(){
  let two = document.getElementById("block2").value;
   input.value += two ;

}
function three(){
  let three = document.getElementById("block3").value;
   input.value += three ;

}
function four(){
  let four = document.getElementById("block4").value;
   input.value += four ;

}
function five(){
  let five = document.getElementById("block5").value;
   input.value += five ;

}
function six(){
  let six = document.getElementById("block6").value;
   input.value += six ;

}
function seven(){
  let seven = document.getElementById("block7").value;
   input.value += seven ;

}
function eight(){
  let eight = document.getElementById("block8").value;
   input.value += eight ;

}
function nine(){
  let nine = document.getElementById("block9").value;
   input.value += nine ;

}function  zero(){
  let   zero= document.getElementById("block0").value;
   input.value +=   zero;

}
function dot(){
  let dot = document.getElementById("dot").value;
   input.value += dot ;

}
function clr(){
    input.value = "" ;
  console.log(input.value);

}
function plus(){
  let plus = document.getElementById("plus").value;
  console.log(plus);
   input.value += plus ;

}
function minus(){
  let minus = document.getElementById("minus").value;
   input.value += minus ;

}
function multiply(){
  let multiply = document.getElementById("multiply").value;
   input.value += multiply ;

}
function divide(){
  let divide = document.getElementById("divide").value;
   input.value += divide ;

}
function ans(){
  let ans = document.getElementById("input").value;
  
  input.value = eval(ans);
 

}
