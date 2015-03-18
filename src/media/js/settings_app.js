define('settings_app',
    ['core/capabilities', 'core/l10n', 'core/settings', 'core/storage',
     'settings_local', 'underscore'],
    function(capabilities, l10n, settings, storage,
             localSettings, _) {

    var gettext = l10n.gettext;

     function offline_cache_enabled() {
        if (storage.getItem('offline_cache_disabled') || capabilities.phantom) {
            return false;
        }
        return window.location.search.indexOf('cache=false') === -1;
    }

    settings._extend({
        app_name: 'Marketplace Style Guide',
        init_module: 'main',
        default_locale: 'en-US',
        api_url: 'http://' + window.location.hostname,  // No trailing slash, please.

        storage_version: '0',

        param_whitelist: ['q', 'sort'],
        api_param_blacklist: null,
        api_cdn_whitelist: {},

        // These are the only URLs that should be cached
        // (key: URL; value: TTL [time to live] in seconds).
        // Keep in mind that the cache is always refreshed asynchronously;
        // these TTLs apply to only when the app is first launched.
        offline_cache_whitelist: {},
        offline_cache_enabled: offline_cache_enabled,
        offline_cache_limit: 1024 * 1024 * 4, // 4 MB

        model_prototypes: {},

        fragment_error_template: 'errors/fragment.html',
        pagination_error_template: 'errors/pagination.html',

        switches: [],

        // The URLs for the Persona ToS and Privacy Policy.
        persona_tos: null,
        persona_privacy: null,

        title_suffix: 'Marketplace Style Guide'
    });

    settings._extend(localSettings);
});
