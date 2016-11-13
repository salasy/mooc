/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Here are some helpful links:
String.prototype.split()
String.prototype.substr()
parseInt()
*/
function makeFriendlyDates(arr) {
  var months = {
    1: "January",
    2: "February",
    3: "Marth",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  //console.log(months);
  var startDate = arr[0].split("-");
    var startYear = parseInt(startDate[0]);
    var startMonth = parseInt(startDate[1]);
    var startDay = parseInt(startDate[2]);
    
    //console.log(parseInt(startDate[i]));
  
  var endDate = arr[1].split("-");
    var endYear = parseInt(endDate[0]);
    var endMonth = parseInt(endDate[1]);
    var endDay = parseInt(endDate[2]);
  
  // solution for same year, month and day
  if (startYear == endYear && startMonth == endMonth && startDay == endDay) {
    console.log( [months[endMonth].toString() + " " + startDay.toString(), endYear.toString()] );
  }
  
  // solution for same year and same month
  if (startYear == endYear && startMonth == endMonth) {
    console.log( [months[endMonth].toString() + " " + startDay.toString(), endDay.toString()] );
  }
  //console.log(months[endMonth]);
  //console.log(startDate);
  //console.log(endDate);
  //console.log("------------");
  //return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

/*
makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].

makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].

makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].

makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]

makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].

makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].

makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/

