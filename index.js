// DEPENDENCIES
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');


// DATA
// const entryOne = process.argv[2]
let answerString;

// TODO: Create an array of questions for user input
// This array follows the example of activity 20 in this module
const questions = [
];

const titleQuestion = [
    {type: "input",
    message: "What is the title of your project?",
    name: "title" },
];

const sections = [
    "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"
]


// FUNCTION
const createTitle = (answer) => {
    const { title } = answer
    const userTitle = `# ${title}\n`
    fs.writeFile("README.md", userTitle, (err) => {
        if (err) throw err;
        console.log("Data saved!")
    })
    addSections();
}

const addSections = () => {
    for (const section of sections) {
        let sectionHeading = `## ${section}\n`
        fs.appendFile("README.md", sectionHeading, (err) => {
            if (err) throw err;
            console.log("sections added!")
        })
    }
}
// TODO: Create a function to write README file
// The next three lines are adapted from activity 13 in this module
// fs.writeFile('README.md', entryOne, (err) =>
// err ? console.error(err) : console.log('README file created')
// );

// USER INTERACTION
inquirer
  .prompt(titleQuestion)
  .then((createTitle));

// INITIALIZATIONS
// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
