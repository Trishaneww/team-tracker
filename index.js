// Import packages and classes
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const {generateHtml} = require("./src/generateHtml");

// Prompts for the different types of employee
const menuPrompts = [
    {
        type: "list",
        name: "menuOptions",
        message: "Select the type of employee you would like to add",
        choices: ["Engineer", "Intern", "Finish Building Team"]
    }
];

// Manager Prompts
const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Please input the Manager's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please input the Manager's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please input the Manager's email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please input the Manager's office number"
    },
];

// Engineer prompts
const engineerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Please input the Engineer's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please input the Engineer's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please input the Engineer's email"
    },
    {
        type: "input",
        name: "github",
        message: "Please input the Engineer's GitHub"
    },
];

// Intern prompts
const internPrompts = [
    {
        type: "input",
        name: "name",
        message: "Please input the Intern's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please input the Intern's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please input the Intern's email"
    },
    {
        type: "input",
        name: "school",
        message: "Please input the Intern's school"
    },
];

// Empty team object
const team = {
    manager: null,
    engineers: [],
    interns: []
};

function menu() { // Menu function
    inquirer.prompt(menuPrompts).then(responses => { // Ask the prompts for the menu
        if (responses["menuOptions"] === "Engineer") { // If you choose to add an Engineer
            inquirer.prompt(engineerPrompts).then(responses => {
                const {name, id, email, github} = responses; // Deconstruct the responses
                team.engineers.push(new Engineer(name, id, email, github)); // Create a new engineer and add it to the team
                menu(); // Go back to the menu
            });
        } else if (responses["menuOptions"] === "Intern") { // If you choose to add an Intern
            inquirer.prompt(internPrompts).then(responses => {
                const {name, id, email, school} = responses; // Deconstruct the responses
                team.interns.push(new Intern(name, id, email, school)); // Create a new intern and add it to the team
                menu(); // Go back to the menu
            });
        } else if (responses["menuOptions"] === "Finish Building Team") {  // If you choose to finish building your team
            generateHtml(team); // Generate the HTML
            generateCss(); // Generate the CSS
        }
    }).catch(e => {
        // Catch any errors
        console.error(e);
    });
}

function init() { // Initialization function
    inquirer.prompt(managerPrompts).then(responses => { // Create the manager
        const {name, id, email, officeNumber} = responses; // Deconstruct the responses
        team.manager = new Manager(name, id, email, officeNumber); // Add manager to the team
        menu(); // Call the menu
    });
}

init(); // Call the initialization function