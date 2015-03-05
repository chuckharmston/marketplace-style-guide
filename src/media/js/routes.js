define('routes',
    ['core/router', 'routes_static'],
    function(router, routes_static) {

    var routes = [];

    Object.keys(routes_static).forEach(function(key) {
        routes.push({
            pattern: '^' + routes_static[key].path + '$',
            view_name: 'static'
        });
    });

    router.addRoutes(routes);
});
