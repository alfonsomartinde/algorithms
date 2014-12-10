module.exports = {
    pivotal: {
        src : [
            'dev/js/core/base.js',
            'dev/js/core/helpers.js',
            'dev/js/algorithms/**/*'
        ],
        options: {
            vendor: [
                'dev/js/libs/jquery.js',
                'dev/js/libs/underscore.js',
                'dev/test/libs/jasmine-jquery.js'
            ],
            specs: 'dev/test/spec/*Spec.js',
            helpers : 'dev/test/spec/*Helper.js'
        }
    }
};