// index.js

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Testing the function
console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("go hiking")); // Output: "This Saturday, I want to go hiking!"
// index.js

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Testing the function
console.log(mondayWork()); // Output: "This Monday, I will go to the office."
console.log(mondayWork("attend a meeting")); // Output: "This Monday, I will attend a meeting."
// index.js

function wrapAdjective(flair = "*") {
  return function (adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Testing the function
const highlight1 = wrapAdjective("*");
console.log(highlight1("awesome")); // Output: "You are *awesome*!"

const highlight2 = wrapAdjective("||");
console.log(highlight2("amazing")); // Output: "You are ||amazing||!"
