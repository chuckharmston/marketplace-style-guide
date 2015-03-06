define('helpers_local', ['core/log', 'core/nunjucks', 'routes_static'],
    function(log, nunjucks, routes) {

    var logger = log('helpers_local')
    var filters = nunjucks.require('filters');
    var globals = nunjucks.require('globals');


    // filters.myFilter = function(text) {...

    function url_static(name) {
        try {
            return routes[name].path;
        } catch(err) {
            logger.error('Could not find the static view "' + name + '".');
            return '';
        }
    }

    // Functions provided in the default context.
    var helpers = {
        url_static: url_static
    };

    // Put the helpers into the nunjucks global.
    for (var i in helpers) {
        if (helpers.hasOwnProperty(i)) {
            globals[i] = helpers[i];
        }
    }

    return helpers;
});
