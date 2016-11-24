'use strict()';
angular.module('cvLocaleSrc')
    .config((locales) => {
        locales.push({
            name: "English",
            code: "enUS",
            skills: "Skills",
            references: "References",
            workHistory: "Work History",
            education: "Education",
            responsabilities: "Responsabilities",
            at: "at",
            contact: "Contact",
            localName: {
                esDO: "Inglés",
                enUS: "English"
            },
            src: "cvs/jd-english.json"
        });
    });
