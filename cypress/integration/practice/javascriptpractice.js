var names = ["arun","bala","chai","deepak"];
console.log(names.indexOf("chai"));

var sum=0
var numbers = [2,3,4,5,6,7,8,9]
numbers.pop()
for(var i=0;i<numbers.length;i++){
    sum +=numbers[i]
}
console.log("Sum of all the numbers in the array:"+sum) 

//Reduce
var marks = [2,3]
var sum =0
for(var k=0;k<marks.length;k++){
    sum=sum+marks[k];
}
console.log("Example for reduce method:1 :"+sum)

//Using reduce method, we can simply the above method.

var productusingFilter = marks.reduce((val,mark)=>val*mark,1)

//console.log("Example for reduce method:2 :"+sumusingFilter)

console.log("Example for reduce method:2 :"+productusingFilter)


//Filter


var evenarray = [2,4,6,8,10,11,13]
var newevenarray = []
for(var j=0;j<evenarray.length;j++){
    if(evenarray[j]%2 == 0){
        newevenarray.push(evenarray[j])
    }
}
console.log("Example for filter-1: "+newevenarray)

var numbers = [2,4,6,8,10,11,13]

var evenNumberInTheArray = numbers.filter(num=>num%2==0)

console.log("Example for filter-2: "+evenNumberInTheArray)

//Create a new array with odd numbers and multiply each number with 2 and sum them all together
//Example for 



console.log("******************Excercise_1**********************")
let values = [1,2,3,4,5,6,7,8,11,21,23,24,26]
let oddnumberarray = values.filter(odd=>odd%2==1)
console.log("Odd number array is: "+oddnumberarray)

let multiarray = oddnumberarray.map(multi=>multi*2);
console.log("Multiple each number by "+multiarray);

let sumofarray = multiarray.reduce((sum,mark)=>sum+mark,0)
console.log("Sum of the array: "+sumofarray)

console.log("******************Sorting example-1**********************")

let val = [12,005,99,10,13]

console.log("Sorting example: "+val.sort())

console.log("******************Sorting example-2**********************")
console.log("******************Sorting custom function**********************")

let valueaftersorting=val.sort(function(a,b){
    return a-b;
})
console.log("Sorting custom function result-1: "+valueaftersorting)

//Other way of custom sort
let valueaftersortcustom = val.sort((a,b)=>a-b)
console.log("Sorting custom function result-2: "+valueaftersorting)


console.log("*****************Functions in Javascript**************")

function alpha(a,b){
    var sumOfTwoNumbers=a+b;
    console.log("Sum of two numbers: "+sumOfTwoNumbers)
}
alpha(3,8)

console.log("*****************Calling ananoymous functions in Javascript-1**************")

let productOfNumbers = function(a,b){
    return a*b;
}
console.log("Product of two numbers: "+productOfNumbers(90,2))

console.log("*****************Calling ananoymous functions in Javascript-2**************")

let productOftwoNumbers = (a,b)=> a*b;

console.log("Product of two numbers: "+productOfNumbers(9,2))

console.log("***********String methods**************")
let str = 'Alpha alpha '
let variable=str.split('p')
console.log("Example for split method: "+variable);

let slicestr=str.slice(0,2)
console.log("Example for slice method: "+slicestr);
console.log("Example for trim method: "+str.trim());

let s1 = '12'
let s2 = '16'
let s3 = parseInt(s2)-parseInt(s1)
let s4=s3.toString()
console.log("Example for parseInt: "+typeof(s4))

console.log("***********Excercise with Index methods**************")

let dayString = 'what day is today? Today is friday and tomorrow is saturday'
let value = dayString.indexOf('day')
let count = 0
while(value!=-1){
   count++
   value=dayString.indexOf('day',value+1)
}
console.log("No of days in the string: "+count)

console.log("***********Javascript objects**************")
let person ={
 firstname : 'Arun',
 lastname : 'Muthusamy',
 functionvalue : function(){
     return this.firstname+this.lastname
 }
}
console.log("Retrieving from the 1st object: "+person.firstname)
console.log("Retrieving from the 2nd object: "+person.lastname)
console.log('lastname' in person)
for(let key in person){
    console.log(person[key])
}
console.log("Calling the function in the object: "+person.functionvalue())