'use strict()';
angular.module('cvLocaleSrc')
    .config((locales) => {
        locales.push({
            name: "Español",
            code: "esDO",
            skills: "Habilidades",
            references: "Referencias",
            workHistory: "Historial de trabajo",
            education: "Educación",
            responsabilities: "Responsabilidades",
            at: "en",
            contact: "Contacto",
            localName: {
                esDO: "Español",
                enUS: "Spanish"
            },
            src: "cvs/jd-spanish.json"
        });
    });
