const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  let years = new Date();
  let months = new Date();

  let start = new Date(date1);
  let end = new Date(date2);

  years = Math.abs(start.getFullYear() - end.getFullYear());
  months = Math.abs(start.getMonth() - end.getMonth());

  if (isNaN(years) || isNaN(months)) return "Error: Invalid input provided.";
  else if (years == 1 && months == 1)
    return "Time Elapsed: " + years + " year " + months + " month.";
  else if (years == 1)
    return "Time Elapsed: " + years + " year " + months + " months.";
  else if (months == 1)
    return "Time Elapsed: " + years + " years " + months + " month.";
  else return "Time Elapsed: " + years + " years " + months + " months.";
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, "May 1, 1995"));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, "1975-8-11"));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, "birthdate"));
// Error: Invalid input provided.
console.log(calculateTime("May 1, 1993", "May 1, 1995"));
//If first date > second date, make positive. Expect positive 2 years.

console.log(calculateTime("July 1, 1994", "May 1, 1995"));
