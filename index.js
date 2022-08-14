// packages
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const template = require('./src/html-template')

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
        name: 'officeNumber',
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
        message: "Please enter your github username"
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter your intern's name"
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
        name: 'school',
        message: "Please enter the school you attend"
    },
]

function init() {
    inquirer.prompt(managerQuestions) 
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArr.push(manager);
        console.log(answers);
    return addEmployees();
    })
}

function addEmployees() {

    inquirer.prompt(    {
        type: 'list',
        name: 'role',
        message: "What type of employee would you like to add",
        choices: [
            'Engineer',
            'Intern',
            'Finished Adding Employees'
        ]
        })
    .then (answer => {
        if (answer.role === 'Engineer') {
            inquirer.prompt(engineerQuestions)
            .then(answers => {
                let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                teamArr.push(engineer);
                console.log(answers);
                return addEmployees();
            })
        }
        else if(answer.role === 'Intern') {
            inquirer.prompt(internQuestions)
            .then(answers => {
                let intern = new Intern(answers.name, answers.id, answers.email, answers.github)
                teamArr.push(intern);
                console.log(answers);
                return addEmployees();
            })
        }
        else if (answer.role === 'Finished Adding Employees') {
            let htmlTemp = template(teamArr)
            fs.writeFile ("index.html", htmlTemp, (err) => {
                if(err) console.log(err)
                else {
                    console.log('Employee list written to HTML')
                }
            })
            console.log("Your employee list is complete");
        }
    })
}

//calling our functions to prompt users
init();

