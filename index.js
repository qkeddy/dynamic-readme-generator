// Initialize NPM packages
const inquirer = require("inquirer");
const fs = require("fs");

// Formulate questions
const questions = [
    { type: "input", message: "What is your project title? ", name: "title" },
    {
        type: "input",
        message: `Please provide a brief description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?`,
        name: "description",
    },
    { type: "input", message: "What are the steps required to deploy your project? Provide a step-by-step description of how to get the development environment running.", name: "deploymentSteps" },
    { type: "input", message: "Provide instructions and examples for use. Note that screenshots can be added after the readme is generated.", name: "projectUse" },
    {
        type: "input",
        message:
            "Please list your collaborators, if any, with links to their GitHub profiles. Additionally, if you used any third-party assets that require attribution, list the creators with links to their primary web presence. Use the format 'Collaborator|GitHub Link' or 'Resource|Resource Link' with semicolons between each reference.",
        name: "collaborators",
    },
    {
        type: "input",
        message: "Are there any tests or test results that should be highlighted? Add a semicolons between each test.",
        name: "tests",
    },
    {
        type: "checkbox",
        message: "What type of license should be applied?",
        choices: ["A", "B"],
        name: "license",
    },
    {
        type: "input",
        message: "Does your project have any special features? Add a semicolons between each feature.",
        name: "features",
    },
    {
        type: "input",
        message: "How should people contribute?",
        name: "contribute",
    },
];

// Define HTML template
const readmeTemplate = ({ title, description }) =>
    `# ${title}

## ${description}
`;

// Write the HTML to a file
function writeToFile(response) {
    fs.writeFile("./README_temp.md", readmeTemplate(response), (err) => (err ? console.error(err) : console.log("success!")));
}

// TODO: Create a function to initialize app
function init() {
    // Ask questions
    inquirer
        .prompt(questions)

        .then((response) => {
            // const { name, location } = response;
            // console.log(name);
            // console.log(location);
            writeToFile(response);
        });

    // Validate that they were answered
}

// Function call to initialize app
init();
