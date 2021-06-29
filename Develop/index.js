// TODO: Include packages needed for this application
const inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    "Peoject title?",
    "Description?",
    "Installation instructions?",
    "Usage information?",
    "Contribution guidelines?",
    "Test instructions? ",
    "Choose license for application",
    "Github User Name?",
    "e-mail address"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Succes")
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "test"
        },
        {
            type: "list",
            message: questions[6],
            choices: ["MIT","Mozilla","Apache","none"],
            name: "license"
        },
        {
            type: "input",
            message: questions[7],
            name: "github"
        },
        {
            type: "input",
            message: questions[8],
            name: "email"
        },
    ])
    .then((response) =>
    writeToFile("README.md",generateMarkdown(response))
    );
}

// Function call to initialize app
init();
