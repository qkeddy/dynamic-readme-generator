// Initialize NPM packages
const inquirer = require("inquirer");
const fs = require("fs");

// Formulate questions
const questions = [
    {
        type: "input",
        message: "What is your email account?\n",
        default: "name@acme.com",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub url?\n",
        default: "https://github.com/name",
        name: "gitHubUrl",
    },
    {
        type: "list",
        message: "What type of license should be applied?\n",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
        default: "MIT License",
        name: "license",
    },
    { type: "input", message: "What is your project title?\n", default: "My Cool Project", name: "title" },
    {
        type: "input",
        message: `Please provide a brief description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?\n`,
        default: "This project does cool things.",
        name: "description",
    },

    { type: "input", message: "What are the steps required to deploy your project? Provide a step-by-step description of how to get the development environment running.\n", default: "This project has no steps to deploy.", name: "deploymentSteps" },
    {
        type: "input",
        message: "Does your project have any special features? Add a semicolons between each feature.\n",
        default: "This project does not have any special features to highlight.",
        name: "features",
    },

    { type: "input", message: "Provide instructions and examples for use. Note that screenshots can be added after the readme is generated.\n", default: "Open index.html with your web browser or equivalent.", name: "projectUse" },
    {
        type: "input",
        message: "Are there any tests or test results that should be highlighted? Add a semicolons between each test.\n",
        default: "There are currently no tests to share.",
        name: "tests",
    },
    {
        type: "input",
        message:
            "Please list your collaborators, if any, with links to their GitHub profiles. Additionally, if you used any third-party assets that require attribution, list the creators with links to their primary web presence. Use the format 'Collaborator|GitHub Link' or 'Resource|Resource Link' with semicolons between each reference.\n",
        default: "This project was independently built.",
        name: "collaborators",
    },
];

// Define HTML template
const readmeTemplate = ({ email, gitHubUrl, title, description, deploymentSteps, features, projectUse, tests, collaborators }) =>
    `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

    # ${title}

## ${description}

## Table of Contents

- [Deployment](#deployment)
- [Features](#features)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [How to Contribute](#how-to-contribute)

## Deployment
${deploymentSteps}


## Features
${features}


## Usage
${projectUse}


## Tests
${tests}


## Credits
${collaborators}


## How to Contribute

If you would like to contribute to this project. Please email me at ${email}. If you would like to contribute to future projects, please follow me at ${gitHubUrl} 

It is requested that all contributors adhere to the standards outlined in the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
`;

// Write the HTML to a file
function writeToFile(response) {
    fs.writeFile("./README_temp.md", readmeTemplate(response), (err) => (err ? console.error(err) : console.log("success!")));
}

// TODO: Create a function to initialize app
function init() {
    // Ask questions
    inquirer.prompt(questions).then((response) => {
        writeToFile(response);
    });

    // Validate that they were answered
}

// Function call to initialize app
init();
