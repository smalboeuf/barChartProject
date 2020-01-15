//Initializing variables

//form
let settingsForm = document.querySelector('.settings');
settingsForm.addEventListener('submit', createChart);

//Custamizable Properties
let barColour = document.getElementById('barColour').value;
let labelColour = document.getElementById('labelColour').value;
let barSpacing = document.getElementById('barSpacing').value;
//Figure out barChartAxis changes
let barChartAxis = document.getElementById('barChartAxis').value;

//Bar chart title cuztomizable properties
let barChartTitle = "Bar Chart";
let titleFontSize = 2;
let titleFontColour = "black";




console.log(barColour);

//Data
let barData = [1, 2, 3, 4, 5];

let barOptions = {
  width: 2,
  height: 3
}

let DOMElement = "";






setBarLengths(barData, ".chart");



//Starts the creation of the bar graph based on values in the form
function createChart(e){
  //Calls all the functions that will make the appropriate changes
  e.preventDefault();

  changeBarSettings();
  //drawBarChart(barData, barOptions, ".chart");
  //changeTitleSettings();

  e.preventDefault();
}


function changeTitleSettings(){

}


function changeBarSettings(){
  //Changing the colour of the bar
  barLevel = document.getElementsByClassName('barLevel');
  barColour = document.getElementById('barColour').value;
  for(let i = 0; i < barLevel.length; i++){
    barLevel[i].style.backgroundColor = barColour;
  }

  changeBarLabelColour();
  changeBarSpacing();

}

function changeBarLabelColour(){
  //Changing the colour of the bar
  barLabel = document.getElementsByClassName('barLabel');
  labelColour = document.getElementById('labelColour').value;
  for(let i = 0; i < barLevel.length; i++){
    barLabel[i].style.color = labelColour;
  }
}

function changeBarSpacing(){
  //Change the padding in between each bar div
}

function drawBarChart(data, options, element){

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
   chartDiv.innerHTML = "";
  for(let i = 0; i < barData.length; i++){
    let barTemplate = document.createElement("div");
    barTemplate.classList.add("barDiv");
    barTemplate.innerHTML += "<h4 class=barLabel>Title "+(i+1)+"</h4>";
    barTemplate.innerHTML += "<div class = bar><div class = barLevel></div></div>";


    chartDiv.appendChild(barTemplate);

  }

   let barLengths = document.querySelectorAll('.barLevel');
   for(let i = 0; i < barData.length; i++){
     barLengths[i].style.width = barData[i] + "rem";
   }
}



