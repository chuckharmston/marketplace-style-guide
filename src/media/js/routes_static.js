/*
Defines an object of routes to be served by the `static` view. Route definitions
look like:

route-name: {
    path: '/pathname/without/trailing/slash',
    template: 'relative/to/templates/dir.html',
    title: gettext('Goes in the <title> tag.'),
}

This route can then be reversed in templates like:

{% url_static('route-name') %}

*/
(function() {

define('routes_static', ['core/l10n'],
    function(l10n) {
    var gettext = l10n.gettext;
    return {
        'index': {
            path: '/',
            template: '_index.html',
            title: null,
        },
        'js-widgets': {
            path: '/javascript-widgets',
            template: 'js-widgets.html',
            title: gettext('JavaScript Widgets'),
        },
        'design-elements': {
            path: '/design-elements',
            template: 'design-elements.html',
            title: gettext('Design Elements'),
        },
        'typography': {
            path: '/design-elements/typography',
            template: 'design-elements/typography.html',
            title: gettext('Typography'),
        },
    };
});

})();
