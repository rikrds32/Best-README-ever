// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT" ){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if(license == "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  } else if(license =="Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  } else{
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT" ){
    return `(https://opensource.org/licenses/MIT)`;
  } else if(license == "Mozilla"){
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if(license == "Apache"){
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "MIT" || license == "Apache" || license == "Mozilla"){
    return `## license`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## description

${data.description}

## Table of contents

* [installation](#installation)
* [usage](#usage)
* [contribution](#contribution)
* [test](#test)
* [license](#license)
* [github](#github)
* [email](#email)

## installation

${data.installation}

## usage

${data.usage}

## contribution

${data.contribution}

## test

${data.test}


## github

${data.github}

## questions

if you have additional questions you can reach me at ${data.email}
  `;
}

module.exports = generateMarkdown;
