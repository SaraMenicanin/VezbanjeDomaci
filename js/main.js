// task 1
 let arrayOfArrays=[[1,2,3],[4,5,6],[7,8,9]];
 let i=0;
 let j=0;
 for(i=0;i<arrayOfArrays.length;i++){
 	for(j=0;j<arrayOfArrays.length;j++){
 		console.log("At position "+ i + ",subposition "+ j + ",value is " + arrayOfArrays[i][j]);
 	}
 }

 // task 2 
 function printObjects(arrayOfObjects){
 	let i;
 	for(i=0;i<arrayOfObjects.length;i++){
 		console.log("Name is " + arrayOfObjects[i].name + " and age is "+ arrayOfObjects[i].age);

 	}

 }
 arrayOfObjects=[{
 	name:"Sara",
 	age:22
 },{
 	name:"Borislav",
 	age:22
 },{
 	name:"Tamara",
 	age:22
 }];
 printObjects(arrayOfObjects);

 // Vežbanje sa časa 

// task 1
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};
function repack(newData){
	var repackData={}
	repackData[newData.name]=newData.name;
	repackData[newData.lastName]=newData.lastName;
	repackData[newData.status]=newData.status;
	return repackData;
}
console.log(repack(someData))

// task 2
var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
function newArray(array){
	var arraySecond= new Array();
	for (var i=0;i<array.length;i++){
		if(array[i].length){
			for(var j=0;j<array[i].length;j++){
				arraySecond[arraySecond.length]=array[i][j];
			}
		}else {
			arraySecond[i]=array[i];
		}
	}
	return arraySecond;
}
console.log(newArray(someData))
//task 3
var numbers = [13, 45, 56, [32, 11], 27, [55, 92]];
var calculateNumbers=takeOut(numbers,joinNumbers)
function takeOut(task,join){
	var someNumber=[];
	for(let i=0;i<task.length;i++){
		if(typeof task[i]==="object"){
			someNumber[someNumber.length]=task[i];
		}
	}return join(someNumber)
}
function joinNumbers(task){
	var someNumberSecond=[];
	for(let i=0;i<task.length;i++){
		for(let j=0;j<task.length;j++){
			someNumberSecond[someNumberSecond.length]=task[i][j];
		}
	}return someNumberSecond
}
console.log(calculateNumbers)


// task 4
 var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};
function checkName(person){
	if(person.hasOwnProperty('name')){
		return function(otherName){
			delete person.name;
			console.log("Property name has been deleted");
		}
	}else{
		return function(otherName){
			person.name = otherName;
			console.log("Name "+ person.name);
		}
	}
}
checkName(someData)("Jane");
checkName(someData)("Jane");
// task 5 
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};
someData.methodOne=function(){
	if(this.name){
		this.methodTwo=function(){
			delete this.name;
			console.log(this);
			this.methodThree=function(){
				this.name="Mike";
			}; this.methodThree()
			
		};
		this.methodTwo()
	}
};
someData.methodOne()
console.log(someData);