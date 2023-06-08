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
    {type: "input",
    message: "What is your email address?",
    name: "Email",
    },
    {type: "input",
    message: "What credits would you like to add to your README file?",
    name: "Credits",
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
function writeToFile({Title, Description, Installation, Usage, License, Contributing, Tests, Username, Email, Credits}) {
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

## Credits
${Credits}
    
## License
This project is covered under the ${License} license.
    
## Contributing
${Contributing}
    
## Tests
${Tests}
    
## Questions
To get in touch with any questions, visit my <a href="https://github.com/${Username}"> Github Profile </a> or send an <a href="mailto:${Email}">email</a>`
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