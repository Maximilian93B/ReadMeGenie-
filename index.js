const inquirer = import('inquirer');

const StarterQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
];
 





inquirer.prompt(StarterQuestions).then(answers => {
  console.log('Generating README...');
  // call a function to create and write the README file.
  console.log(answers);
});



