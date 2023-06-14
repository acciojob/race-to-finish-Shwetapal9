window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let p1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve('prom1')
	},1000);
})
window.promises.push(p1);
let p2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve('prom2')
	},2000);
})
window.promises.push(p2);
let p3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve('prom3')
	},3000);
})
window.promises.push(p3);
let p4 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve('prom4')
	},4000);
})
window.promises.push(p4);
let p5 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve('prom5')
	},5000);
})
window.promises.push(p5);

// const promises = [promise1, promise2, promise3];
const out = document.getElementById('output');
Promise.any(promises).then((value) => out.innerText=value) ;
