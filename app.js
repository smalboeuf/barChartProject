//Initializing variables

let barWidth = 20;  //depends on the amount of values passed
let barHeight = 20; //Based off of data values passed

let barColour = "skyblue";
let labelColour = "orange";
let barSpacing = 1;
let barChartAxis = "x"; //horizontal or vertical

//Bar chart title cuztomizable properties
let titleFontSize = 2;
let titleFontColour = "black";

//Data
let barData = [1, 2, 3, 4];
let barOptions = {
  width: 2,
  height: 3
}
let DOMElement = "";

let numOfBars = barData.length;





let drawBarChart = function(data, options, element){
//data is an array
//options is an object (bar colour, label colour, bar spacing, bar chart axes )
//element will be a DOM element name
  barData = data;
  DOMElement = element;

  //Change the bar height
  setBarLengths(barData);

  //Change the bar settings
  setBarOptions(options);

};

let setBarOptions = function(options){
  //Settings the barOptions based on the object
  barOptions.height = options.height;
  barOptions.width = options.width;
}

let setBarLengths = function(barData){
   //Setting the length of the bar based on the data
   let barLengths = document.querySelectorAll('.barLevel');
   for(let i = 0; i < barData.length; i++){
     barLengths[i].style.width = barData[i] + "rem";
   }
}



