define('settings_app',
    ['core/capabilities', 'core/settings', 'core/storage', 'settings_local'],
    function(caps, settings, storage, localSettings) {

     function offline_cache_enabled() {
        if (storage.getItem('offline_cache_disabled') || caps.phantom) {
            return false;
        }
        return window.location.search.indexOf('cache=false') === -1;
    }

    settings._extend({
        api_url: 'http://' + window.location.hostname,

        param_whitelist: ['q', 'sort'],
        api_param_blacklist: null,
        api_cdn_whitelist: {},

        offline_cache_whitelist: {},
        offline_cache_enabled: offline_cache_enabled,
        offline_cache_limit: 1024 * 1024 * 4, // 4 MB

        model_prototypes: {},

        fragment_error_template: 'errors/fragment.html',
        pagination_error_template: 'errors/pagination.html',

        switches: [],

        title_suffix: 'Marketplace Style Guide'
    });

    settings._extend(localSettings);
});
