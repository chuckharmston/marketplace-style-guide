console.log('Firefox Marketplace Style Guide');

define('main', ['init'], function(init) {
init.done(function() {
require(
    [// Modules actually used in main.
     'core/l10n', 'core/log', 'core/navigation', 'core/nunjucks',
     'core/settings', 'core/user', 'core/z',
     // Modules we require to initialize global stuff.
     'core/forms', 'core/login', 'helpers_local', 'elements/nav'],
    function(l10n, log, navigation, nunjucks, settings, user, z, forms, login,
             helpers_local, nav) {
    var logger = log('main');

    z.body.addClass('html-' + l10n.getDirection());

    z.page.on('reload_chrome', function() {
        // Last minute template compilation.
        logger.log('Reloading chrome');
        var $header = $('#site-header');
        var $footer = $('#site-footer');

        $header.html(nunjucks.env.render('_includes/header.html'));
        $(nunjucks.env.render('_includes/nav.html')).insertAfter($header)
        $footer.html(nunjucks.env.render('_includes/footer.html'));

        z.body.toggleClass('logged-in', user.logged_in());
        z.page.trigger('reloaded_chrome');
    }).trigger('reload_chrome');

    // Perform initial navigation.
    z.page.trigger('navigate',
                   [window.location.pathname + window.location.search]);
    logger.log('Done');
});
});
});
