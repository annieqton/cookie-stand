'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeTable = document.getElementById('storejs');

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
  };

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
    storeTable.appendChild(tableRow);

  };
}

var allStores = [];

new Store('First and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

console.log(allStores);

function storeTablesJS() {

  function makeHeaderRow() {
    var tableRow = document.createElement('tr');
    tableRow.textContent = '_';

    for (var i = 0; i < hours.length; i++){
      var tableHead = document.createElement('th');
      tableHead.textContent = hours[i];
      tableRow.appendChild(tableHead);
    }
    storeTable.appendChild(tableRow);
    console.log(storeTable);
  }
  makeHeaderRow();

  console.log(allStores);

  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }

//create another function for footer to tally total per hours.
//allStores has indexes [0], [1], [2], [3], [4] which correspond to each store location.
//Insides allStores, cookiesSoldPerHourArray has indexes [0], [1], [2] .... [13] which correspond to the cookies sold per hour.


// var allStoresCookiesSoldPerHour = the sum of cookiesSoldPerHourArray with [0] across all stores [i]
// for (var i = 0; i < allStores.length; i++) {
//
//    for (var i = 0; i < cookiesSoldPerHourArray.length; i++) {
//    cookiesSoldPerHourArray[0]
//    }
//
// allStores[0];
// }




}
storeTablesJS();


// var hourOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//
// //First and Pine Location
// var firstAndPike = {
//   locationName : 'First and Pike',
//   minCustPerHour : 23,
//   maxCustPerHour : 65,
//   avgCookiesPerCust : 6.3,
//   randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
//   cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer
//
//   randCustPerHour : function () {
//     for (var i = 0; i < hourOfDay.length; i++) {
//       var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//       this.randCustPerHourArray.push(custPerHour);
//     }
//   },
//
//   calcCookiesSoldPerHour : function () {
//     for (var i = 0; i < this.randCustPerHourArray.length; i++) {
//       var cookiesSoldPerHour = Math.ceil(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold.  use math.ceil to round up the number of cookiesSoldPerHour
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//     }
//     console.log(this.cookiesSoldPerHourArray);
//   },
//
//   getTotal : function () {
//     //var cookiesSoldPerHourArray = [];
//     var totalCookiesSold = 0;
//     for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
//       totalCookiesSold += this.cookiesSoldPerHourArray[i];
//     }
//     return totalCookiesSold;
//   }
// }
//
// firstAndPike.randCustPerHour();
// firstAndPike.calcCookiesSoldPerHour();
// firstAndPike.getTotal();
//
// var cookiesSoldList = document.getElementById('firstAndPike');
// for (var i = 0; i <= hourOfDay.length; i++){
//   var liEl = document.createElement('li');
//   liEl.textContent = hourOfDay[i] + ' : ' + firstAndPike.cookiesSoldPerHourArray[i] +' cookies';
//   cookiesSoldList.appendChild(liEl);
// }
//
// var cookiesSoldTotal = document.getElementById('firstAndPike');
// liEl.textContent = 'Total: ' + firstAndPike.getTotal() + ' cookies per day.';
// cookiesSoldTotal.appendChild(liEl);
//
//
// //Seatac Airport Location
// var seatac = {
//   locationName : 'Seatac',
//   minCustPerHour : 3,
//   maxCustPerHour : 24,
//   avgCookiesPerCust : 1.2,
//   randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
//   cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer
//
//   randCustPerHour : function () {
//     for (var i = 0; i < hourOfDay.length; i++) {
//       var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//       this.randCustPerHourArray.push(custPerHour);
//     }
//   },
//
//   calcCookiesSoldPerHour : function () {
//     for (var i = 0; i < this.randCustPerHourArray.length; i++) {
//       var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//     }
//   },
//
//   getTotal : function () {
//     //var cookiesSoldPerHourArray = [];
//     var totalCookiesSold = 0;
//     for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
//       totalCookiesSold += this.cookiesSoldPerHourArray[i];
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// }
//
// seatac.randCustPerHour();
// seatac.calcCookiesSoldPerHour();
// seatac.getTotal();
//
// cookiesSoldList = document.getElementById('seatac');
// for (i = 0; i <= hourOfDay.length; i++){
//   liEl = document.createElement('li');
//   liEl.textContent = hourOfDay[i] + ' : ' + seatac.cookiesSoldPerHourArray[i] +' cookies';
//   cookiesSoldList.appendChild(liEl);
// }
//
// cookiesSoldTotal = document.getElementById('seatac');
// liEl.textContent = 'Total: ' + seatac.getTotal() + ' cookies per day.';
// cookiesSoldTotal.appendChild(liEl);
//
//
// //Capitol Hill Location
// var capitolHill = {
//   locationName : 'Capitol Hill',
//   minCustPerHour : 20,
//   maxCustPerHour : 38,
//   avgCookiesPerCust : 3.7,
//   randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
//   cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer
//
//   randCustPerHour : function () {
//     for (var i = 0; i < hourOfDay.length; i++) {
//       var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//       this.randCustPerHourArray.push(custPerHour);
//     }
//   },
//
//   calcCookiesSoldPerHour : function () {
//     for (var i = 0; i < this.randCustPerHourArray.length; i++) {
//       var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       console.log(this.cookiesSoldPerHourArray);
//     }
//   },
//
//   getTotal : function () {
//     //var cookiesSoldPerHourArray = [];
//     var totalCookiesSold = 0;
//     for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
//       totalCookiesSold += this.cookiesSoldPerHourArray[i];
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// }
//
// capitolHill.randCustPerHour();
// capitolHill.calcCookiesSoldPerHour();
// capitolHill.getTotal();
//
// cookiesSoldList = document.getElementById('capitolHill');
// for (i = 0; i <= hourOfDay.length; i++){
//   liEl = document.createElement('li');
//   liEl.textContent = hourOfDay[i] + ' : ' + capitolHill.cookiesSoldPerHourArray[i] +' cookies';
//   cookiesSoldList.appendChild(liEl);
// }
//
// cookiesSoldTotal = document.getElementById('capitolHill');
// liEl.textContent = 'Total: ' + capitolHill.getTotal() + ' cookies per day.';
// cookiesSoldTotal.appendChild(liEl);
//
//
// //Seattle Center Location
// var seattleCenter= {
//   locationName : 'Seattle Center',
//   minCustPerHour : 3,
//   maxCustPerHour : 24,
//   avgCookiesPerCust : 1.2,
//   randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
//   cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer
//
//   randCustPerHour : function () {
//     for (var i = 0; i < hourOfDay.length; i++) {
//       var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//       this.randCustPerHourArray.push(custPerHour);
//     }
//   },
//
//   calcCookiesSoldPerHour : function () {
//     for (var i = 0; i < this.randCustPerHourArray.length; i++) {
//       var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       console.log(this.cookiesSoldPerHourArray);
//     }
//   },
//
//   getTotal : function () {
//     //var cookiesSoldPerHourArray = [];
//     var totalCookiesSold = 0;
//     for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
//       totalCookiesSold += this.cookiesSoldPerHourArray[i];
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// }
//
// seattleCenter.randCustPerHour();
// seattleCenter.calcCookiesSoldPerHour();
// seattleCenter.getTotal();
//
// cookiesSoldList = document.getElementById('seattleCenter');
// for (i = 0; i <= hourOfDay.length; i++){
//   liEl = document.createElement('li');
//   liEl.textContent = hourOfDay[i] + ' : ' + seattleCenter.cookiesSoldPerHourArray[i] +' cookies';
//   cookiesSoldList.appendChild(liEl);
// }
//
// cookiesSoldTotal = document.getElementById('seattleCenter');
// liEl.textContent = 'Total: ' + seattleCenter.getTotal() + ' cookies per day.';
// cookiesSoldTotal.appendChild(liEl);
//
//
// //Alki Location
// var alki= {
//   locationName : 'Alki',
//   minCustPerHour : 2,
//   maxCustPerHour : 16,
//   avgCookiesPerCust : 4.6,
//   randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
//   cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer
//
//   randCustPerHour : function () {
//     for (var i = 0; i < hourOfDay.length; i++) {
//       var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//       this.randCustPerHourArray.push(custPerHour);
//     }
//   },
//
//   calcCookiesSoldPerHour : function () {
//     for (var i = 0; i < this.randCustPerHourArray.length; i++) {
//       var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       console.log(this.cookiesSoldPerHourArray);
//     }
//   },
//
//   getTotal : function () {
//     //var cookiesSoldPerHourArray = [];
//     var totalCookiesSold = 0;
//     for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
//       totalCookiesSold += this.cookiesSoldPerHourArray[i];
//       console.log(totalCookiesSold);
//     }
//     return totalCookiesSold;
//   }
// }
//
// alki.randCustPerHour();
// alki.calcCookiesSoldPerHour();
// alki.getTotal();
//
// cookiesSoldList = document.getElementById('alki');
// for (i = 0; i <= hourOfDay.length; i++){
//   liEl = document.createElement('li');
//   liEl.textContent = hourOfDay[i] + ' : ' + alki.cookiesSoldPerHourArray[i] +' cookies';
//   cookiesSoldList.appendChild(liEl);
// }
//
// cookiesSoldTotal = document.getElementById('Alki');
// liEl.textContent = 'Total: ' + alki.getTotal() + ' cookies per day.';
// cookiesSoldTotal.appendChild(liEl);
