//Define a function called 'write'
//A function is a GROUP of statements (instructions) that we always want to run all at once
//Always just descriptive names to functions
//This is called a 'Function Definition'. 
//Functions DO NOT run automatically. We need to 'call' them to tell the computer to run them
//The 'function call' here happens from our form  'action' when the button is called by saying 'write()'
function write(){
	
	var hasError = validate();
	
	if(!hasError){
		var season = document.querySelector('input[name="season"]:checked').value;
		var year = document.getElementById('year').value;
		var boyName1 = document.getElementById('boyName1').value;
		var girlName1 = document.getElementById('girlName1').value;
		var girlName2 = document.getElementById('girlName2').value;
		var timeOfTheDay = document.getElementById('timeOfTheDay').value;
		var brandName1 = document.getElementById('brandName1').value;
		var brandName2 = document.getElementById('brandName2').value;
		var number1 = document.getElementById('number1').value;
		var number2 = document.getElementById('number2').value;
		var number3 = document.getElementById('number3').value;
		var food = document.getElementById('food').value;
		var drink = document.getElementById('drink').value;
		var colour1 = document.getElementById('colour1').value;
		var colour2 = document.getElementById('colour2').value;
		var singer = document.getElementById('singer').value;
		var expression1 = document.getElementById('expression1').value;
		var expression2 = document.getElementById('expression2').value;
		var expression3 = document.getElementById('expression3').value;
		var animal = document.getElementById('animal').value;
		var pet = document.getElementById('pet').value;
		var carMake = document.getElementById('carMake').value;
		var streetName = document.getElementById('streetName').value;
		var townName = document.getElementById('townName').value;
		var hero = document.getElementById('hero').value;
		var favePlace = document.getElementById('favePlace').value;

		//console.log("Holy! It is working!");
		document.getElementById('output').innerHTML = "";
		
		document.getElementById('output').innerHTML += "<p>";
		
		document.getElementById('output').innerHTML += "It was during a " + season + " break back in the year " + year + ". ";
		document.getElementById('output').innerHTML += "Me and three of my friends went to the woods to go camping. ";
		document.getElementById('output').innerHTML += "Me, " + boyName1 + ", " + girlName1 + " and " + girlName2 + " settled our camp in a small cave. ";
		document.getElementById('output').innerHTML += "It was already " + timeOfTheDay + " we started our campfire using a match with a brand name " + brandName1 +". ";
		document.getElementById('output').innerHTML += "The weather was cold, it was like " + number1 + " degrees and the campfire helped us warmed a lot. ";
		document.getElementById('output').innerHTML += "We brought " + food + " to grill over our campfire for dinner. "
		document.getElementById('output').innerHTML += "We also brought " + drink + " in can that we drink while having our barbeque " + food + ". ";
		document.getElementById('output').innerHTML += "After finishing our meal, we setup our " + colour1 + " tent and prepare to go to sleep. ";
		document.getElementById('output').innerHTML += "While lying down we were talking until everyone fell asleep except me. I switched on my small stereo and played " + singer + " song to get some sleep. ";
		document.getElementById('output').innerHTML += "I heard " + girlName2 + " snoring so loud but I decided to get some sleep. ";
		document.getElementById('output').innerHTML += "</p>";
		
		document.getElementById('output').innerHTML += "<p>";
		document.getElementById('output').innerHTML += "But just after " + number2 + " hours past, we heard a loud noise. ";
		document.getElementById('output').innerHTML += expression1+"! shouted a wild dark animal standing in front of us. All of us got up and was really scared. ";
		document.getElementById('output').innerHTML += "We took a good look it was a giant black " + animal + ". ";
		document.getElementById('output').innerHTML += "Then the giant black " + animal + " angrily said, \"My name is " + pet + ", I am the king of the woods. I don’t like people setting up a campfire here, go home!\" ";
		
		document.getElementById('output').innerHTML += "I grabbed " + girlName1 + " hand and decided to run, " + boyName1 + " grabbed " + girlName2 + " hand and run to the opposite direction. ";
		document.getElementById('output').innerHTML += "We ran towards our car a " + carMake + " and saw our friends waiting there. ";
		document.getElementById('output').innerHTML += boyName1 + " started the car but it was not starting. The we saw " + pet + " coming from behind running towards us. We were so scared but the car wont start running. ";
		document.getElementById('output').innerHTML += "Then suddenly we heard a loud bang from the back of the car we all shouted " + expression2 + "! then the car started moving. " + pet + " was giving us a push then the car started. ";
		document.getElementById('output').innerHTML += "</p>";
		
		document.getElementById('output').innerHTML += "<p>";
		
		document.getElementById('output').innerHTML += "We sped off going to " + streetName + " street then turn in the direction going to " + townName + " town our home. We were speeding so fast that a police car on the side of the road noticed and chase us. ";
		document.getElementById('output').innerHTML += "We saw a police car with blinking " + colour2 + " siren behind us and heard him \"Pull over! This is the police\". ";
		document.getElementById('output').innerHTML += "We pulled over then the police officer went to our car and said \"I am officer " + hero + ", you were over speeding at " + number3 + " miles per hour. License and registration please.\" ";
		document.getElementById('output').innerHTML += boyName1 + " remembered we left all our staff in the woods including his " + brandName2 +" wallet with his license in it. ";
		document.getElementById('output').innerHTML += "Officer " + hero + " orders all of us to step out of the car but before we opened the door somebody tapped him from behind, it was " + pet + ".  ";
		document.getElementById('output').innerHTML += expression3 + "! shouted officer " + hero + ". We sped off again leaving the two behind. ";
		document.getElementById('output').innerHTML += "From then on, we never went back to Mount " + favePlace + " Park again. ";
		document.getElementById('output').innerHTML += "</p>";
  		
	}
}

function validate(){
	var hasError = false;
	
	var year = document.getElementById('year');
	var boyName1 = document.getElementById('boyName1');
	var girlName1 = document.getElementById('girlName1');
	var girlName2 = document.getElementById('girlName2');
	var brandName1 = document.getElementById('brandName1');
	var brandName2 = document.getElementById('brandName2');
	var number1 = document.getElementById('number1');
	var number2 = document.getElementById('number2');
	var number3 = document.getElementById('number3');
	var food = document.getElementById('food');
	var drink = document.getElementById('drink');
	var colour1 = document.getElementById('colour1');
	var colour2 = document.getElementById('colour2');
	var singer = document.getElementById('singer');
	var expression1 = document.getElementById('expression1');
	var expression2 = document.getElementById('expression2');
	var expression3 = document.getElementById('expression3');
	var animal = document.getElementById('animal');
	var pet = document.getElementById('pet');
	var carMake = document.getElementById('carMake');
	var streetName = document.getElementById('streetName');
	var townName = document.getElementById('townName');
	var hero = document.getElementById('hero');
	var favePlace = document.getElementById('favePlace');
	
	if(year == null || year.value == '') {
		document.getElementById('year').focus();
		alert('Please enter your most memorable year');	
		hasError = true;
	}
	else if(boyName1 == null || boyName1.value.trim() == '') {
		document.getElementById('boyName1').value = "";
		document.getElementById('boyName1').focus();
		alert('Please enter a Boy\'s Name');	
		hasError = true;
	}
	else if(girlName1 == null || girlName1.value.trim() == '') {
		document.getElementById('girlName1').value = "";
		document.getElementById('girlName1').focus();
		alert('Please enter a Girl\'s Name');	
		hasError = true;
	}
	else if(girlName2 == null || girlName2.value.trim() == '') {
		document.getElementById('girlName2').value = "";
		document.getElementById('girlName2').focus();
		alert('Please enter a Girl\'s Name');	
		hasError = true;
	}
	else if(brandName1 == null || brandName1.value.trim() == '') {
		document.getElementById('brandName1').value = "";
		document.getElementById('brandName1').focus();
		alert('Please enter a Brand Name');	
		hasError = true;
	}
	else if(brandName2 == null || brandName2.value.trim() == '') {
		document.getElementById('brandName2').value = "";
		document.getElementById('brandName2').focus();
		alert('Please enter a Brand Name');	
		hasError = true;
	}
	else if(number1 == null || number1.value == '') {
		document.getElementById('number1').focus();
		alert('Please enter a number');	
		hasError = true;
	}
	else if(number2 == null || number2.value == '') {
		document.getElementById('number2').focus();
		alert('Please enter a number');	
		hasError = true;
	}
	else if(number3 == null || number3.value == '') {
		document.getElementById('number3').focus();
		alert('Please enter a number');	
		hasError = true;
	}
	else if(food == null || food.value.trim() == '') {
		document.getElementById('food').value = "";
		document.getElementById('food').focus();
		alert('Please enter your favourite food');	
		hasError = true;
	}
	else if(drink == null || drink.value.trim() == '') {
		document.getElementById('drink').value = "";
		document.getElementById('drink').focus();
		alert('Please enter your favourite drink ');	
		hasError = true;
	}
	else if(colour1 == null || colour1.value.trim() == '') {
		document.getElementById('colour1').value = "";
		document.getElementById('colour1').focus();
		alert('Please enter a colour');	
		hasError = true;
	}
	else if(colour2 == null || colour2.value.trim() == '') {
		document.getElementById('colour2').value = "";
		document.getElementById('colour2').focus();
		alert('Please enter a colour');	
		hasError = true;
	}
	else if(singer == null || singer.value.trim() == '') {
		document.getElementById('singer').value = "";
		document.getElementById('singer').focus();
		alert('Please enter your favourite singer');	
		hasError = true;
	}
	else if(expression1 == null || expression1.value.trim() == '') {
		document.getElementById('expression1').value = "";
		document.getElementById('expression1').focus();
		alert('Please enter an expression');	
		hasError = true;
	}
	else if(expression2 == null || expression2.value.trim() == '') {
		document.getElementById('expression2').value = "";
		document.getElementById('expression2').focus();
		alert('Please enter an expression');	
		hasError = true;
	}
	else if(expression3 == null || expression3.value.trim() == '') {
		document.getElementById('expression3').value = "";
		document.getElementById('expression3').focus();
		alert('Please enter an expression');	
		hasError = true;
	}
	else if(animal == null || animal.value.trim() == '') {
		document.getElementById('animal').value = "";
		document.getElementById('animal').focus();
		alert('Please enter a type of animal');	
		hasError = true;
	}
	else if(pet == null || pet.value.trim() == '') {
		document.getElementById('pet').value = "";
		document.getElementById('pet').focus();
		alert('Please enter your pet\'s name');	
		hasError = true;
	}
	else if(carMake == null || carMake.value.trim() == '') {
		document.getElementById('carMake').value = "";
		document.getElementById('carMake').focus();
		alert('Please enter a car maker or model');	
		hasError = true;
	}
	else if(streetName == null || streetName.value.trim() == '') {
		document.getElementById('streetName').value = "";
		document.getElementById('streetName').focus();
		alert('Please enter your grandfather\'s name');	
		hasError = true;
	}
	else if(townName == null || townName.value.trim() == '') {
		document.getElementById('townName').value = "";
		document.getElementById('townName').focus();
		alert('Please enter your grandmother\'s name');	
		hasError = true;
	}
	else if(hero == null || hero.value.trim() == '') {
		document.getElementById('hero').value = "";
		document.getElementById('hero').focus();
		alert('Please enter your favourite hero\'s name');	
		hasError = true;
	}
	else if(favePlace == null || favePlace.value.trim() == '') {
		document.getElementById('favePlace').value = "";
		document.getElementById('favePlace').focus();
		alert('Please enter your favourite place');	
		hasError = true;
	}
		
	return hasError;
}

//This is what will occur inside the function so move this block of comments inside the function once created

//First off, let's test that the button is calling this function with a simple console log that prints out some message



//variable declaration block
//This is when we create the variables that we will need for this set of instructions.
//Remember, variables are temporary holders of data - it can change depending on conditions that we set in the code
//We assign variables a VALUE when we want them to hold something



//Create a variable called 'userName' and make it hold (equal) whatever the user has entered into the 'name' input element
//Console log that variable to test to see if it is pulling the info



//Create another variable called 'ani' that hold the info from the animal field
//Console log that as well [You can just move the above log here and change the var]



//Create another variable called 'seas' that will hold the VALUE of the radio selection 
//Console log that as well



//Create a var called 'seasMessage'. Don't have it equal anything yet. 
//We will use this to store a custom message that we will send to the user 




//Write a conditional if statement 
//The first if will check to see if 'seas' equals (==) 'winter'
    //if it does then set 'seasMessage' to a custom STRING (a bit of text) that relates to winter
//the else if will check to see if it equals 'spring' and set 'seasMessage' to something different
//do the same for 'summer' and 'fall'






//test seasMessage with a console log



//Now that we know all this working with the console, let's get that information to the user!
//Change the innerHTML of 'output' to have our stories.jpg image 
//(this is just a review and isn't based on the user input - although it could be!)



//Add to the 'output' a message that greets them by name



//Add a message that says your favourite animal (which will always be what they entered)



//Lastly, we will add a message and our custom 'seasMessage'


//YAY!!! YOU DID IT!!!!
