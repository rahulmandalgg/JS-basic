// var string = "Hello";
// string += " World";
// console.log(string + "!");



// console.log((5 + 4)/3);
// console.log(undefined/5);

//-----------------------------------


// var x="4",y=4;
// if(x == y) {
// 	console.log("x=4 is equal to y=4");
// }


// x="4"
// if (x==y) {
// 	console.log("x='4' is equal to y=4");
// }


// if(x === y) {
// 	console.log("strict: x='4' is equal to y=4");

// }

// else {
// 	console.log("strict: x='4' is not equal to y=4");
// }

//-----------------------------------



// if (false || null || undefined || "" || 0 || NaN) {
// 	console.log("This line won't execute");
// }
// else {
// 	console.log("All False");
// }

// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All True");
// }

//-----------------------------------

// function a()
// {
// 	return
// 	{
// 		name: "Yaakov"
// 	};
// }

// function b() {
// 	return {
// 		name: "Yaakov"
// 	};
// }

// console.log(a());
// console.log(b());

//-----------------------------------

// var sum=0;
// for(var i=0; i<10; i++) {
// 	console.log(i);
// 	sum += i;
// }
// console.log("sum of 0 through 9 is: "+ sum);

//-----------------------------------

// function orderChickenWith(sideDish) {
// 	sideDish = sideDish || "Whatever!"
// 	console.log("Chicken with " + sideDish);
// }
// orderChickenWith("Noodles");
// orderChickenWith();

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.facColor = "Blue";
//console.log(company);
//console.log("Company CEO name is: " + company.ceo.firstName);
//console.log(company["name"]);
// company["$stock of company"]= 110;
// console.log(company);


// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		facColor: "Blue"
// 	},
// 	"Stock of the company": 100
// };

// console.log(facebook)



//-----------------------------------

// function multiply (x,y) {
// 	return x*y;
// }
// console.log(multiply(2,3));

// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// function makeMultiplier(multiplier) {
// 	var myFunc = function(x) {
// 		return multiplier*x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);console.log(doubleAll(100));


// function doOperrationOn(x, operation) {
// 	return operation(x);
// }

// var result = doOperrationOn(5, multiplyBy3);
// console.log(result);
// result= doOperrationOn(100, doubleAll);
// console.log(result);


//-----------------------------------

// var a =7;
// var b = a;
// console.log("a: " +a);
// console.log("b: " +b);

// b= 5;
// console.log("after b: update");
// console.log("a: "+a);
// console.log("b: "+b);

// var a = {x: 7};
// var b=a;
// console.log(a);
// console.log(b);

// b.x=5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);


//-----------------------------------

// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue=5;
// 	console.log("after:");
// 	console.log(primValue);

// }

// var value=7;
// changePrimitive(value);
// console.log("after changePrimitive, org value:");
// console.log(value);


//-----------------------------------


// function changeObject(objValue) {

// 	console.log("in changeObj....");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x=5;
// 	console.log("after:");
// 	console.log(objValue);

// }
// value= {x: 7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);


//-----------------------------------

// function test() {
// 	console.log(this);
// 	this.mineName = "Rahul";
// }

// test();
// console.log(window.mineName);


//-----------------------------------

// function Circle(radius) {
// 	// console.log(this);
// 	this.radius = radius;

// }

// Circle.prototype.getArea = function () {
// 	return Math.PI * Math.pow(this.radius, 2);
// }

// var myCircle = new Circle(10); //newobject
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);


//-----------------------------------

// var literalCircle = {    //newobject
// 	radius: 10,
// 	getArea: function () {
// 		var self = this;

// 		console.log(this);

// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea());


//-----------------------------------


// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();


//-----------------------------------

// var array = new Array();
// array[0] = "Rahul";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello "+ name);
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);


//short hand array creation

// var names = ["Rahul", "ME", "YOU"];
// console.log(names);

// names[100]= "Jim";


// for(var i = 0; i<names.length; i++) {
// 	console.log("Hello "+names[i]);
// }

// var names2 = ["Rahul", "ME", "YOU"];

// var myObj = {
// 	name:"Rahul",
// 	course: "HTMLLDAD",
// 	platform: "coyrad"
// };

// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
// 	console.log("hello: " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
// 	console.log("hello: " + names2[name]);
// }



//-----------------------------------



// function makeMultiplier (multiplier) {
// 	function b() {
// 		console.log("multiplier is: "+ multiplier);
// 	}
// 	b();
// 	return (
// 		function(x) {
// 			return multiplier *x;
// 		}
// 	); 
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10))



