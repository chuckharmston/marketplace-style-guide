function testHomepage(test) {
    test.assertTitle('Firefox Marketplace Style Guide');
    test.assertVisible('.wordmark');
    test.assertVisible('#page');
}

function testHamburger(test) {
    var nav = '#site-header nav';
    test.assertVisible('.hamburger');
    test.assertNotVisible(nav);
    casper.click('.hamburger');
    test.assertVisible(nav);
}

casper.test.begin('Test mobile homepage', {
    test: function(test) {
        helpers.startCasper();

        helpers.waitForPageLoaded(function() {
            testHomepage(test);
            test.assertNotVisible('#site-footer');
            testHamburger(test);
        });

        helpers.done(test);
    }
});

casper.test.begin('Test tablet homepage', {
    test: function(test) {
        helpers.startCasper({viewport: 'tablet'});

        helpers.waitForPageLoaded(function() {
            testHomepage(test);
            test.assertNotVisible('#site-footer');
            testHamburger(test);
        });

        helpers.done(test);
    }
});

casper.test.begin('Test desktop homepage', {
    test: function(test) {
        helpers.startCasper({viewport: 'desktop'});

        helpers.waitForPageLoaded(function() {
            testHomepage(test);
            test.assertNotVisible('.hamburger');
            test.assertVisible('#site-footer');
        });

        helpers.done(test);
    }
});
