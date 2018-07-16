var x = 5;
var y = 6;
x = x + y;// x=11
y=x-y;// y=5
x=x-y;
console.log(x);
////////
//*****
var n=5;
var x="";
for(var i=1; i<=n; i++){
 x += "*";
  console.log(x);
}
///////
REVERSE
function fun(x){
x=x+"";
return x.split("").reverse().join("");
}
console.log(fun(12345));
//////////
function reverse(s) {
  var reversed = '';
  for (var i = s.length - 1; i >= 0; i--)
    reversed += s[i];
    console.log(reversed)
  return reversed;
}

var a=reverse("batya");
console.log(a);
/////////////////////
PALINDROME
function Palindrome(s){
  for(var i=0; i<s.length/2; i++){
    if(s[i]==s[s.length-1-i])
      return true;
    else 
      return false;
  }
}
var a = Palindrome("madam");
console.log(a);
////////////////////

//SIMPLE CIPHER
function encript(s){
var arr=[];
var converted=[];
for (var i = 0; i < s.length; i++) {
  arr[i] = s.charCodeAt(i);
 converted[i] = String.fromCharCode(arr[i]+1); 
}
  return converted.join('');
}
encript('batya');
/////////////
//HARDER CIPHER
function harderEncrypt(str, num){
    var arr=[];
    var converted=[];
    for(var i=0; i<str.length; i++){
      arr.push(str.charCodeAt(i));
      arr[i]=arr[i]+num.charCodeAt(i%num.length)-96;
    }
    console.log(arr);
  }
  harderEncrypt("batya", "cab");