const fs = require('fs')
const inquirer = require('inquirer');

const StarterQuestions = [
  {

    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',

  },
  
  {

    type: 'input',
    name: 'description',
    message: 'Provide a detailed description of your project:',

  },

  {

    type: 'input',
    name: 'installation_instructions',
    message: 'Provide step by step instructions on how to install your project:',

  },
  
  {

    type: 'input',
    name: 'Usage information ',
    message: 'How will users interact with your project. It would be helpful to provide some use cases if you can:',

  },

  {

    type: 'input',
    name: 'Open Source',
    message: "Can others contribute to your project? If so how please explain how."
  
  },

  {
 
    
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
    
  
  },

  {

    type: 'input',
    name: "GitHub_username",
    message: 'What is your GitHub username?'
 
  },

  {
 
    type: 'input',
    name: 'email',
    message: 'Enter your Email Address:'
 
  },

  {

    type: 'input',
    name: 'Project_URl',
    message: ' Enter the URL of your project if possible, If not dont worry we can add it later'

  },


  {
    tpye: 'input',
    name: 'Additional_Information',
    message: 'Is there any additional information you want people to know about the project'
  }

];
 
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Project URL](#project-url)
- [Additional Information](#additional-information)

## Installation
${answers.installation_instructions}

## Usage
${answers.usage_information}

## Contributing
${answers.open_source}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions about the repo, open an issue or contact me directly at [${answers.email}](mailto:${answers.email}). 
You can find more of my work at [${answers.github_username}](https://github.com/${answers.github_username}/).

## Project URL
${answers.project_url}

## Additional Information
${answers.additional_information}
`;
}


function writeToFile (filename,data){
  fs.writeFile(fileName, data, "utf8" , (err) => {
    if (err) {
      console.log(err);
    } else { 
      console.log('README.md Suucessful');
    }
  });
}



inquirer.prompt(StarterQuestions).then(answers => {
  console.log('Generating README...');
  const readmeContent = generateReadme(answers);
  console.log(readmeContent);
});




