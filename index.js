// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your aplication?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the description of your application:',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'information',
      message: 'Enter the usage information:',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Enter the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter the test instructions:',
    },
  ])
  .then((answers) => {
    generateMarkdown();

    
  });
// TODO: Create a function to write README file
function writeToFile(filename, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
