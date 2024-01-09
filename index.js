//Define whats needed:

const fs = require('fs')
const inquirer = require('inquirer');
const figlet = require('figlet');
const { cliTemplate , webAppTemplate } = require ('./templates'); // Refer to templates in './lib/templates.js'

// readmeGenie title  display in CLI  and welcome message using figlet 
console.log(figlet.textSync('readMeGenie', { font: 'Colossal'},{ horizontalLayout: 'full'}));

console.log('Welcome to readmeGenie, the intuitive tool that effortlessly crafts professional README files for your projects. Answer a few simple questions, and let/s get started!\n');


// All questions from array will display in the CLI
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
  // Uses strict equality to define if webApp or CLI app
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
    // used regex email validation check 
    type: 'input',
    name: 'email',
    message: 'Enter your Email Address:',
    validate: function(input) {
      const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regex validation check 
      return validEmail.test(input) || 'Please enter a valid email address.';
      
    } 
  }
,
  {
    type: 'input',
    name: 'projectUrl', 
    message: 'Enter the URL of your project if applicable, if not you can always add it later!',
    when: answers => answers.projectType === 'Web App'
  },

  {
    type: 'input',
    name: 'additionalInformation',
    message: 'Is there any additional information you want people to know about the project'
  }

];
 
// function generateReadme will generate README content based on users input provided from starterQuestions[]
 
function generateReadme(answers) {
  let template; // leave initial value null , if CLI Template call clitemplate if webApp call webApptemplate
  if(answers.projectType === 'CLI Tool') {
    template = cliTemplate(answers);

  } else if (answers.projectType === 'Web App') {
    template = webAppTemplate(answers);
  }
  return template;
}

// Function will write the gernerated README content to a file named README.md (for conventional puroposes) Will log success or failure 
function writeToFile(filename, data) {
  const filePath = `${process.cwd()}/${filename}`;
  
  fs.writeFile(filePath, data, "utf8", (err) => {
    if (err) {
      console.log('Failed to create README.md');
      console.error(err);
    } else {
      // Displaying the success message using figlet
      figlet('Happy Coding ! ', (err, data) => {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        console.log(data);
        console.log('README Successfully Generated, Have a good Day!\n') // Will Display underneath the  'Happy Coding' Figlet  // Display the styled text
      });
    }
  });
}


  // this function will display the summary of all responses for the user to confirm input 
function confirmAndGenerateReadme(answers) {
  console.log('\nHow does this look?:');
  console.log(JSON.stringify(answers, null, '  '));

  
  // prompt that will confirm if the user wants to generate README.
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmGeneration',
      message: 'Are you happy? Shall we generate your README?',
      default: true
    }
  ]).then(confirmation => {
    if (confirmation.confirmGeneration) {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
    } else {
      console.log('Unable to generate README, You can start over if you wish.');
    }
  });
}

 // initiate inquirer prompt with starterQuestions --> will pass users answers to confirm and generate the file. 
function startQuestions() {
  inquirer.prompt(StarterQuestions).then(answers => {
    confirmAndGenerateReadme(answers);
  });
}

 // execture the script. 
startQuestions(); 


