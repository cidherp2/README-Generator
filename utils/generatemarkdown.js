// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(l) {
    if (l!=='None'){
        return `![Github license](https://img.shields.io/badge/license-${l}-blue.svg)`;
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(l) {
    if (l!=='None'){
        return `* [License](#license)\n`;
    }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(l) {
    if (l !== 'None'){
        return `## License
        Licensed under the ${l} license`;
    }
    return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.username}
${renderLicenseBadge(data.license)}
## Table of Contents

*[Description](#description)

*[Installation-instructions](#installation)

*[Usage](#usage)

*[License](#license)

*[Contribution](#contribution)

*[Tests](#test)

*[Questions](#questions)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation-instructions
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contribution
${data.contribution}
## Tests
${data.test}
## Have any more questions?
You can reach me here
    Git Hub: ${data.username}
    email: ${data.email}
${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown; 