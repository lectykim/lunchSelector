let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(70,70,50,0,2*Math.PI,false);
ctx.fillStyle='red';
ctx.fill();
