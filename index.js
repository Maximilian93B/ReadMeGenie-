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
    name: 'installation instructions',
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
 
    type: 'input',
    name: ' license ',
    message: 'Chose a icense for your project:',
    Option: [ 'MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None' ]
  
  },

  {

    type: 'input',
    name: "GitHub username",
    message: 'What is your GitHub username?'
 
  },

  {
 
    type: 'inpout',
    name: 'Emial address ',
    message: 'Enter your Email Address'
 
  },

  {

    type: 'input',
    name: 'Project URl',
    message: ' Enter the URL of your project if possible, If not dont worry we can add it later'

  },


  {
    tpye: 'input',
    name: 'Additional Information',
    message: 'Is there any additional information you want people to know about the project'
  }

];
 





inquirer.prompt(StarterQuestions).then(answers => {
  console.log('Generating README...');
  // call a function to create and write the README file.
  console.log(answers);
});



