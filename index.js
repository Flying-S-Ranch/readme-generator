// DEPENDENCIES
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// DATA / STATE
let badgeLicense;
// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "What is the title of your project?",
    name: "Title" },
    {type: "input",
    message: "Enter a description of your project",
    name: "Description" },
    {type: "input",
    message: "How can users install this code?",
    name: "Installation",
    },
    {type: "list",
    message: "Which license would you like to use for this project?",
    name: "License",
    choices: ["MIT License", "Mozilla Public License 2.0", "GNU GPLv3", "IBM Public License Version 1.0" ]
    },
    {type: "input",
    message: "What are the usage instructions?",
    name: "Usage",
    },
    {type: "input",
    message: "How can developers contribute to this project?",
    name: "Contributing",
    },
    {type: "input",
    message: "How can users test this code?",
    name: "Tests",
    },
    {type: "input",
    message: "What is your Github username?",
    name: "Username",
    },
];

const licenseBadges= [
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
]

// FUNCTIONS
// TODO: Create a function to write README file
function writeToFile({Title, Description, Installation, Usage, License, Contributing, Tests, Username}) {
    function chooseBadge() {
        const badgeIndex = questions[3].choices.indexOf(License)
        badgeLicense = licenseBadges[badgeIndex]
    }
    chooseBadge()
    const template = `# ${Title}

${badgeLicense}
    
## Description
${Description}
    
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
    
## Installation
${Installation}
    
## Usage
${Usage}
    
## License
${License}
    
## Contributing
${Contributing}
    
## Tests
${Tests}
    
## Questions
To get in touch with any questions, visit my <a href="https://github.com/${Username}"> Github Profile </a>`
    fs.writeFile ('README.md', template, (err) => {
        if (err) throw err;
        console.log("README.md file created")
    })

}

// USER INITIALIZATIONS


// INITIALIZATIONS
// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((writeToFile))

}

// Function call to initialize app
init();

// const { join } = require('path');


// // DATA
// // const entryOne = process.argv[2]
// let answerString;

// // TODO: Create an array of questions for user input
// // This array follows the example of activity 20 in this module


// const sections = [
//     "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"
// ]


// // FUNCTION
// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}
// const createFile = (answer) => {
//     const { Title } = answer
//     const userTitle = `# ${Title}\n`
//     fs.writeFile("README.md", userTitle, (err) => {
//         if (err) throw err;
//         console.log("Title saved!")
//     })
    
//     const descriptionHeading = `## ${sections[0]}\n`
//     fs.appendFile("README.md", descriptionHeading, (err) => {
//         if (err) throw err;
//         console.log("Description heading saved!")
//     })

//     const { Description } = answer
//     const userDescription = `${Description}\n`
//     fs.appendFile("README.md", userDescription, (err) => {
//         if (err) throw err;
//         console.log("Description content saved!")
//     })
//     // addSections();
//     const tableContentsHeading = `## ${sections[1]}\n`
//     fs.appendFile("README.md", tableContentsHeading, (err) => {
//         if (err) throw err;
//         console.log("Table of Contents heading saved!")
//     })
// }

// // const addSections = () => {
// //     for (const section of sections) {
// //         let sectionHeading = `## ${section}\n`
// //         fs.appendFile("README.md", sectionHeading, (err) => {
// //             if (err) throw err;
// //             console.log("sections added!")
// //         })
// //     }
// // }

// // const placeSections = (response) => {
// //     console.log(response)
// // }


// // USER INTERACTION

// // INITIALIZATIONS
// // TODO: Create a function to initialize app
// function init() {
// }

// // Function call to initialize app
// init();
