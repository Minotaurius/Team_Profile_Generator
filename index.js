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

function addEmployees(answers) {
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
                console.log(answers)
            })
            // .then (answers => {
            //     // const engineer = new Engineer (name, id, email, github)
            //     const { name, id, email, github } = answers
            //     teamArr.push(answers)
            // })
            // return addEmployees();
        }
        else if(answer.role === 'Intern') {
            addIntern();
        }
        else if (answer.role === 'Finsihed Adding Employees') {
            // fs.writeFile c
            console.log("You're employee list is complete")
        }
    })
    }
    
//     answer === Function()
//     answer === Function()
//     answer === Function()
//     no more employees === fs.writeFile

//     addManager()
//     .then(answers1 => {
//         addEngineer()
//         .then(answers2 => {
//             console.log(answers1,answers2)
//         })
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

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(answers => {
        console.log(answers)
    })
};

//calling our functions to prompt users
addEmployees();
// addManager();
// addEngineer();
// addIntern();
