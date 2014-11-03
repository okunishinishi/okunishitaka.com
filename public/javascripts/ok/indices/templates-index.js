/**
 * Templates index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('templatesIndex', function defineTemplatesIndex($injector) {
            return {
                get adminAdminBlogEditorSectionHtmlTemplate() { return $injector.get('adminAdminBlogEditorSectionHtmlTemplate'); },
                get adminAdminBlogListSectionHtmlTemplate() { return $injector.get('adminAdminBlogListSectionHtmlTemplate'); },
                get adminAdminEditorSectionHtmlTemplate() { return $injector.get('adminAdminEditorSectionHtmlTemplate'); },
                get blogBlogAsideContentHtmlTemplate() { return $injector.get('blogBlogAsideContentHtmlTemplate'); },
                get blogBlogEditEditorSectionHtmlTemplate() { return $injector.get('blogBlogEditEditorSectionHtmlTemplate'); },
                get blogBlogEditListSectionHtmlTemplate() { return $injector.get('blogBlogEditListSectionHtmlTemplate'); },
                get blogBlogEditSectionContentHtmlTemplate() { return $injector.get('blogBlogEditSectionContentHtmlTemplate'); },
                get blogBlogEditSectionHtmlTemplate() { return $injector.get('blogBlogEditSectionHtmlTemplate'); },
                get blogBlogListSectionContentHtmlTemplate() { return $injector.get('blogBlogListSectionContentHtmlTemplate'); },
                get blogBlogListSectionHtmlTemplate() { return $injector.get('blogBlogListSectionHtmlTemplate'); },
                get footerHtmlTemplate() { return $injector.get('footerHtmlTemplate'); },
                get headerHtmlTemplate() { return $injector.get('headerHtmlTemplate'); },
                get indexIndexContentTitleHtmlTemplate() { return $injector.get('indexIndexContentTitleHtmlTemplate'); },
                get indexIndexMenuSectionHtmlTemplate() { return $injector.get('indexIndexMenuSectionHtmlTemplate'); },
                get indexIndexSeeMoreButtonHtmlTemplate() { return $injector.get('indexIndexSeeMoreButtonHtmlTemplate'); },
                get indexIndexTitleHtmlTemplate() { return $injector.get('indexIndexTitleHtmlTemplate'); },
                get metaHtmlTemplate() { return $injector.get('metaHtmlTemplate'); },
                get profileProfileListHtmlTemplate() { return $injector.get('profileProfileListHtmlTemplate'); },
                get profileProfileTableHtmlTemplate() { return $injector.get('profileProfileTableHtmlTemplate'); },
                get socialHtmlTemplate() { return $injector.get('socialHtmlTemplate'); },
                get workWorkLinkHtmlTemplate() { return $injector.get('workWorkLinkHtmlTemplate'); },
                get workWorkListHtmlTemplate() { return $injector.get('workWorkListHtmlTemplate'); }
            };
        });
})(angular);