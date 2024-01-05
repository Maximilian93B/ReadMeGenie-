
// CLI Template

const cliTemplate = answers => `
# ${answers.title}

## Description
${answers.description}

## Installation

npm install ${answers.title.toLowerCase().split(' ').join('-')}


## Usage
Provide examples of how to use the CLI tool.
${answers.usage}

## Features
List the features of your CLI tool.

## Contributing
${answers.contributing}

## License
This project is licensed under the ${answers.license} license.
`;

// Web App Template 


const webAppTemplate = answers => `
# ${answers.title}

## Live Demo
[Live Demo Link](${answers.projectUrl})

## Description
${answers.description}

## Built With
Mention the frameworks, libraries, and tools used.

## Features
What makes your project stand out?

## Getting Started
Instructions on setting up the project locally.

## Contributing
${answers.contributing}

## License
This project is licensed under the ${answers.license} license.
`;

module.exports = {cliTemplate, webAppTemplate }; 