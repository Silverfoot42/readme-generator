// Sets dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Creates the question prompts
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
    {
      type: 'list',
      name: 'license',
      message: 'Select which license you want:',
      choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3', 'Unlicensed'],
    },
    {
      type: 'input',
      name: 'githubUserName',
      message: 'Enter your Github username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email:',
    },
  ])
  .then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('sampleREADME.md', markdownContent);
    
  });

// Writes the answers to a read me file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log('Successfully created README file')
  );
}