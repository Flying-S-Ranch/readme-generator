// DEPENDENCIES
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// DATA
const entryOne = process.argv[2]
// TODO: Create an array of questions for user input
// This array follows the example of activity 20 in this module
const questions = [
    {type: "input",
    question: "What is the title of your project?",
    name: "title" },
];

// FUNCTION
// TODO: Create a function to write README file
// The next three lines are adapted from activity 13 in this module
fs.writeFile('README.md', entryOne, (err) =>
err ? console.error(err) : console.log('README file created')
);

// USER INTERACTION


// INITIALIZATIONS
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
