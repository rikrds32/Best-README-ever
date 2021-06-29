// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT" || license == "Apache" || license == "Mozilla"){
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT" || license == "Apache" || license == "Mozilla"){
    return `(https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "MIT" || license == "Apache" || license == "Mozilla"){
    renderLicenseLink(license);
    return `## license`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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


${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}


## github

${data.github}

## questions

if you have additional questions you can reach me at ${data.email}
  `;
}

module.exports = generateMarkdown;
