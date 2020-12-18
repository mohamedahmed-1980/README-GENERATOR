// function to generate markdown for README

const fs = require('fs');
function generateMarkdown(data) {

  return `# ${data.title}
  ![MIT](mit.png)

  ## table of content 
  * [Description](#Description )
  * [installation-instructions](#installation-instructions )
  * [usage-information](#usage-information )
  * [contribution-guidelines](#contribution-guidelines )
  * [Test-instructions](#Test-instructions )
  * [License](#License)
  * [questions](#questions)
  
  
  ## Description
  ${data.description}

  ## Installation-instructions
  ${data.installation}

  ## usage-information
  ${data.usage}

  ##  contribution-guidelines
  ${data.contribution}

  ## Test-instructions
  ${data.test}

  ## license
  [${data.license}](https://mit-license.org/)

  ## questions
   - If you have any question you can contact me by my email 
        - [Github profile](https://github.com/${data.github})
        - Email address ${data.email}

`;

}

module.exports = generateMarkdown;
