"use strict";

var x = 10;
var y = 20;
var a = x + y;
var b;

document.getElementById("saida1").innerHTML = a;
{
  let z = 30;
  var w = 40;
  b = z + w;
  document.getElementById("saida2").innerHTML = b;
  
}
var c = b + a;
document.getElementById("saida3").innerHTML = c;
