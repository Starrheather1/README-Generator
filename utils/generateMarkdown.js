// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  }
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }
  if (license === "Mozilla") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  if (license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  }

  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Issues](#issues)
  - [Developer](#developer)
  
  ## Installation
  ${data.installation}
  
  ${data.usage !=""?"## Usage": ""}
  ${data.usage}
  
  ${data.credits !=""?"## Credits":""}
  ${data.credits}
  
  ## License
  ${data.license}
  
  ## Features
  ${data.features}
  
  ## How to Contribute

  In order to to contribute, you can reach out to one of the contributors:
  ${data.contributors}
  
  ## Tests
  ${data.tests}

  ## Issues
  In case of issues, you can do the following:
  ${data.issues}

  ## Developer
  Name:${data.developerName}

  [Email Address](mailto:${data.developerEmail})

  `;
}


module.exports = generateMarkdown;
