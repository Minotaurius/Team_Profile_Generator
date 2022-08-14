// packages
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');

// importing classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// place to store anyone we register in our prompts
const teamArr = [];

// place to store our questions we will ask user in terminal
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter your name so we can start building the rest of your team"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter your employee ID"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email so the team knows how to contact you"
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "Please enter your office number so the team knows where they can find you"
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter your engineer's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter your employee ID"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email so the team knows how to contact you"
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter your github link"
    },
]
// employee prompts

// function addEmployees() {
//     addManager()
//     .then(answers => {
//         console.log(answers)
//     })
//     addEngineer()
//     .then(answers => {
//         console.log(answers)
//     })
// }

function addManager() {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        console.log(answers)
    })
};

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        console.log(answers)
    })
};

//calling our functions to prompt users
// addEmployees()
// addManager();
addEngineer();