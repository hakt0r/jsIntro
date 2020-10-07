/*
    Anton
    TIME CONVERSION

    Write a function to convert the AM/PM time format (12 hours)
    to the military (or inernational) one (24 hours)

    Input: "12:00 AM" 
    Output: "00:00"

    Input: "12:00 PM"
    Output: "12:00"

    Input: "09:00 PM"
    Output: "21:00"
    
    Note: to avoid the confusion of midday and midnight (a known problem worldwide),
    please also attach this illustration for people ( see: ampm.jpg )
*/

function convertTime(time) {

  let result = '';
  let hours = time.slice(0, 2);
  let minutes = time.slice(3, 5);
  const period = time.slice(-2);

  switch (period) {
    case 'AM':
      hours === '12' ? (hours = '00') : null;
      result = `${hours}:${minutes}`;
      break;

    case 'PM':
      hours[0] === '0' ? (hours = hours[1]) : null;
      hours === '12' ? null : (hours = (parseInt(hours) + 12).toString());
      result = `${hours}:${minutes}`;
      break;
  }

}

convertTime("12:00 AM");
convertTime("12:01 AM");
convertTime("12:01 PM");
convertTime("09:00 PM");

/* Micha */

const shittyAPI = [
  { Oh: ["d", ["F", ["u", ["M", ["o", ["Q", ["q", ["B", ["n", ["h", ["p", ["D", ["U"]]]]]]]]]]]]] },
  { My: ["a", ["t", ["X", ["i", ["r", ["w", ["j", ["W", ["g", ["V", ["J", ["T", ["R"]]]]]]]]]]]]] },
  { God: ["L", ["Y", ["s", ["Z", ["y", ["C", ["N", ["I", ["f", ["P", ["c", ["O", ["l"]]]]]]]]]]]]] },
  { WTF: ["v", ["A", ["b", ["e", ["m", ["x", ["S", ["K", ["E", ["G", ["H", ["z", ["k"]]]]]]]]]]]]] }
]

// The string-values are just all 26 letters in upper- and lowercases. Shuffled. No dublicates.

// 1. Convert this array into two strings which will contain lowercase alphabet (1st string)
//      and uppercase alphabet (2nd string):

//              resultString1 === a b c d e f g h i j k l m n o p q r s t u v w x y z
//              resultString2 === A B C D E F G H I J K L M N O P Q R S T U V W X Y Z


// 2. Convert this array into one result-array which will contain 26 arrays,
//      each one with two strings — same letter in lower- and uppercase:

//              resultArray === [ ["a", "A"],
//                                ["b", "B"],
//                                ["c", "C"],
//                                ["d", "D"],
//                                ["e", "E"],
//                                ["f", "F"],
//                                ["g", "G"],
//                                ["h", "H"],
//                                ["i", "I"],
//                                ["j", "J"],
//                                ["k", "K"],
//                                ["l", "L"],
//                                ["m", "M"],
//                                ["n", "N"],
//                                ["o", "O"],
//                                ["p", "P"],
//                                ["q", "Q"],
//                                ["r", "R"],
//                                ["s", "S"],
//                                ["t", "T"],
//                                ["u", "U"],
//                                ["v", "V"],
//                                ["w", "W"],
//                                ["x", "X"],
//                                ["y", "Y"],
//                                ["z", "Z"] ]

// Solution:
const allLettersArray = shittyAPI.map(object => Object.values(object)).flat(Infinity);

const string1 = allLettersArray.sort().slice(26).join(" ");
const string2 = allLettersArray.sort().slice(0, 26).join(" ");

let cutArray = allLettersArray.sort((a, b) => a.localeCompare(b));
let resultArray = [];

while (cutArray.length > 0) {
  const cutElements = cutArray.splice(0, 2);
  resultArray.push(cutElements);
}

console.log(string1);
console.log(string2);
console.log(resultArray);

/* Nisha
    Create a function that takes two numbers and a mathematical operator [+ - / *]
    and will perform a calculation with the given numbers.
    For example (3, "+", 2) =5  , (3,"/",3) =1

    If the number1 tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(number1, operator, number2) {
  switch (operator) {
    case "+": return number1 + number2;
    case "-": return number1 - number2;
    case "*": return number1 * number2;
    case "/":
      if (number2 == 0) return "Can't divide by 0!"
      return number1 / number2;
  }
}

/*
    Daniel
    Please create a function that loops through the 3D Array and returns the Sum
*/

let arr3D = [[[1, 2, 3]], [[7, 10, 3]], [[9, 10, 8]]];

function Sumo() {
  let sum = 0;
  for (let i = 0; i < arr3D.length; i++) {
    arr3D[i].forEach(element => {
      for (let j = 0; j < element.length; j++) {
        sum += element[j]
      }
    })
  }
  return sum
}

console.log(Sumo())








/*
    Create a simple webpage out of the data below
*/

const DATA = [
  {
    category: 'finance',
    datetime: 1601984978,
    headline:
      'Chamath Palihapitiya to take Clover Health public in another SPAC deal worth $3.7 billion',
    id: 5403117,
    image:
      'https://image.cnbcfm.com/api/v1/image/105196007-IMG_6875.JPG?v=1525879311',
    related: '',
    source: 'CNBC',
    summary:
      'Clover will go public via a merger with Social Capital Hedosophia Holdings Corp. III, a special purpose acquisition company.',
    url:
      'https://www.cnbc.com/2020/10/06/chamath-palihapitiya-to-take-clover-health-public-in-another-spac-deal-worth-3point7-billion.html',
  },
  {
    category: 'top news',
    datetime: 1601982001,
    headline:
      'One coffee stock could be about to gain major momentum, trader says',
    id: 5403040,
    image:
      'https://image.cnbcfm.com/api/v1/image/106478883-1586281095115gettyimages-1217416403.jpeg?v=1601925382',
    related: '',
    source: 'CNBC',
    summary:
      'Starbucks is getting a caffeine boost after analysts at Oppenheimer named the stock as an “actionable buy idea” and raised their price target to $101.',
    url:
      'https://www.cnbc.com/2020/10/06/starbucks-stock-could-be-about-to-gain-major-momentum-trader-says.html',
  },
  {
    category: 'top news',
    datetime: 1601974313,
    headline: 'Zambian Leader Tells Central Bank Chief to Stabilize Currency',
    id: 1158304,
    image:
      'https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png',
    related: '',
    source: 'Bloomberg',
    summary:
      'Zambian President Edgar Lungu tasked his new central bank chief with stabilizing Africa’s worst-performing currency.',
    url:
      'https://www.bloomberg.com/news/articles/2020-10-06/zambian-leader-tells-central-bank-chief-to-stabilize-currency',
  },
  {
    category: 'technology',
    datetime: 1601971201,
    headline:
      "Google's competitor to Microsoft Office is being rebranded as Workspace and getting new pricing tiers",
    id: 5402290,
    image:
      'https://image.cnbcfm.com/api/v1/image/106726459-1601592516395-gettyimages-1135936638-GOOGLE_CLOUD_CONFERENCE.jpeg?v=1601593148',
    related: '',
    source: 'CNBC',
    summary:
      "The Google Workspace approach, with more obvious pricing options for small and large businesses, could help adoption and spur more growth in Google's cloud business.",
    url:
      'https://www.cnbc.com/2020/10/06/google-g-suite-becomes-workspace-gets-new-pricing-tiers.html',
  },
  {
    category: 'investing',
    datetime: 1601962811,
    headline:
      "30 Asia-based market strategists reveal how they're playing the U.S. election",
    id: 5401761,
    image:
      'https://image.cnbcfm.com/api/v1/image/106731121-1601959761850-gettyimages-1228796400-364986772_1-6.jpeg?v=1601960068',
    related: '',
    source: 'CNBC',
    summary:
      "Stock market analysts in Asia clearly do not agree on who will win the U.S. presidential election. But they're pretty unified on how they plan to play it.",
    url:
      'https://www.cnbc.com/2020/10/06/us-presidential-election-30-market-strategists-reveal-investments.html',
  },
  {
    category: 'business',
    datetime: 1601953418,
    headline:
      'Business leaders see increased hiring in these 3 areas following the coronavirus',
    id: 5401249,
    image:
      'https://image.cnbcfm.com/api/v1/image/106724963-1601542574841-gettyimages-1248900510-262a5684.jpeg?v=1601542649',
    related: '',
    source: 'CNBC',
    summary:
      'Business leaders across a range of industries and countries see increased hiring in three specific areas following the pandemic, according to a new McKinsey report.',
    url:
      'https://www.cnbc.com/2020/10/06/where-business-leaders-see-new-job-openings-following-the-pandemic.html',
  },
  {
    category: 'business',
    datetime: 1601944109,
    headline:
      "Bristol-Myers gets 'potentially revolutionary medicine' in MyoKardia deal, CEO says",
    id: 5400738,
    image:
      'https://image.cnbcfm.com/api/v1/image/105849769-1555101313223img_9379.jpg?v=1561453380',
    related: '',
    source: 'CNBC',
    summary:
      '"MyoKardia is an important company because they developed a really interesting approach to the treatment of cardiovascular disease," Bristol-Myers Squibb CEO Giovanni Caforio said.',
    url:
      'https://www.cnbc.com/2020/10/05/bristol-myers-ceo-a-potentially-revolutionary-drug-in-myokardia-deal.html',
  },
  {
    category: 'business',
    datetime: 1601939786,
    headline:
      "'I think what we got today was the removal of uncertainty,' Jim Cramer says",
    id: 5400479,
    image:
      'https://image.cnbcfm.com/api/v1/image/106551736-1590491115191gettyimages-1215156232.jpeg?v=1601379617',
    related: '',
    source: 'CNBC',
    summary:
      '"There\'s nothing the market hates more than uncertainty — take it away and stocks go higher," the "Mad Money" host said.',
    url:
      'https://www.cnbc.com/2020/10/05/jim-cramer-i-think-what-we-got-today-was-the-removal-of-uncertainty.html',
  },
  {
    category: 'technology',
    datetime: 1601939674,
    headline:
      'Sonos stock drops on report that Apple is purging third-party audio products from its stores',
    id: 5400422,
    image:
      'https://image.cnbcfm.com/api/v1/image/105318666-1531158630319sonos_lifestyle_rgb_small_one_black_2.jpg?v=1536610722',
    related: '',
    source: 'CNBC',
    summary:
      'Apple manufactures a variety of audio products under its Beats brand as well as products such as AirPods wireless earbuds and the HomePod smart speaker under the main Apple brand.',
    url:
      'https://www.cnbc.com/2020/10/05/apple-removes-third-party-audio-products-from-stores-sonos-stock-down.html',
  },
  {
    category: 'technology',
    datetime: 1601935876,
    headline:
      "New information about Facebook's Instagram acquisition delayed House antitrust report, source says",
    id: 5400210,
    image:
      'https://image.cnbcfm.com/api/v1/image/106716316-16009772052020-09-24t194520z_2094849200_rc275j9hfyil_rtrmadp_0_usa-election-facebook-russia.jpeg?v=1600977236',
    related: '',
    source: 'CNBC',
    summary:
      'The report is expected to conclude the more than year-long investigation into Apple, Amazon, Facebook and Google, and will suggest potential areas for reform in the antitrust laws.',
    url:
      'https://www.cnbc.com/2020/10/05/new-info-about-facebook-instagram-deal-delay-antitrust-report-source.html',
  },
  {
    category: 'business',
    datetime: 1601932527,
    headline:
      'Lobbying in Q1 topped a record $938 million, but lobbyists say their profession is misunderstood',
    id: 5400046,
    image:
      'https://image.cnbcfm.com/api/v1/image/106694070-1599583514614-gettyimages-1228403069-364509649_1-4.jpeg?v=1599583590',
    related: '',
    source: 'CNBC',
    summary:
      "The lobbying industry, worth more than $3.5 billion, is arguably the U.S. government's oldest profession and is protected by the First Amendment. Yet critics say it undermines the country's democracy by tilting influencing power in the favor of those with unlimited financial resources.",
    url:
      'https://www.cnbc.com/2020/10/05/q1-lobbying-spend-was-record-938-million-but-lobbyists-decry-stereotype.html',
  },
  {
    category: 'top news',
    datetime: 1601932177,
    headline:
      'Stocks making the biggest moves after hours: Alteryx, Iovance Biotherapeutics \u0026 more',
    id: 5399991,
    image:
      'https://image.cnbcfm.com/api/v1/image/106670589-1597964372285-bull.jpg?v=1597964387',
    related: '',
    source: 'CNBC',
    summary:
      'Take a look at the companies making headlines in after-hours trading.',
    url:
      'https://www.cnbc.com/2020/10/05/stocks-making-the-biggest-moves-after-hours-alteryx-iovance-biotherapeutics-more.html',
  },
  {
    category: 'business',
    datetime: 1601928972,
    headline: "'Dune' release date reportedly pushed back to October 2021",
    id: 5399821,
    image:
      'https://image.cnbcfm.com/api/v1/image/106730608-1601927295878-dune.jpg?v=1601927473',
    related: '',
    source: 'CNBC',
    summary:
      'The release date of sci-fi epic "Dune" has been delayed until next October, according to Deadline.',
    url:
      'https://www.cnbc.com/2020/10/05/dune-release-date-reportedly-pushed-back-to-october-2021.html',
  },
  {
    category: 'top news',
    datetime: 1601924969,
    headline:
      "Trump's coronavirus infection and signs of economic weakness pose re-election challenges",
    id: 5399554,
    image:
      'https://image.cnbcfm.com/api/v1/image/106728641-16017368822020-10-03t004227z_729687258_rc2oaj9r18qi_rtrmadp_0_health-coronavirus-trump.jpeg?v=1601736935',
    related: '',
    source: 'CNBC',
    summary:
      "Trump's path to re-election hinges largely on the trajectory of the coronavirus and its impact on the national economy, and he's gotten unsettling news about both lately.",
    url:
      'https://www.cnbc.com/2020/10/05/trumps-coronavirus-infection-and-signs-of-economic-weakness-pose-re-election-challenges.html',
  },
  {
    category: 'business',
    datetime: 1601919337,
    headline:
      'Regal Cinemas closing all U.S. theaters because it really needs the blockbusters, CEO says',
    id: 5399226,
    image:
      'https://image.cnbcfm.com/api/v1/image/106730350-1601916458065-regal.jpg?v=1601916476',
    related: '',
    source: 'CNBC',
    summary:
      '"We are now like a kind of a grocery shop that have no food to sell," Cineworld CEO Mooky Greidinger told CNBC.',
    url:
      'https://www.cnbc.com/2020/10/05/ceo-of-regal-cinemas-owner-on-closing-movie-theaters-during-pandemic.html',
  },
  {
    category: 'top news',
    datetime: 1601910369,
    headline: 'Here’s how much health insurance costs if you retire early',
    id: 5398682,
    image:
      'https://image.cnbcfm.com/api/v1/image/105964745-1560376510health-insurance-life-insurance-car-insurance.jpg?v=1561045239',
    related: '',
    source: 'CNBC',
    summary:
      "For many Americans, retiring early may mean giving up their employer-subsidized health insurance. Here are a few options for coverage that won't break the bank.",
    url:
      'https://www.cnbc.com/2020/10/05/how-much-health-insurance-costs-a-family-with-no-job.html',
  },
  {
    category: 'business',
    datetime: 1601908810,
    headline: 'AMC stock falls 10% as rival Cineworld closes movie theaters',
    id: 5398559,
    image:
      'https://image.cnbcfm.com/api/v1/image/106730138-1601906644996-gettyimages-1213440793-amccovid1912020bt.jpeg?v=1601906838',
    related: '',
    source: 'CNBC',
    summary:
      "On Friday, S\u0026P Global Ratings lowered its issuer credit rating on AMC from CCC+ to CCC-, saying that the company's cash burn could accelerate as it reopens venues.",
    url:
      'https://www.cnbc.com/2020/10/05/amc-stock-falls-10percent-as-rival-cineworld-closes-movie-theaters.html',
  },
  {
    category: 'investing',
    datetime: 1601908165,
    headline:
      "Cramer says 'I wouldn't bet against this market right now,' holds out hope for more stimulus",
    id: 5398506,
    image:
      'https://image.cnbcfm.com/api/v1/image/106416319-1582914157084img_9408r.jpg?v=1582914272',
    related: '',
    source: 'CNBC',
    summary:
      "CNBC's Jim Cramer said Monday that he was optimistic about negotiations for another relief package for the U.S. economy.",
    url:
      'https://www.cnbc.com/2020/10/05/cramer-dont-bet-against-market-more-coronavirus-stimulus-possible.html',
  },
  {
    category: 'business',
    datetime: 1601907953,
    headline:
      'Do you understand how your health can affect your finances? Take this quiz to find out',
    id: 5398505,
    image:
      'https://image.cnbcfm.com/api/v1/image/105496935-1539114291989gettyimages-681731124.jpeg?v=1595267996',
    related: '',
    source: 'CNBC',
    summary:
      'Dr. Carolyn McClanahan shares questions to help you understand how common health issues and health-care policy can affect finances.',
    url:
      'https://www.cnbc.com/2020/10/05/quiz-do-you-understand-how-your-health-can-affect-your-finances-.html',
  },
  {
    category: 'top news',
    datetime: 1601906933,
    headline:
      "With one month until the presidential election, Piper Sandler analyst plots S\u0026P 500's key levels",
    id: 5398445,
    image:
      'https://image.cnbcfm.com/api/v1/image/106555823-1590693491745gettyimages-1227198519.jpeg?v=1601671734',
    related: '',
    source: 'CNBC',
    summary:
      'Uncertainty in Washington is keeping Wall Street on edge. Piper Sandler chief market technician Craig Johnson charts the S\u0026P 500 and how it could swing from now until Election Day.',
    url:
      'https://www.cnbc.com/2020/10/05/presidential-election-and-markets-key-levels-for-sp-500-and-stocks-.html',
  },
];






// Sami

function reverseString(str) {
  let stringRev = "";
  for (let i = str.length; i >= 0; i--) {
    stringRev = stringRev + str.charAt(i);
  }
  return stringRev;
}

alert(reverseString("Pradeep"));

// How to check if object is empty or not in javaScript?

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// How to remove array element based on object property?
var myArray = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

myArray = myArray.filter(function (obj) {
  return obj.field !== "money";
});

Console.log(myArray);
// Should print
// myArray = [
//     {field: "id", operator: "eq"}
//     {field: "cStatus", operator: "eq"}
// ]




// Q. What would be the output of following code?

function Person(name, age) {
  this.name = "John";
  this.age = 24;
  this.displayName = function () {
    console.log(this.name);
  };
}

Person.name = "John";
Person.displayName = function () {
  console.log(this.name);
};

var person1 = new Person("John");
person1.displayName();
Person.displayName();

// John Person
// John John
// John undefined
// John John
//  Answer: 1) John Person




// Q. What would be the output of following code?
var employeeId = "aq123";
function Employee() {
  this.employeeId = "bq1uy";
}
console.log(Employee.employeeId);
// 1) Reference Error
// 2) aq123
// 3) bq1uy
// 4) undefined

// Answer: 4) undefined

// Q. What would be the output of following code?
var employeeId = "aq123";

function Employee() {
  this.employeeId = "bq1uy";
}

console.log(new Employee().employeeId);

Employee.prototype.employeeId = "kj182";
Employee.prototype.JobId = "1BJKSJ";

console.log(new Employee().JobId);
console.log(new Employee().employeeId);

// 1) bq1uy 1BJKSJ bq1uy undefined
// 2) bq1uy 1BJKSJ bq1uy
// 3) bq1uy 1BJKSJ kj182
// 4) undefined 1BJKSJ kj182

// Answer: 2) bq1uy 1BJKSJ bq1uy
