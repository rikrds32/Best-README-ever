// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "MIT" || license == "Apache" || license == "Mozilla"){
    return `${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## description

${data.description}

## installation instructions

${data.installation}

## usage information

${data.usage}

## contribution guidelines

${data.contribution}

## test instructions

${data.test}

## license 

${renderLicenseSection(data.license)}

## github user name

${data.github}

## e-mail address

${data.email}
  `;
}

module.exports = generateMarkdown;
