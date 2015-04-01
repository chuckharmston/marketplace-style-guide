/*
This view compares window.location.pathname against a list of routes defined in
the static_routes module.

This kind of approach makes sense for the marketplace-style-guide project, as
the majority of views are simple HTML templates that require no view-level
processing.

TODO: pull this into core-modules (chuck).
*/
define('views/static', ['core/l10n', 'routes_static'],
    function(l10n, routes) {
    var gettext = l10n.gettext;
    return function(builder) {
        var route = (function() {
            var matched = null;
            Object.keys(routes).forEach(function(name) {
                if (!matched) {
                    var route = routes[name];
                    if (window.location.pathname === route.path) {
                        matched = route;
                    }
                }
            });
            return matched;
        })();
        if (route) {
            builder.start('views/' + route.template);
            builder.z('type', 'static');
            builder.z('title', route.title);
        } else {
            builder.start('errors/404.html');
            builder.z('type', 'error');
            builder.z('title', gettext('Page Not Found'));
        }
    };
});
