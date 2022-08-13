// packages
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');

// importing classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// place to store anyone we register in our prompts
const workers = []