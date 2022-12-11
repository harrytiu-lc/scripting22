//$(function () {
//    // Handler for .ready() called.
//    $("img").on("click",function(){
//        event.preventDefault();
//        $(this).toggleClass("activeImg");
//    })
//});

function showCustName(){
	document.getElementById("output").innerHTML = "<br><h3>Hello "+document.getElementById("custname").value+", Your Order is Here</h3><br>" ;
}

function selectItem(param){
	//event.preventDefault();	
	//alert(param.id + ' || ' + param.name);
	//document.getElementsByName(param.name).classList.remove
	for(var i=0;i<document.getElementsByName(param.name).length;i++){
		document.getElementsByName(param.name)[i].classList.remove("activeImg");
	}
	document.getElementById(param.id).classList.toggle("activeImg");
}

// JavaScript Document

// initializing a variable - this variable is an OBJECT
// the properties will hold the filename of the image we are going to show
var order = {
	plate: "",
	mainCourse: "",
	sideCourseTop: "",
	sideCourseBottom: "",
	soup: "",
	drink: ""
}

// this function will set the face properties
function setPlate(param, plate){
	selectItem(param);
	//console.log("Set Plate to "+plate);
	order.plate=(plate);
	//console.log("Food Plate is "+order.plate);
	// run the face builder 
	orderBuilder();
}

function setMainCourse(param, mainCourse){
	selectItem(param);
	order.mainCourse = mainCourse;
	orderBuilder();
}

function setSideCourseTop(param, sideCourseTop){
	selectItem(param);
	order.sideCourseTop = sideCourseTop;
	orderBuilder();
}

function setSideCourseBottom(param, sideCourseBottom){
	selectItem(param);
	order.sideCourseBottom = sideCourseBottom;
	orderBuilder();
}

function setSoup(param, soup){
	selectItem(param);
	order.soup = soup;
	orderBuilder();
}

function setDrink(param, drink){
	selectItem(param);
	order.drink = drink;
	orderBuilder();
}

// this function will place the images on the page
function orderBuilder(){
	if(order.plate!=""){
		document.getElementById("plate").innerHTML = "<img class='img-fluid' src='"+order.plate+"' alt='plateSelected'>" ;
	}
	if(order.mainCourse!=""){
		document.getElementById("mainCourse").innerHTML = "<img class='img-fluid' src='"+order.mainCourse+"' alt='mainCourseSelected'>" ;
	}
	if(order.sideCourseTop!=""){
		document.getElementById("sideCourseTop").innerHTML = "<img class='img-fluid' src='"+order.sideCourseTop+"' alt='sideCourseTopSelected'>" ;
	}
	if(order.sideCourseBottom!=""){
		document.getElementById("sideCourseBottom").innerHTML = "<img class='img-fluid' src='"+order.sideCourseBottom+"' alt='sideCourseBottomSelected'>" ;
	}
	if(order.soup!=""){
		document.getElementById("soup").innerHTML = "<img class='img-fluid' src='"+order.soup+"' alt='soupSelected'>" ;
	}
	if(order.drink!=""){
		document.getElementById("drink").innerHTML = "<img class='img-fluid' src='"+order.drink+"' alt='drinkSelected'>" ;
	}
}

