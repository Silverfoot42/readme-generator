// Creates a badge for the license selected by the user
function renderLicenseBadge(license) {
  let licenseBadge = '';
  
  if (license != 'Unlicensed') {
    licenseBadge = "![License Badge](https://img.shields.io/badge/license-" + license + "-brightgreen)"
  }

  return licenseBadge;
}

// Creates link to a chosen license's website
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'MIT') {
    licenseLink = 'https://opensource.org/license/mit/';
  } else if (license === 'GPLv2') {
    licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  } else if (license === 'Apache') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPLv3') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else if (license === 'BSD 3-clause') {
    licenseLink = 'https://opensource.org/license/bsd-3-clause/'
  } else if (license === 'BSD 2-clause') {
    licenseLink = 'https://opensource.org/license/bsd-2-clause/'
  } else if (license === 'LGPLv3') {
    licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0.en.html'
  } else if (license === 'AGPLv3') {
    licenseLink = 'https://www.gnu.org/licenses/agpl-3.0.en.html'
  }

  return licenseLink;
}

// renders license section if a license is chosen
function renderLicenseSection(license) {
  if (license != 'Unlicensed') {
    return `## License
    
  Link to the license used: 
  ${renderLicenseLink(license)}`
  }
}

//generates markdown based on the answers given
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.instructions}

  ## Usage

  ${data.information}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.guidelines}

  ## Tests

  ${data.test}

  ## Questions

  If you have additional questions feel free to reach me using Github or by email.

  ${data.githubUserName}
  ${data.email}

`; 
}

module.exports = generateMarkdown;