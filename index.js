// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'How do you descripe you project?',
      },
      {  
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How can i use your project?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'how can I contribute to the project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How can i test the code?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
      },
      {  
        type: 'list',
        name: 'license',
        message: 'what is the license do you used?',
        choices: ['mit','gnu','AssetSonar','Intello']

      
      },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, {},  err=> {

    })
}

// function to initialize program
function init() {
   inquirer.prompt(questions).then(answers => {

   const fileData =  generateMarkdown(answers)
   //console.log(fileData)

   writeToFile('README2.md',fileData)
    
   })

}

// function call to initialize program
init();
