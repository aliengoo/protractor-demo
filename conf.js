exports.config = {
  seleniumAddress: 'https://localhost:4444/wd/hub',
  specs: ['./test/app.spec.js'],
  capabilities: {
    browserName: 'phantomjs',
    version: '',
    platform: 'ANY'
  }
};