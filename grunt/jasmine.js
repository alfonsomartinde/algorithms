module.exports = {
    pivotal: {
        src : [
            'dev/js/indr/base.js',
            'dev/js/commons.js'
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