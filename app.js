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
let barData = [1, 2, 3, 4, 5];
let barOptions = {
  width: 2,
  height: 3
}
let DOMElement = "";

let numOfBars = barData.length;



console.log(setBarLengths(barData, ".chart"));



function drawBarChart(data, options, element){
//data is an array
//options is an object (bar colour, label colour, bar spacing, bar chart axes )
//element will be a DOM element name


  DOMElement = "chart";

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

  console.log(chartDiv);


   let barLengths = document.querySelectorAll('.barLevel');
   for(let i = 0; i < barData.length; i++){
     barLengths[i].style.width = barData[i] + "rem";
   }
}



