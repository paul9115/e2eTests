// config.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        /*'calc.js',
        'registration.js' */
        'multiform.js'
    ],
    multiCapabilities: [{
        // browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
}