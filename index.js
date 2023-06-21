// TODO: Include packages needed for this application
const fs = require("fs")
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
  type: "input", message: "what is the developer name?",
  name: "developerName"
}, {
  type: "input", message: "what is the developer email?",
  name: "developerEmail"
}, {
  type: "input", message: "what is the title of your project?",
  name: "title"
}, {
  type: "list", message: "what license does your project use?",
  choices: ["Apache 2.0", "MIT", "Mozilla", "None"],
  name: "license"
}, {
  type: "input",
  name: "description",
  message: "Write a brief description of your project: "
}, {
  type: "input",
  name: "usage",
  message: "What is this project usage for?"
}, {
  type: "input",
  name: "contributors",
  message: "Who are the contributors of this projects?"
}, {
  type: "input",
  name: "tests",
  message: "Is there a test included?"
}, {
  type: "input",
  name: "issues",
  message: "What do I do if I have an issue? "
}, {
  type: "input",
  name: "features",
  message: "What are the features of your project?"
}, {
  type: "input",
  name: "credits",
  message: "Please list the credits of your project "
}, {
  type: "input",
  name: "installation",
  message: "What are the steps required to install your project?"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");

    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)

    .then((answers) => {
      writeToFile("dist/README.md", generateMarkdown(answers))

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();






