const companies = [
 { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
 { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
 { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
 { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
 { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
 { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
 { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
 { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
 { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//  console.log(companies[i]);
// }

// forEach
companies.forEach(function (company) {
 // console.log(company.name);
});

// short hand method
// companies.forEach((company) => console.log(company.name));

// filter
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
 if (ages[i] >= 21) {
  canDrink.push(ages[i]);
 }
}

// The filter method creates a subset of the original array with set conditions
// the filter method doesnt change the structure of the original array

// console.log(canDrink);
//using filter implementation

const canDrink1 = ages.filter(function (age) {
 if (age >= 21) {
  return true;
 }
});

// filter using arrow function (short hand)
const canDrink2 = ages.filter((age) => age >= 21);

const retailCompanies = companies.filter(function (company) {
 if (company.category === 'Retail') {
  return true;
 }
});

const comp = companies.filter((company) => company.category === 'Retail');
// console.log(comp);

const lastedMore = companies.filter((company) => company.end - company.start >= 10);
// console.log(lastedMore);

// map -> creates a new array from the current array
// Create array of company names
const companyName = companies.map(function (company) {
 return `{${company.name}: ${company.start}, ${company.end}}`;
});

// console.log(companyName);

// sort method
// sort companies by start year
const sortedCompanies = companies.sort(function (c1, c2) {
 if (c1.start > c2.start) {
  return 1;
 } else {
  return -1;
 }
});

const sortedCompanies1 = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

// sorting in ascending order
const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// console.log(sortedCompanies1);

const combined = ages
 .map((age) => age * 2)
 .filter((age) => age >= 40)
 .sort((a, b) => a - b)
 .reduce((a, b) => a + b, 0); // Calculates the total of all the numbers in the array

console.log(combined);
