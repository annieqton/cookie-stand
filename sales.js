'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeTable = document.getElementById('store_data');
var allStores = [];
var hourlyTotal = [];
var totalCookiesSoldAllLocations = 0;
var inputForm = document.getElementById('new-location');

//-----------------------------------------------------------------------------
function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalDailyCookiesSales = 0;
  this.randCustPerHourArray = [];
  this.cookiesSoldPerHourArray = [];

  allStores.push(this);

  this.calcRandomCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHourArray.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };

  this.calcCookiesSoldPerHour = function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHourArray.push(Math.ceil(this.randCustPerHourArray[i] * this.avgCookiesPerCust)); //average per hour cookies sold.  use math.ceil to round up the number of cookiesSoldPerHour
      this.totalDailyCookiesSales += this.cookiesSoldPerHourArray[i];
    }
    totalCookiesSoldAllLocations +=this.totalDailyCookiesSales;
  }

  this.render = function() {
    this.calcCookiesSoldPerHour();
    var tableRow = document.createElement('tr');

    var tableData = document.createElement('td');
    tableData.textContent = this.locationName;
    tableRow.appendChild(tableData);

    for (var i =0; i < hours.length; i++) {
      tableData = document.createElement('td'); //creating a new data row so it won't reach above and replace data as the for loop runs.
      tableData.textContent = this.cookiesSoldPerHourArray[i];
      tableRow.appendChild(tableData);
    }

    tableData = document.createElement('td');
    tableData.textContent = this.totalDailyCookiesSales;
    tableRow.appendChild(tableData);
    storeTable.appendChild(tableRow);
  };
  this.calcCookiesSoldPerHour();
}

// ----------------------------------------------------------------------------

function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

// ----------------------------------------------------------------------------

//this is the header row that displays the hour across the top
function makeHeaderRow() {
  var tableRow = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = 'Locations';
  tableRow.appendChild(headerCell); // <<<<<<<

  for (var i = 0; i < hours.length; i++) {
    headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    tableRow.appendChild(headerCell);
  }

  var totalDailyCell = document.createElement('th');
  totalDailyCell.textContent = 'Daily Total';
  tableRow.appendChild(totalDailyCell);
  storeTable.appendChild(tableRow);
}

// ----------------------------------------------------------------------------

  // this calculate the cookies sales per hour for all stores
for (var i = 0; i < hours.length; i++) {
  var totalSalesPerHour = 0;
  for (var j = 0; j < allStores.length; j++) {
    totalSalesPerHour += allStores[j].cookiesSoldPerHourArray[i];
  }
  hourlyTotal.push(totalSalesPerHour);
}

// ----------------------------------------------------------------------------

  // this is the footer row that gives the tally of cookies sales per hour for all stores
function makeFooterRow() {
  var tableRow = document.createElement('tr');

  var footerCell = document.createElement('th');
  footerCell.textContent = 'Hourly Total';
  tableRow.appendChild(footerCell); // <<<<<<<

  for (var i = 0; i < hours.length; i++){
    footerCell = document.createElement('th');
    footerCell.textContent = hourlyTotal[i];
    tableRow.appendChild(footerCell);
  }
  footerCell = document.createElement('th');
  footerCell.textContent = totalCookiesSoldAllLocations;
  tableRow.appendChild(footerCell);

  storeTable.appendChild(tableRow);
}

// ----------------------------------------------------------------------------

// this function is for the event handler for the submission of the input
function handleInputSubmit(event) {

  event.preventDefault(); // prevents page reload on a 'submit' event
  //console.log(event);

  //validation to prevent empty form fields
  if((!event.target.name.value || !event.target.name.value) && (!event.target.min.value || !event.target.min.value) && (!event.target.max.value || !event.target.max.value) && (!event.target.avg.value || !event.target.avg.value)) {
    return alert ('Fields cannot be empty!');
  }

  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  // validation to keep text input separate from numeric input
  if (isNaN(name) === false || isNaN(min) === true || isNaN(max) === true || isNaN(avg === true)){
    alert('Input is invalid');
  }

  new Store(name, min, max, avg);

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;

// this is to clean the old table
  storeTable.innerHTML = '';

// these are to call the funtions to populate the table with new data
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

// ----------------------------------------------------------------------------

new Store('First and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

// the order to function called matters
makeHeaderRow();
renderAllStores();
makeFooterRow();


// call functions for event handler
//Event listener for comment submission form
inputForm.addEventListener('submit', handleInputSubmit);
