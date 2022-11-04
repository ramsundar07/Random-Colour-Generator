const bodytag=document.getElementsByTagName('body')[0];
function changehtml(color){
	console.log("gfhfgh");
	bodytag.style.background=color;
	h2.innerHTML =color;
}

function changergb() {
	console.log("gfhfgh");
	let r=Math.floor((Math.random() * 256) + 1);
	let g=Math.floor((Math.random() * 256) + 1);
	let b=Math.floor((Math.random() * 256) + 1);
	var colour = "rgb("+r+","+g+","+b+")"
	changehtml(colour);
}

function changehex(){	
	console.log("gfhfgh");
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	changehtml(randomColor);
}
function changegrd(){
	console.log("gfhfgh");
	var c1=Math.floor(Math.random()*16777215).toString(16);
	var c2=Math.floor(Math.random()*16777215).toString(16);
	var color = "linear-gradient("+45+"deg,#" +c1+",#"+ c2+")";
	bodytag.style.backgroundImage  = color;
	h2.innerHTML =color;
}

function displayrgb(){
	buttongrad.style.display='none';
	buttonhex.style.display='none';
	buttonrgb.style.display='';
}
function displayhex(){
	buttongrad.style.display='none';
	buttonrgb.style.display='none';
	buttonhex.style.display='';
}
function displaygrad(){
	buttonrgb.style.display='none';
	buttonhex.style.display='none';
	buttongrad.style.display='';

}



const buttonhex =document.getElementById('genhex');
const buttonrgb=document.getElementById("genrgb");
const h2 = document.getElementById("color");
const buttongrad =document.getElementById("gengrad");

buttonrgb.addEventListener("click", changergb);
buttonhex.addEventListener("click", changehex);
buttongrad.addEventListener("click",changegrd)
buttonrgb.style.display='none';
buttongrad.style.display='none';

document.getElementById("hex").addEventListener("click", displayhex);
document.getElementById("rgb").addEventListener("click", displayrgb);
document.getElementById("grad").addEventListener("click", displaygrad);
