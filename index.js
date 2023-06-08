// // DEPENDENCIES
// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// const { join } = require('path');


// // DATA
// // const entryOne = process.argv[2]
// let answerString;

// // TODO: Create an array of questions for user input
// // This array follows the example of activity 20 in this module

// const questions = [
//     {type: "input",
//     message: "What is the title of your project?",
//     name: "Title" },
//     {type: "input",
//     message: "Enter a description of your project",
//     name: "Description" },
//     {type: "input",
//     message: "How can users install this code?",
//     name: "Table of Contents",
    
//     },
    
// ];

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
// inquirer
//   .prompt(questions)
//   .then((createFile))

// // INITIALIZATIONS
// // TODO: Create a function to initialize app
// function init() {
// }

// // Function call to initialize app
// init();
