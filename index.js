const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatemarkdown');
const path = require('path');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name your proyect'
    },
    {
        type: 'input',
        name: 'description',
        message:'write a description for your proyect'
    },
    {
        type: 'input',
        name: 'installation',
        message:'Explain the installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message:'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Explain the contribution guidelines for your proyect'
    },
    {
        type: 'input',
        name: 'test',
        message:'Define your test instructions and how to run them'
    },
    {
        type: 'checkbox',
        name: 'license',
        message:'Choose a license for your proyect',
        choices:['MIT','GNU GPLv3','Apache License 2.0','ISC','GNU GPLv2','None']
    },
    {
        type: 'input',
        name: 'username',
        message:'write your github username'
    },
    {
        type: 'input',
        name: 'email',
        message:'write your an email where people can reach you'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log("creating your README.md file");
        writeToFile("./dist/README.md",generateMarkdown({...answers}));
    
    })};

// Function call to initialize app
init();