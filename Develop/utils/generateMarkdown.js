// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## description

${data.description}

## installation instructions

${data.installation-instructions}

## usage information

${data.usage-information}

## contribution guidelines

${data.contribution-guidelines}

## test instructions

${data.test-instructions}

## choose license 

${data.choose-license}

## github user name

${data.github-user-name}

## e-mail address

${data.e-mail-address}
  `;
}

module.exports = generateMarkdown;
