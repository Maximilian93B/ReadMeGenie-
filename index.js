const fs = require('fs')
const inquirer = require('inquirer');
const { cliTemplate , webAppTemplate } = require ('./templates');

const StarterQuestions = [
{

  type: 'list',
  name: 'projectType',
  message: 'Is your project a CLI Tool or a Web App?',
  choices: ['CLI Tool', 'Web App']

},

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
    name: 'installationInstructions',
    message: 'Provide step by step instructions on how to install your project:',

  },
  
  {

    type: 'input',
    name: 'usageInformation ',
    message: 'How will users interact with your project. It would be helpful to provide some use cases if you can:',
    when: answers => answers.projectType === 'Web App'
  },

  {
    type: 'input',
    name: 'commandUsage',
    message: 'Provide command-line usage examples for your application.',
    when: answers => answers.projectType === 'CLI Tool'
  },
  
  {

    type: 'input',
    name: 'contribution',
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
    name: "githubUsername",
    message: 'What is your GitHub username?'
 
  },

  {
 
    type: 'input',
    name: 'email',
    message: 'Enter your Email Address:'
 
  },

{
  type: 'input',
  name: 'projectUrl', 
  message: 'Enter the URL of your project if applicable, if not you can always add it later!',
  when: answers => answers.projectType === 'Web App'
},

  {
    tpye: 'input',
    name: 'additionalInformation',
    message: 'Is there any additional information you want people to know about the project'
  }

];
 
function generateReadme(answers) {
  let template;
  if(answers.projectType === 'CLI Tool') {
    template = cliTemplate(answers);

  } else if (answers.projectType === 'Web App') {
    template = webAppTemplate(answers);
  }
  return template
}

function writeToFile (filename,data){
  const filePath = ' ${process.cwd()}/${filename}';
  
  fs.writeFile(filePath, data, "utf8" , (err) => {
    if (err) {
      console.log(err);
    } else { 
      console.log('README.md Suucessful located in ${process.cwd()}');
    }
  });
}



inquirer.prompt(StarterQuestions).then(answers => {
  console.log('Generating README...');
  const readmeContent = generateReadme(answers);
  console.log(readmeContent);
});




