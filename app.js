console.log("salam");
const newOption = document.querySelector("#optionCreat");
const selectNumber = document.querySelector("#selectNum");


let x = 0;
let i = 0;

/* const newHeader = document.createElement("h1");
newHeader.textContent = "Added Header!";
document.querySelector("body").appendChild(newHeader); */







const removeButton = document.querySelector("#removeb");
const addButton = document.querySelector("#addb");



addButton.addEventListener("click", pressAdd);
removeButton.addEventListener("click", pressRemove);


/*
p.forEach(function (item, index) {
	var num = index + 1;
	item.textContent = item.textContent + " Updated";


	console.log(`${num}  ${item.innerText}`);


});
*/

function pressAdd(e) {
	if (selectNumber.selectedIndex === 5) {
		min = 100000;
		max = 999999;
	} else if (selectNumber.selectedIndex === 4) {
		min = 10000;
		max = 99999;
	} else if (selectNumber.selectedIndex === 3) {
		min = 1000;
		max = 9999;
	} else if (selectNumber.selectedIndex === 2) {
		min = 100;
		max = 999;
	} else if (selectNumber.selectedIndex === 1) {
		min = 10;
		max = 99;
	} else {
		min = 0;
		max = 9;
	}
	i++;


	removeButton.innerHTML = "Number is : " + i;
	e.target.textContent = "Number is : " + i;
	//const newP = document.createElement(`p`);
	const newOption = document.createElement(`option`);
	newOption.id = i;
	console.log("Function add run");




	//const newLine = document.createElement("br");
	newOption.textContent = max + Math.floor(Math.random() * (min - max));

	//newLine.textContent = "";

	document.querySelector("#optionCreat").appendChild(newOption);
	//document.querySelector("body").appendChild(newLine);





}


function pressRemove(e) {


	y = newOption.children.length;




	console.log("i is" + i);
	e.target.textContent = "Number is : " + y;


	addButton.innerHTML = "Number is : " + i;

	const premove = document.getElementById(i);


	console.log(premove);
	console.log("Function remove run");




	//const newLine = document.createElement("br");
	if (i === 0) { return; }
	premove.remove();
	i--;



}
