'use strict';

var hourOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//First and Pine Location
var firstAndPike = {

  minCustPerHour : 23,
  maxCustPerHour : 65,
  avgCookiesPerCust : 6.3,
  randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
  cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer

  randCustPerHour : function () {
    for (var i = 0; i < hourOfDay.length; i++) {
      var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      this.randCustPerHourArray.push(custPerHour);
    }
  },

  calcCookiesSoldPerHour : function () {
    for (var i = 0; i < this.randCustPerHourArray.length; i++) {
      var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      console.log(this.cookiesSoldPerHourArray);
    }
  },

  getTotal : function () {
    //var cookiesSoldPerHourArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      totalCookiesSold += this.cookiesSoldPerHourArray[i];
    }
    return totalCookiesSold;
  }
}

firstAndPike.randCustPerHour();
firstAndPike.calcCookiesSoldPerHour();
firstAndPike.getTotal();

var cookiesSoldList = document.getElementById('firstAndPike');
for (var i = 0; i <= hourOfDay.length; i++){
  var liEl = document.createElement('li');
  liEl.textContent = hourOfDay[i] + ' : ' + firstAndPike.cookiesSoldPerHourArray[i] +' cookies';
  cookiesSoldList.appendChild(liEl);
}

var cookiesSoldTotal = document.getElementById('totalFirstAndPike');
liEl.textContent = 'Total Sales: ' + firstAndPike.getTotal() + ' cookies per day.';
cookiesSoldTotal.appendChild(liEl);


//Seatac Airport Location
var seatac = {

  minCustPerHour : 3,
  maxCustPerHour : 24,
  avgCookiesPerCust : 1.2,
  randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
  cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer

  randCustPerHour : function () {
    for (var i = 0; i < hourOfDay.length; i++) {
      var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      this.randCustPerHourArray.push(custPerHour);
    }
  },

  calcCookiesSoldPerHour : function () {
    for (var i = 0; i < this.randCustPerHourArray.length; i++) {
      var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
    }
  },

  getTotal : function () {
    //var cookiesSoldPerHourArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      totalCookiesSold += this.cookiesSoldPerHourArray[i];
      console.log(totalCookiesSold);
    }
    return totalCookiesSold;
  }
}

seatac.randCustPerHour();
seatac.calcCookiesSoldPerHour();
seatac.getTotal();

cookiesSoldList = document.getElementById('seatac');
for (i = 0; i <= hourOfDay.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hourOfDay[i] + ' : ' + seatac.cookiesSoldPerHourArray[i] +' cookies';
  cookiesSoldList.appendChild(liEl);
}

cookiesSoldTotal = document.getElementById('totalSeatac');
liEl.textContent = 'Total Sales: ' + seatac.getTotal() + ' cookies per day.';
cookiesSoldTotal.appendChild(liEl);


//Capitol Hill Location
var capitolHill = {

  minCustPerHour : 20,
  maxCustPerHour : 38,
  avgCookiesPerCust : 3.7,
  randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
  cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer

  randCustPerHour : function () {
    for (var i = 0; i < hourOfDay.length; i++) {
      var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      this.randCustPerHourArray.push(custPerHour);
    }
  },

  calcCookiesSoldPerHour : function () {
    for (var i = 0; i < this.randCustPerHourArray.length; i++) {
      var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      console.log(this.cookiesSoldPerHourArray);
    }
  },

  getTotal : function () {
    //var cookiesSoldPerHourArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      totalCookiesSold += this.cookiesSoldPerHourArray[i];
      console.log(totalCookiesSold);
    }
    return totalCookiesSold;
  }
}

capitolHill.randCustPerHour();
capitolHill.calcCookiesSoldPerHour();
capitolHill.getTotal();

cookiesSoldList = document.getElementById('capitolHill');
for (i = 0; i <= hourOfDay.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hourOfDay[i] + ' : ' + capitolHill.cookiesSoldPerHourArray[i] +' cookies';
  cookiesSoldList.appendChild(liEl);
}

cookiesSoldTotal = document.getElementById('totalCapitolHill');
liEl.textContent = 'Total Sales: ' + capitolHill.getTotal() + ' cookies per day.';
cookiesSoldTotal.appendChild(liEl);


//Seattle Center Location
var seattleCenter= {

  minCustPerHour : 3,
  maxCustPerHour : 24,
  avgCookiesPerCust : 1.2,
  randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
  cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer

  randCustPerHour : function () {
    for (var i = 0; i < hourOfDay.length; i++) {
      var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      this.randCustPerHourArray.push(custPerHour);
    }
  },

  calcCookiesSoldPerHour : function () {
    for (var i = 0; i < this.randCustPerHourArray.length; i++) {
      var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      console.log(this.cookiesSoldPerHourArray);
    }
  },

  getTotal : function () {
    //var cookiesSoldPerHourArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      totalCookiesSold += this.cookiesSoldPerHourArray[i];
      console.log(totalCookiesSold);
    }
    return totalCookiesSold;
  }
}

seattleCenter.randCustPerHour();
seattleCenter.calcCookiesSoldPerHour();
seattleCenter.getTotal();

cookiesSoldList = document.getElementById('seattleCenter');
for (i = 0; i <= hourOfDay.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hourOfDay[i] + ' : ' + seattleCenter.cookiesSoldPerHourArray[i] +' cookies';
  cookiesSoldList.appendChild(liEl);
}

cookiesSoldTotal = document.getElementById('totalSeattleCenter');
liEl.textContent = 'Total Sales: ' + seattleCenter.getTotal() + ' cookies per day.';
cookiesSoldTotal.appendChild(liEl);


//Alki Location
var alki= {

  minCustPerHour : 2,
  maxCustPerHour : 16,
  avgCookiesPerCust : 4.6,
  randCustPerHourArray : [], //array of random number of customers each hour (listed above 6am to 8 pm)
  cookiesSoldPerHourArray : [], //array of cookies sold per hour equals to random customer per hour arrary multiply avg cookies per customer

  randCustPerHour : function () {
    for (var i = 0; i < hourOfDay.length; i++) {
      var custPerHour = Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      this.randCustPerHourArray.push(custPerHour);
    }
  },

  calcCookiesSoldPerHour : function () {
    for (var i = 0; i < this.randCustPerHourArray.length; i++) {
      var cookiesSoldPerHour = Math.floor(this.randCustPerHourArray[i] * this.avgCookiesPerCust); //average per hour cookies sold
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      console.log(this.cookiesSoldPerHourArray);
    }
  },

  getTotal : function () {
    //var cookiesSoldPerHourArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      totalCookiesSold += this.cookiesSoldPerHourArray[i];
      console.log(totalCookiesSold);
    }
    return totalCookiesSold;
  }
}

alki.randCustPerHour();
alki.calcCookiesSoldPerHour();
alki.getTotal();

cookiesSoldList = document.getElementById('alki');
for (i = 0; i <= hourOfDay.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hourOfDay[i] + ' : ' + alki.cookiesSoldPerHourArray[i] +' cookies';
  cookiesSoldList.appendChild(liEl);
}

cookiesSoldTotal = document.getElementById('totalAlki');
liEl.textContent = 'Total Sales: ' + alki.getTotal() + ' cookies per day.';
cookiesSoldTotal.appendChild(liEl);
