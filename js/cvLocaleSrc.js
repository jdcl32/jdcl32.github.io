'use strict()';
angular.module('cvLocaleSrc', [])
    .constant('locales', [])
    .factory("cvLocaleSrcService", (locales) => {
        return {getLocales(){return locales;}};
    });
