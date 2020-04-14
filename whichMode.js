// These are variables used to identify which travel mode is chosen by user
//
// .className returns "section-directions-trip-travel-mode-icon drive"
var isCar = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.drive")
//  .className returns "section-directions-trip-travel-mode-icon transit"
var isBus = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.transit")
//  .className returns "section-directions-trip-travel-mode-icon walk"
var isWalk = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.walk")
//  .className returns "section-directions-trip-travel-mode-icon bike"
var isCycle = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.bike")

var isAmazon = false
var isFlight = false 

//I would add a mode for Amazon, and a mode for flights
//
// END mode-identifying variables  

// default to error, or no mode found  
var mode = {
  'text': 'none',
  'footprint': 0,
  'miles': 0
}

//the first four variables are page objects, so they literally tell us what the page has. objects in CS can have value but by default, they are NULL. null means they have no value and they are empty. but, after lines 1- 10, only one variable will not be null as the user has chosen that variable, so all we have to do is find the non-NULL variable, != means not equal 

if (isCar != null) {
  mode['text'] = 'car';
  var fullMiles = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-description > div:nth-child(1) > div.section-directions-trip-numbers > div.section-directions-trip-distance.section-directions-trip-secondary-text > div").outerText

  var miles = fullMiles.split(" "); //if fullMiles is "25.8 km", var miles will be 25.8 
  //var lie = beyonce is not the best singer in the world
  //var truth = lie.split("not")
  //truth = ["beyonce is ", ["not the best singer in the world]
  //var truth2 = lie.split("the")
  //truth2 = [beyonce is not, best singer in the world]
  //actualTruth = truth[0] + truth2[1]
  //actualTruth = beyonce is best singer in the world
  
  //fullMiles = 25.8 km
  //miles = [25.8, km]
  //miles[0] = 25.8
  
  var parsedMiles = miles[0].replace(/\,/g, "");
  mode['miles'] = parseFloat(parsedMiles)
}

if (isBus != null)
  mode['text'] = 'bus';

if (isWalk != null)
  mode['text'] = 'walk';

if (isCycle != null)
  mode['text'] = 'cycle';

if (isAmazon) //also how to know if user is on amazon
  mode['text'] = 'amazon';
  mode['miles'] = parseFloat(250); //how to calculate this 

if (isFlight) //also how to know if user is on flight
  mode['text'] = 'flight';
  mode['miles'] = parseFloat(2000); //how to calculate this 

mode // 'return' statement, will be read by hcrome.tabs.executeScript in popup.js
