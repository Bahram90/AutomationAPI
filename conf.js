var HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    // The address of a running selenium server.

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.

    onPrepare: function () {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../Report/screenshots',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            preserveDirectory: false,
            docName: 'show.html',
        }).getJasmine2Reporter());

        // browser.manage().timeouts().implicitlyWait(100000),
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-fullscreen',
                //'--incognito'
            ]
        }
    },

    directConnect: true,

    suits: {


        smoke: ["../Tests/AddCustomer.spec.js", "../Tests/BankManagerSimple.spec.js"],
        regression: ["../Tests/*.spec.js"],

    },


    specs: ['../Tests/Login.spec.js'],

    framework: 'jasmine',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        //print : function (){},
        defaultTimeoutInterval: 50000,
        showColors: true, // Use colors in the command line report.
    }
};