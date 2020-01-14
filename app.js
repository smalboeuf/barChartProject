//Initializing variables

//Customizable Properties
let barColour = "skyblue";
let labelColour = "orange";
let barSpacing = 1;
let barChartAxis = "x"; //horizontal or vertical


//Bar chart title cuztomizable properties
let barChartTitle = "Bar Chart";
let titleFontSize = 2;
let titleFontColour = "black";

//Data
let barData = [1, 2, 3, 4, 5];

let barOptions = {
  width: 2,
  height: 3
}

let DOMElement = "";

//form
let settingsForm = document.querySelector('.settings');


setBarLengths(barData, ".chart");



//Starts the creation of the bar graph based on values in the form
function createChart(){
  drawBarChart(barData, barOptions, ".chart");
}

function drawBarChart(data, options, element){
//data is an array
//options is an object (bar colour, label colour, bar spacing, bar chart axes )
//element will be a DOM element name


  DOMElement = element;

  //Change the bar height
  barData = data;
  setBarLengths(barData, DOMElement);

  //Change the bar settings
  setBarOptions(options);

};

function setBarLengths(options){
  //Settings the barOptions based on the object
  barOptions.height = options.height;
  barOptions.width = options.width;
}

function setBarLengths(barData, DOMElement){
   //Setting the length of the bar based on the data
   let chartDiv = document.querySelector(DOMElement);
   console.log(chartDiv);
  for(let i = 0; i < barData.length; i++){
    let barTemplate = document.createElement("div");
    barTemplate.classList.add("barDiv");
    barTemplate.innerHTML += "<h4>Title "+(i+1)+"</h4>";
    barTemplate.innerHTML += "<div class = bar><div class = barLevel></div></div>"

    chartDiv.appendChild(barTemplate);

  }

   let barLengths = document.querySelectorAll('.barLevel');
   for(let i = 0; i < barData.length; i++){
     barLengths[i].style.width = barData[i] + "rem";
   }
}



