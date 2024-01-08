// CLI Template
const cliTemplate = answers => `
# ${answers.title}

## Description
${answers.description}

## Installation
\`\`\`
npm install ${answers.title.toLowerCase().split(' ').join('-')}
\`\`\`

## Usage
${answers.commandUsage || 'Provide examples of how to use the CLI tool.'}

## Features
List the features of your CLI tool.

## Contributing
${answers.contribution}

## Contact
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: [${answers.email}](mailto:${answers.email})

## License
This project is licensed under the ${answers.license} license.

## Notes 
${answers.additionalInformation} || 'No additional notes provided.'

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
${answers.contribution}

## Contact
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: [${answers.email}](mailto:${answers.email})

## License
This project is licensed under the ${answers.license} license.

## Notes
${answers.additionalInformation || 'No additional notes provided.'}
`;

module.exports = { cliTemplate, webAppTemplate };
