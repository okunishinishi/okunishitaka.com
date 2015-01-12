/**
 * @ngdoc object
 * @name templatesIndex
 * @description Templates index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('templatesIndex', function defineTemplatesIndex($injector) {
            return {
                get coverHtmlTemplate() { return $injector.get('coverHtmlTemplate'); },
                get faviconHtmlTemplate() { return $injector.get('faviconHtmlTemplate'); },
                get indexIndexCaptionSectionHtmlTemplate() { return $injector.get('indexIndexCaptionSectionHtmlTemplate'); },
                get indexIndexContentTitleHtmlTemplate() { return $injector.get('indexIndexContentTitleHtmlTemplate'); },
                get indexIndexSeeMoreButtonHtmlTemplate() { return $injector.get('indexIndexSeeMoreButtonHtmlTemplate'); },
                get indexIndexTitleSectionHtmlTemplate() { return $injector.get('indexIndexTitleSectionHtmlTemplate'); },
                get metaHtmlTemplate() { return $injector.get('metaHtmlTemplate'); },
                get titleHtmlTemplate() { return $injector.get('titleHtmlTemplate'); },
                get toastHtmlTemplate() { return $injector.get('toastHtmlTemplate'); },
                get trackHtmlTemplate() { return $injector.get('trackHtmlTemplate'); }
            };
        });
})(angular);