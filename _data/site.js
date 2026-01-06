module.exports = function() {
  // Load the YAML data files
  const fs = require('fs');
  const yaml = require('js-yaml');

  return {
    data: {
      portfolio: yaml.load(fs.readFileSync('_data/portfolio.yaml', 'utf8')),
      reading: yaml.load(fs.readFileSync('_data/reading.yaml', 'utf8')),
      writing: yaml.load(fs.readFileSync('_data/writing.yaml', 'utf8'))
    },
    // Site metadata from _config.yml
    title: "Amanda Pinsker",
    tagline: "Independent Product & Experience Designer",
    description: "Portfolio and more of Amanda Pinsker, independent product & experience designer.",
    image: "/img/og-img.png",
    twitter: {
      username: "ampinsk"
    }
  };
};
