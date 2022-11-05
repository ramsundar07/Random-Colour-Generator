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
	changehtml("#"+randomColor);
}
function changegrd(){
	console.log("gfhfgh");
	// var c1=Math.floor(Math.random()*16777215).toString(16);
	// var c2=Math.floor(Math.random()*16777215).toString(16);
	var deg=Math.floor(Math.random()*360);
	var color = "linear-gradient("+45+"deg," +buttongrad1.value+","+ buttongrad2.value+")";
	bodytag.style.backgroundImage  = color;
	h2.innerHTML =color;
}

function displayrgb(){
	buttongrad2.style.display='none';
	buttongrad1.style.display='none';
	buttonhex.style.display='none';
	buttonrgb.style.display='';
}
function displayhex(){
	buttongrad1.style.display='none';
	buttongrad2.style.display='none';
	buttonrgb.style.display='none';
	buttonhex.style.display='';
}
function displaygrad(){
	buttonrgb.style.display='none';
	buttonhex.style.display='none';
	buttongrad1.style.display='';
	buttongrad2.style.display='';

}



const buttonhex =document.getElementById('genhex');
const buttonrgb=document.getElementById("genrgb");
const h2 = document.getElementById("color");
const buttongrad1 =document.getElementById("gengrad1");
const buttongrad2 =document.getElementById("gengrad2");

buttonrgb.addEventListener("click", changergb);
buttonhex.addEventListener("click", changehex);
buttongrad1.addEventListener("input",changegrd);
buttongrad2.addEventListener("input",changegrd);
buttonrgb.style.display='none';
buttongrad1.style.display='none';
buttongrad2.style.display='none';

document.getElementById("hex").addEventListener("click", displayhex);
document.getElementById("rgb").addEventListener("click", displayrgb);
document.getElementById("grad").addEventListener("click", displaygrad);