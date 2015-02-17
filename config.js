/* Configures component and module upgrade paths. */
var config = require('commonplace').config;
var extend = require('node.extend');

var LIB_DEST_PATH = config.LIB_DEST_PATH;

var localConfig = extend(true, {
    bowerConfig: {
        'document-register-element/build/document-register-element.max.js': config.LIB_DEST_PATH,
    },
    requireConfig: {
        paths: {
            'document-register-element': 'lib/document-register-element.max',
        },
        shim: {
            'document-register-element': {
                'exports': 'window.document.registerElement'
            },
        },
    },
    PORT: 8680
}, config);

localConfig.inlineRequireConfig = config.makeInlineRequireConfig(
    localConfig.requireConfig);

module.exports = localConfig;
