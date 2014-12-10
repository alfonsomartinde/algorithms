/**
 * Base namespace de la aplicación. Comprueba antes si APP ha sido definido en 
 * el actual scope, para prevenir pisar el trabajo en caso de que base.js haya
 * sido llamado más de una vez.
 *
 * @const
 */
var APP = APP || {};

/**
 * Referencia al contexto global. En la mayoría de los casos será "window".
 */
APP.global = this;

/**
 * Prototypal Inheritance in JavaScript
 * by Mozilla
 *
 * @usage:
 * 
 *     MiObjeto1 = {
 *          metodoA: function(){}
 *     };
 *     MiObjeto2 = Object.create( MiObjeto1, prototipo nuevo );
 *
 */
if (typeof Object.create !== 'function') {
    Object.create = (function() {
        var Object = function() {};
        return function (prototype) {
            var result = {};
            if (arguments.length > 1) {
                throw new Error('Second argument not supported');
            }
            if (typeof prototype !== 'object') {
                throw new TypeError('Argument must be an object');
            }
            Object.prototype = prototype;
            Object.prototype = null;
            return result;
        };
    })();
}

(function( app, w, undefined ){
  
    "use strict";

    /**
     * Some configuration properties
     */
    app.config = {
        debug:    true   // If true, you can read console.log messages
    };


    /**
     * Escribe un objeto dentro del namespace, asegurándose de que no se ha 
     * declarado previamente, y no se está sobreescribiendo nada. 
     * "APP.package.part"
     *
     * APP.namespace("APP.b.c") genera:
     *       APP.a = {};
     *       APP.a.b = {};
     *       APP.a.b.c = {};
     *
     * @param {string} "string": nombre del objeto que será extendido.
     * @public
     */
    app.namespace = function ( string ) {
        var parts = string.split("."),
            parent = app,
            i;

        // Quitamos "APP" del principio, por si se hubiera añadido al declarar
        // APP.namespace("APP.a.b.c");
        if (parts[0] === "APP") {
            parts = parts.slice(1);
        }

        // Recorremos el array
        for (i = 0; i < parts.length; i += 1) {
            // Creamos la propiedad vacía {}, si no existe
            if (typeof parent[parts[i]] === "undefined") {
                parent[parts[i]] = {};
            }
            parent = parent[parts[i]];
        }

        return parent;

    };

}( APP, this ));


// Avoid `console` errors in browsers that lack a console.
(function() {

    "use strict";

    var method,
        noop = function () {},
        methods = [
            "assert", "clear", "count", "debug", "dir", "dirxml", "error",
            "exception", "group", "groupCollapsed", "groupEnd", "info", "log",
            "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd",
            "timeStamp", "trace", "warn"
        ],
        length = methods.length,
        console = ( window.console = window.console || {} );

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
