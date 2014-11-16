/**
 * ok constants module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.constants', [
            
        ]);
})(angular);

/**
 * Constant for app.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('appConstant', {
		    "SUPPORTED_LANGS": [
		        "ja",
		        "en"
		    ],
		    "VERSION": "0.0.0",
		    "HOMEPAGE": "http://okunishitaka.com",
		    "DOMAIN": "okunishitaka.com",
		    "GA_TRACKING_ID": "UA-56426713-1"
		});

})(angular);


/**
 * Constant for code.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('codeConstant', {
		    "appErrorCodes": {
		        "CONFLICT_ERROR": 1,
		        "CONNECTION_ERROR": 2,
		        "NOT_FOUND_ERROR": 3,
		        "SERVER_ERROR": 4,
		        "UNEXPECTED_ERROR": 5,
		        "VALIDATION_ERROR": 6
		    },
		    "httpStatusCodes": {
		        "SUCCESS": 200,
		        "NOT_FOUND_ERROR": 404,
		        "CONFLICT_ERROR": 409,
		        "VALIDATION_ERROR": 422,
		        "SERVER_ERROR": 503
		    }
		});

})(angular);


/**
 * Constant for locale.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('localeConstant', {
		    "en": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi",
		            "COPY_RIGHT": "Copyright © 2014 Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content ",
		                "TAGS": "Tags (comman-seperated)"
		            }
		        },
		        "labels": {
		            "blogstatus": {
		                "PUBLIC": "public",
		                "PRIVATE": "private"
		            },
		            "footer": {
		                "LINKS": "Links"
		            }
		        },
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "pageDescriptions": {
		            "INDEX": "Top page.",
		            "PROFILE": "Who am I?",
		            "BLOG": "What I think?",
		            "WORK": "What I've made."
		        },
		        "buttons": {
		            "NEW": "Create new",
		            "MORE": "See more",
		            "EDIT": "Edit",
		            "DELETE": "Delete",
		            "CANCEL": "Cancel",
		            "SAVE": "Save",
		            "CLOSE": "Close",
		            "DETAIL": "See more detail",
		            "TRY_DEMO": "Try demo",
		            "VIEW_SOURCE_CODE": "View the source code",
		            "VISIT_SITE": "Visit the site"
		        },
		        "errors": {
		            "CONFLICT_ERROR": "Conflict occured.",
		            "CONNECTION_ERROR": "Connection error occured.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occured.",
		            "UNEXPECTED_ERROR": "Unexpected error occured.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not availabe anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Plase try again later.",
		            "UNEXPECTED_ERROR": "Something seems to be wrong.",
		            "VALIDATION_ERROR": ""
		        },
		        "pages": {
		            "index": {
		                "CAPTION": [
		                    "Homepage of Taka Okunishi"
		                ],
		                "TITLE": "okunishitaka.com"
		            },
		            "profile": {
		                "NAME": "name",
		                "captions": {
		                    "ABOUT": "About",
		                    "PERSONEL": "Personel",
		                    "EDUCATION": "Eductation",
		                    "JOB_HISTORY": "Job History",
		                    "QUALIFICATION": "Qualification"
		                }
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
		            },
		            "work": {
		                "DESCRIPTION": "Personal works."
		            },
		            "admin": {
		                "LOGO": "admin.okunishitaka.com",
		                "ASK_SURE": "Are you sure?",
		                "SAVE_BLOG_DONE": "The entry has been saved.",
		                "DESTROY_BLOG_DONE": "The entry has been deleted."
		            }
		        }
		    },
		    "ja": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi",
		            "COPY_RIGHT": "Copyright © 2014 Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content ",
		                "TAGS": "Tags (comman-seperated)"
		            }
		        },
		        "labels": {
		            "blogstatus": {
		                "PUBLIC": "public",
		                "PRIVATE": "private"
		            },
		            "footer": {
		                "LINKS": "Links"
		            }
		        },
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "pageDescriptions": {
		            "INDEX": "Top page.",
		            "PROFILE": "Who am I?",
		            "BLOG": "What I think?",
		            "WORK": "What I've made."
		        },
		        "buttons": {
		            "NEW": "Create new",
		            "MORE": "See more",
		            "EDIT": "Edit",
		            "DELETE": "Delete",
		            "CANCEL": "Cancel",
		            "SAVE": "Save",
		            "CLOSE": "Close",
		            "DETAIL": "See more detail",
		            "TRY_DEMO": "Try demo",
		            "VIEW_SOURCE_CODE": "View the source code",
		            "VISIT_SITE": "Visit the site"
		        },
		        "errors": {
		            "CONFLICT_ERROR": "Conflict occured.",
		            "CONNECTION_ERROR": "Connection error occured.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occured.",
		            "UNEXPECTED_ERROR": "Unexpected error occured.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not availabe anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Plase try again later.",
		            "UNEXPECTED_ERROR": "Something seems to be wrong.",
		            "VALIDATION_ERROR": ""
		        },
		        "pages": {
		            "index": {
		                "CAPTION": [
		                    "Homepage of Taka Okunishi"
		                ],
		                "TITLE": "okunishitaka.com"
		            },
		            "profile": {
		                "NAME": "name",
		                "captions": {
		                    "ABOUT": "About",
		                    "PERSONEL": "Personel",
		                    "EDUCATION": "Eductation",
		                    "JOB_HISTORY": "Job History",
		                    "QUALIFICATION": "Qualification"
		                }
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
		            },
		            "work": {
		                "DESCRIPTION": "Personal works."
		            },
		            "admin": {
		                "LOGO": "admin.okunishitaka.com",
		                "ASK_SURE": "Are you sure?",
		                "SAVE_BLOG_DONE": "The entry has been saved.",
		                "DESTROY_BLOG_DONE": "The entry has been deleted."
		            }
		        }
		    }
		});

})(angular);


/**
 * Constant for apiUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('apiUrlConstant', {
		    "API_BLOGS_GET": "/api/blogs",
		    "API_BLOGS_POST": "/api/blogs",
		    "API_BLOGS_GET_WITH_ID": "/api/blogs/:_id",
		    "API_BLOGS_PUT_WITH_ID": "/api/blogs/:_id",
		    "API_BLOGS_DELETE_WITH_ID": "/api/blogs/:_id",
		    "API_SETTINGS_GET": "/api/settings",
		    "API_SETTINGS_PUT": "/api/settings",
		    "API_PROFILES_GET": "/api/profiles",
		    "API_PROFILES_PUT": "/api/profiles",
		    "API_WORKS_GET": "/api/works"
		});

})(angular);


/**
 * Constant for imageUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('imageUrlConstant', {
		    "ME": "/images/me.jpg",
		    "OKUNISHITAKA": "/images/okunishitaka.com-favicon.png",
		    "QUALIFICATION_0159_FULL": "/images/qualification/full/qualification_0159_full.jpg",
		    "QUALIFICATION_0160_FULL": "/images/qualification/full/qualification_0160_full.jpg",
		    "QUALIFICATION_0161_FULL": "/images/qualification/full/qualification_0161_full.jpg",
		    "QUALIFICATION_0162_FULL": "/images/qualification/full/qualification_0162_full.jpg",
		    "QUALIFICATION_0163_FULL": "/images/qualification/full/qualification_0163_full.jpg",
		    "QUALIFICATION_0164_FULL": "/images/qualification/full/qualification_0164_full.jpg",
		    "QUALIFICATION_0159": "/images/qualification/qualification_0159.jpg",
		    "QUALIFICATION_0160": "/images/qualification/qualification_0160.jpg",
		    "QUALIFICATION_0161": "/images/qualification/qualification_0161.jpg",
		    "QUALIFICATION_0162": "/images/qualification/qualification_0162.jpg",
		    "QUALIFICATION_0163": "/images/qualification/qualification_0163.jpg",
		    "QUALIFICATION_0164": "/images/qualification/qualification_0164.jpg",
		    "BLOG_SCREENSHOT": "/images/screenshots/blog-screenshot.png",
		    "INDEX_SCREENSHOT": "/images/screenshots/index-screenshot.png",
		    "PROFILE_SCREENSHOT": "/images/screenshots/profile-screenshot.png",
		    "WORK_SCREENSHOT": "/images/screenshots/work-screenshot.png",
		    "WORKS_CHESS_THUMBNAIL": "/images/works/works-chess-thumbnail.png",
		    "WORKS_CSS_GALLERY_THUMBNAIL": "/images/works/works-css-gallery-thumbnail.png",
		    "WORKS_DOC_GALLERY_THUMBNAIL": "/images/works/works-doc-gallery-thumbnail.png",
		    "WORKS_FILEDROP_THUMBNAIL": "/images/works/works-filedrop-thumbnail.png",
		    "WORKS_KUROKAWA_THUMBNAIL": "/images/works/works-kurokawa-thumbnail.png",
		    "WORKS_MOCK_MONKEY_THUMBNAIL": "/images/works/works-mock-monkey-thumbnail.png",
		    "WORKS_OKUNISHITAKA_THUMBNAIL": "/images/works/works-okunishitaka-thumbnail.png",
		    "WORKS_OTHERO_THUMBNAIL": "/images/works/works-othero-thumbnail.png",
		    "WORKS_PLANING_PORKER_THUMBNAIL": "/images/works/works-planing-porker-thumbnail.png",
		    "WORKS_SELLIT_THUMBNAIL": "/images/works/works-sellit-thumbnail.png",
		    "WORKS_SHOT_THUMBNAIL": "/images/works/works-shot-thumbnail.png",
		    "WORKS_TYPE_THUMBNAIL": "/images/works/works-type-thumbnail.png"
		});

})(angular);


/**
 * Constant for jsonUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('jsonUrlConstant', {
		    "PROFILE": "/json/profile.json",
		    "WORKS": "/json/works.json"
		});

})(angular);


/**
 * Constant for linkUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('linkUrlConstant', {
		    "ABOUT_MARK_DOWN": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
		    "TIS_HOMEPAGE": "http://www.tis.co.jp/",
		    "REAL_GLOBE_HOMEPAGE": "http://realglobe.jp/",
		    "IPA_HOMEPAGE": "http://www.ipa.go.jp/",
		    "MY_GITHUB": "https://github.com/okunishinishi",
		    "GITHUB_FAVICON": "https://assets-cdn.github.com/favicon.ico",
		    "OKUNISHITAKA_DOT_COM": "http://okunishitaka.com",
		    "WORKS_CHESS": "http://okunishinishi.github.io/ChessTek/",
		    "WORKS_CHESS_REPO": "https://github.com/okunishinishi/ChessTek",
		    "WORKS_CHESS_FAVICON": "http://okunishinishi.github.io/ChessTek/fav.ico",
		    "WORKS_SHOT": "http://okunishinishi.github.io/SHOTek/",
		    "WORKS_SHOT_REPO": "https://github.com/okunishinishi/SHOTek",
		    "WORKS_SHOT_FAVICON": "http://okunishinishi.github.io/SHOTek/fav.ico",
		    "WORKS_CSS_GALLERY": "http://okunishinishi.github.io/css-art-gallery/",
		    "WORKS_CSS_GALLERY_REPO": "https://github.com/okunishinishi/css-art-gallery",
		    "WORKS_CSS_GALLERY_FAVICON": "http://okunishinishi.github.io/css-art-gallery/fav.ico",
		    "WORKS_OTHERO": "http://okunishinishi.github.io/OthelloTek/",
		    "WORKS_OTHERO_REPO": "https://github.com/okunishinishi/OthelloTek",
		    "WORKS_OTHERO_FAVICON": "http://okunishinishi.github.io/OthelloTek/fav.ico",
		    "WORKS_TYPE": "http://okunishinishi.github.io/TouchTypeTraining/",
		    "WORKS_TYPE_REPO": "https://github.com/okunishinishi/TouchTypeTraining",
		    "WORKS_TYPE_FAVICON": "http://okunishinishi.github.io/TouchTypeTraining/fav.ico",
		    "WORKS_MOCK_MONKEY": "http://mockmonkey.demo.okunishitaka.com/",
		    "WORKS_MOCK_MONKEY_REPO": "https://github.com/okunishinishi/mock-monkey",
		    "WORKS_MOCK_MONKEY_FAVICON": "http://mockmonkey.demo.okunishitaka.com/fav.ico",
		    "WORKS_FILEDROP": "http://filedrop.demo.okunishitaka.com/",
		    "WORKS_FILEDROP_REPO": "https://github.com/okunishinishi/filedrop",
		    "WORKS_FILEDROP_FAVICON": "http://filedrop.demo.okunishitaka.com/fav.ico",
		    "WORKS_KUROKAWA": "http://kurokawa.demo.okunishitaka.com/",
		    "WORKS_KUROKAWA_REPO": "https://github.com/okunishinishi/kurokawa",
		    "WORKS_KUROKAWA_FAVICON": "http://kurokawa.demo.okunishitaka.com/fav.ico",
		    "WORKS_SELLIT": "http://sellit.demo.okunishitaka.com/",
		    "WORKS_SELLIT_REPO": "https://github.com/okunishinishi/sellit",
		    "WORKS_SELLIT_FAVICON": "http://sellit.demo.okunishitaka.com/fav.ico",
		    "WORKS_OKUNISHITAKA": "http://okunishitaka.com/",
		    "WORKS_OKUNISHITAKA_REPO": "https://github.com/okunishinishi/okunishitaka.com",
		    "WORKS_OKUNISHITAKA_FAVICON": "http://okunishitaka.com/favicon.png"
		});

})(angular);


/**
 * Constant for pageUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('pageUrlConstant', {
		    "ADMIN": "/admin.html",
		    "BLOG": "/blog.html",
		    "INDEX": "/index.html",
		    "PROFILE": "/profile.html",
		    "WORK": "/work.html"
		});

})(angular);


/**
 * Constant for partialUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialUrlConstant', {
		    "ADMIN_BLOG_EDITOR_SECTION": "/html/partials/admin/admin-blog-editor-section.html",
		    "ADMIN_BLOG_LIST_SECTION": "/html/partials/admin/admin-blog-list-section.html",
		    "ADMIN_HEADER": "/html/partials/admin/admin-header.html",
		    "BLOG_ASIDE_CONTENT": "/html/partials/blog/blog-aside-content.html",
		    "BLOG_LIST_SECTION": "/html/partials/blog/blog-list-section.html",
		    "FAVICON": "/html/partials/favicon.html",
		    "FOOTER": "/html/partials/footer.html",
		    "HEADER": "/html/partials/header.html",
		    "INDEX_CONTENT_TITLE": "/html/partials/index/index-content-title.html",
		    "INDEX_SEE_MORE_BUTTON": "/html/partials/index/index-see-more-button.html",
		    "META": "/html/partials/meta.html",
		    "PROFILE_LIST": "/html/partials/profile/profile-list.html",
		    "PROFILE_TABLE": "/html/partials/profile/profile-table.html",
		    "SOCIAL": "/html/partials/social.html",
		    "TITLE": "/html/partials/title.html",
		    "TOAST": "/html/partials/toast.html",
		    "TRACK": "/html/partials/track.html",
		    "WORK_LINK": "/html/partials/work/work-link.html",
		    "WORK_LIST": "/html/partials/work/work-list.html"
		});

})(angular);



/**
 * ok datasources module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.datasources', [
            'ok.constants',
            'ok.entities',
            'ok.services',
            'ok.utils'
        ]);
})(angular);

/**
 * Abstract data source.
 * @requires angular
 * @retuires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('Datasource', function () {
            /**
             * @abstract
             * @constructor Datasource
             */
            function Datasource() {
                var s = this;
                s.init.apply(s, arguments);
            }

            Datasource.prototype = {
                /**
                 * Inialize a data source.
                 */
                init: function (properties) {
                    var s = this;
                    ap.copy(properties || {}, s);
                    return s;
                }
            };


            /**
             * Define a data source constructor.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            Datasource.define = function (properties, Prototype) {
                if (!Prototype) {
                    Prototype = Datasource;
                }
                function Defined() {
                    var s = this;
                    s.init.apply(s, arguments);
                }

                Defined.prototype = new Prototype(properties);

                return Defined;
            };

            return Datasource;
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name BlogDestroyingDatasource
 * @description Destoying data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogDestroyingDatasource', function (DestroyingDatasource, BlogEntity, blogApiService) {
            return DestroyingDatasource.define(
                /** @lends BlogDestroyingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _destroyRequest: function (id, callback) {
                        blogApiService.destroy(id, callback);
                    },
                }
            );
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name DestroyingDatasource
 * @description Data source for editing.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('DestroyingDatasource', function (Datasource, ViewingDatasource) {

            /**
             * @agutments Datasource
             * @constructor DestroyingDatasource
             */
            function DestroyingDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
            }


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            DestroyingDatasource.define = function (properties) {
                return Datasource.define(properties, DestroyingDatasource);
            };

            DestroyingDatasource.prototype = ap.copy(
                /** @lends DestroyingDatasource.prototype */
                {
                    /**
                     * Send a request to destroy a resource.
                     * @param {string} id - Resource id to destroy.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _destroyRequest: function (id, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Destroy data.
                     * @param {function} callback
                     */
                    destroy: function (callback) {
                        var s = this,
                            id = s.id;
                        callback = callback || ap.doNothing;
                        s._destroyRequest(id, callback);
                        return s;
                    },
                    clear: function () {
                        var s = this;
                        s._discard()
                        return s;
                    }
                },
                new ViewingDatasource({})
            );

            return DestroyingDatasource;
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name BlogEditingDatasource
 * @description Editing data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogEditingDatasource', function (EditingDatasource, BlogEntity, blogApiService) {
            return EditingDatasource.define(
                /** @lends BlogEditingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _createRequest: function (data, callback) {
                        blogApiService.create(data, callback);
                    },
                    _updateRequest: function (id, data, callback) {
                        blogApiService.update(id, data, callback);
                    },
                    _parseData: function (data) {
                        return BlogEntity.new(data);
                    }
                }
            );
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name EditingDatasource
 * @description Data source for editing.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('EditingDatasource', function (Datasource, ViewingDatasource) {

            /**
             * @agutments Datasource
             * @constructor EditingDatasource
             */
            function EditingDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
            }


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            EditingDatasource.define = function (properties) {
                return Datasource.define(properties, EditingDatasource);
            };

            EditingDatasource.prototype = ap.copy(
                /** @lends EditingDatasource.prototype */
                {
                    /**
                     * Send a request to create a new resource.
                     * @param {object} data - Resource data to create.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _createRequest: function (data, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a request to update a exiting resource.
                     * @param {string} id - Data identifier.
                     * @param {object} data - Data to create.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _updateRequest: function (id, data, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Save data.
                     * @param {function} callback
                     */
                    save: function (callback) {
                        var s = this,
                            id = s.id,
                            data = s.data || {};
                        callback = callback || ap.doNothing;
                        if (id) {
                            s._updateRequest(id, data, callback);
                        } else {
                            s._createRequest(data, callback);
                        }
                        return s;
                    },
                    clear: function () {
                        var s = this;
                        s._discard()
                        return s;
                    }
                },
                new ViewingDatasource({})
            );

            return EditingDatasource;
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name ProfileEditingDatasource
 * @description Editing data source for profile.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileEditingDatasource', function (EditingDatasource, ProfileEntity, profileApiService) {
            return EditingDatasource.define(
                /** @lends ProfileEditingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        profileApiService.singleton(callback);
                    },
                    _updateRequest: function (data, callback) {
                        profileApiService.save(data, callback);
                    },
                }
            );
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @description List data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogListingDatasource', function (ListingDatasource, BlogEntity, blogApiService) {
            return ListingDatasource.define(
                /** @lends BlogListingDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        blogApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(BlogEntity.new);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * @ngdoc object
 * @name ListingDatasource
 * @description Data source to list resouces.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ListingDatasource', function (Datasource) {

            /**
             * @augments Datasource
             * @constructor ListDatasource
             */
            function ListDatasource() {
                var s = this;
                s.init.apply(s, arguments);
            }

            /**
             * Define a list data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            ListDatasource.define = function (properties) {
                return Datasource.define(properties, ListDatasource);
            };

            ListDatasource.prototype = ap.copy(
                /** @lends ListDatasource.prototype */
                {
                    /** Limit count for fetching. */
                    limit: 20,
                    /** Skip count for fething. */
                    skip: 0,
                    /** Feched data. */
                    data: null,
                    /** Has more data to fetch or not. */
                    hasMore: true,
                    /** Search condition. */
                    condition: {},
                    /** Is loading or not. */
                    loading: false,
                    /**
                     * Get query.
                     * @returns {object}
                     * @private
                     */
                    _queryData: function () {
                        var s = this,
                            query = {};
                        ap.copy({
                            _limit: s.limit,
                            _skip: s.skip
                        }, query);
                        ap.copy(s.condition, query);
                        return query;
                    },
                    /**
                     * Send a request to get list.
                     * @param {object} query - Query data.
                     * @param {function} callback - Callback when done.
                     */
                    _listRequest: function (query, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Parse data.
                     * @param {object} data - Data to parsed.
                     * @returns {object} - Parsed data.
                     */
                    _parseData: function (data) {
                        return data;
                    },
                    _addFetchedData: function (data) {
                        var s = this;
                        s.hasMore = s.limit <= data.length;
                        s.data = s.data.concat(s._parseData(data));
                        s.skip = s.data.length;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    _fetch: function (callback) {
                        var s = this,
                            query = s._queryData();
                        s.loading = true;
                        callback = callback || ap.doNothing;
                        s._listRequest(query, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s._addFetchedData(data);
                            }
                            callback(err);
                        });
                    },
                    /**
                     * Discard fethced data.
                     * @private
                     */
                    _discard: function () {
                        var s = this;
                        s.init({});
                    },
                    init: function () {
                        var s = this;
                        Datasource.prototype.init.apply(s, arguments);
                        s.hasMore = true;
                        s.data = [];
                        s.skip = 0;
                        return s;
                    },
                    /**
                     * Clear and fetch data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this;
                        s._discard();
                        s._fetch(callback);
                        return s;
                    },
                    /**
                     * Load next resources.
                     * @param {function} callback - Callback when done.
                     */
                    loadMore: function (callback) {
                        var s = this;
                        s._fetch(callback);
                        return s;
                    }
                },
                new Datasource({})
            );

            return ListDatasource;
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @description List data source for work.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkListingDatasource', function (ListingDatasource, WorkEntity, workApiService) {
            return ListingDatasource.define(
                /** @lends WorkListingDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        workApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(WorkEntity.new);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * @ngdoc object
 * @name BlogViewingDatasource
 * @description View data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogViewingDatasource', function (ViewingDatasource, BlogEntity, blogApiService) {
            return ViewingDatasource.define(
                /** @lends BlogViewingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _parseData: function (data) {
                        return BlogEntity.new(data);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * @ngdoc object
 * @name ProfileViewingDatasource
 * @description View data source for profile.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileViewingDatasource', function (ViewingDatasource, ProfileEntity, profileApiService) {
            return ViewingDatasource.define(
                /** @lends ProfileViewingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        profileApiService.singleton(callback);
                    },
                    _parseData: function (data) {
                        return ProfileEntity.new(data);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * @ngdoc object
 * @name ViewingDatasource
 * @description Data source for viewing.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ViewingDatasource', function (Datasource) {

            /**
             * @agutments Datasource
             * @constructor ViewingDatasource
             */
            function ViewingDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
            }


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            ViewingDatasource.define = function (properties) {
                return Datasource.define(properties, ViewingDatasource);
            };

            ViewingDatasource.prototype = ap.copy(
                /** @lends ViewingDatasource.prototype */
                {
                    /**
                     * Data identifier
                     */
                    id: null,
                    data: null,
                    loading: false,
                    /**
                     * Send a request to get one.
                     * @param {string} id - Data identifier.
                     * @param {function} callback - Callback when done.
                     */
                    _oneRequest: function (id, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Parse data.
                     * @param {object} data - Fethed data.
                     * @returns {*} - Parsed data.
                     */
                    _parseData: function (data) {
                        return data;
                    },
                    _setFetchedData: function (data) {
                        var s = this;
                        s.data = s._parseData(data);
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    _fetch: function (callback) {
                        var s = this,
                            id = s.id;
                        s.loading = true;
                        callback = callback || ap.doNothing;
                        s._oneRequest(id, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s._setFetchedData(data);
                            }
                            callback(err);
                        });
                    },
                    /**
                     * Discard fethced data.
                     * @private
                     */
                    _discard: function () {
                        var s = this;
                        s.init({});
                    },
                    init: function () {
                        var s = this;
                        s.data = null;
                        Datasource.prototype.init.apply(s, arguments);
                        return s;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this;
                        s._discard();
                        s._fetch(callback);
                        return s;
                    }
                },
                new Datasource({})
            );

            return ViewingDatasource;
        });
})(angular, apeman);

/**
 * ok directives module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.filters',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc directive
 * @name okAlias
 * @description Ok alias.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okAlias', function defineOkAlias($parse) {
            return {
                link: function (scope, elm, attr) {
                    var alias = $parse(attr.okAlias)(scope);
                    if (!alias) {
                        return;
                    }
                    var values = {};
                    Object.keys(alias).forEach(function (key) {
                        var expression = alias[key];
                        scope.$watch(expression, function (value) {
                            values[key] = value;
                        }, true);
                        Object.defineProperty(scope, key, {
                            get: function () {
                                return values[key];
                            },
                            set: function (value) {
                                var msg = [
                                    'You can not set value with key "' + key + '"',
                                    'because it is defined as alias key by okAlias directive.'
                                ].join(',');
                                throw new Error(msg);
                            }
                        });
                    });
                }
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okButton
 * @description Ok button.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okButton', function defineOkButton() {
            return {
                scope: {
                    type: '=okButtonType'
                },
                link: function (scope, elm, attr) {
                    var $elm = $(elm);
                    $elm.addClass('button')
                        .attr({
                            href: $elm.attr('href') || 'javascript:void(0)'
                        }
                    );
                    switch (scope.type) {
                        case 'button-primary':
                        case 'primary':
                            $elm.addClass('button-primary');
                            break;
                        case 'link':
                            $elm.addClass('link-button');
                            break;
                    }
                }
            }
        })
    ;

})
(angular, apeman, jQuery);
/**
 * @ngdoc directive
 * @name okFacebookButton
 * @description Ok facebook button.
 */
(function (ng, ap, $, document) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okFacebookButton', function defineOkFacebookButton() {
            function loadSDK(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=520712554606371&version=v2.0";
                fjs.parentNode.insertBefore(js, fjs);
            }

            return {
                scope: {
                    href: '=okHref'
                },
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            var root = $('#fb-root');
                            if (!root.length) {
                                $('<div />').attr('id', 'fb-root').insertAfter($(elm));
                            }
                            loadSDK(document, 'script', 'facebook-jssdk');
                        }
                    }
                },
                template: '<div class="fb-like" data-href="{{href}}" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>'
            }
        });

})(angular, apeman, jQuery, document);
/**
 * @ngdoc directive
 * @name okFadein
 * @description Ok fadein.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okFadeIn', function defineOkFadein() {
            return {
                scope: {
                    duration: '=okDuration',
                    delay: '=okDelay'
                },
                compile: function () {
                    return {
                        pre: function (scope, elm) {
                            $(elm).hide();
                        },
                        post: function (scope, elm) {
                            var delay = Number(scope.delay || 0),
                                duration = Number(scope.duration || 0);
                            setTimeout(function () {
                                $(elm).fadeIn(duration);
                            }, delay);
                        }
                    }
                }
            }
        });

})(angular, apeman, jQuery);
/**
 * @ngdoc directive
 * @name okGoogleAnalytics
 * @description Ok google analytics.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okGoogleAnalytics', function defineOkGoogleAnalytics() {
            function loadSDK(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            };

            return {
                scope: {
                    trakingId: '=okTrackingId'
                },
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            loadSDK(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                            ga('create', scope.trakingId, 'auto');
                            ga('send', 'pageview');
                        }
                    }
                }
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okReplace
 * @param {string} ngReplace - angular expression evaluating to external HTML URL.
 * @description Replace tag with an external HTML fragment.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okReplace', function defineOkReplace($http, $templateCache, $compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    var templateUrlExpression = attr.okReplace,
                        templateUrl = scope.$eval(templateUrlExpression);
                    $http.get(templateUrl, {
                        cache: $templateCache
                    })
                        .success(function (content) {
                            element.replaceWith($compile(content)(scope));
                        })
                        .error(function () {
                            console.error('[okReplace] Failed to load template:', templateUrlExpression);
                        })
                    ;
                }
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okScrollToFixed
 * @description Ok scroll to fixed.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okScrollToFixed', function defineOkScrollToFixed($window, positionUtil) {
            return {
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);

                            var top, fixed = false, ready = false;
                            var window = $($window);
                            var content = $(attr.okScrollToFixed);

                            function clear() {
                                ready = false;
                                fixed = false;
                                content.removeClass('ok-fixed');
                                elm.removeAttr('style');
                            }

                            function update() {
                                if (!ready) {
                                    top = positionUtil.offsetSum(elm).top;
                                    elm.height(elm.height());
                                    ready = true;
                                }
                                var winTop = window.scrollTop();
                                var needsFix = top < winTop;
                                if (fixed != needsFix) {
                                    fixed = needsFix;
                                    content.toggleClass('ok-fixed', fixed);
                                }
                            }

                            window.resize(function () {
                                clear();
                                update();
                            });
                            window.scroll(function () {
                                update();
                            });

                        }
                    }
                }
            }
        });

})(angular, apeman, jQuery);
/**
 * @ngdoc directive
 * @name okScrollToStay
 * @description Ok scroll to stay.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okScrollToStay', function defineOkScrollToStay($window, $document, positionUtil) {
            return {
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);
                            var window = $($window)

                            var content = $(attr.okScrollToStay);

                            var ready = false,
                                winHeight,
                                contentHeight,
                                scrollHeight,
                                _contentTop;

                            function clear() {
                                ready = false;
                                content.removeClass('ok-fixed');
                                elm.removeAttr('style');
                            };
                            function update() {
                                if (!ready) {
                                    elm.height(elm.height());
                                    elm.width(elm.width());
                                    content.addClass('ok-fixed');
                                    winHeight = window.height();
                                    contentHeight = content.outerHeight(true);
                                    scrollHeight = $('body,html').prop('scrollHeight');
                                    _contentTop = null;

                                    ready = true;
                                }
                                var scrollRate = window.scrollTop() / (scrollHeight - winHeight);
                                var contentTop = Math.round((contentHeight - winHeight) * scrollRate);
                                if (contentTop < 0) contentTop = 0;

                                if (_contentTop != contentTop) {
                                    content.css({
                                        top: -contentTop
                                    });
                                    _contentTop = contentTop;
                                }
                            }

                            window.scroll(function () {
                                update();
                            });
                            window.resize(function () {
                                clear();
                                update();
                            });
                            clear();
                        }
                    }
                }
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okTag
 * @description Ok tag.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTag', function defineOkTag() {
            return {
                scope: {
                    title: '=okTitle'
                },
                link: function (scope, elm) {
                },
                template: [
                    '<span class="ok-tag" style="border-color: {{title | tagColorFilter}};color:{{title | tagColorFilter}};">',
                    '<span class="ok-tag-icon" style="background-color: {{title | tagColorFilter}};"></span>',
                    '{{title}}',
                    '</span>'
                ].join('')
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okToast
 * @description Ok toast.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okToast', function defineOkToast() {
            return {
                scope: {
                    'messages': '=okToastMessages'
                },
                link: function (scope, elm) {
                    var $elm = $(elm).addClass('ok-toast');
                    scope.$watch('messages', function (messages) {
                        var hasMessage = !!messages && (messages.length > 0);
                        $elm.toggleClass('ok-toast-visible', hasMessage);
                    }, true);
                },
                template: [
                    '<div ng-repeat="m in [].concat(messages)">{{m}}</div>',
                ].join('')
            }
        });

})(angular, apeman, jQuery);
/**
 * @ngdoc directive
 * @name okTwitterButton
 * @description Ok twitter button.
 */
(function (ng, ap, $, document) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTwitterButton', function defineOkTwitterButton() {
            function loadSDK(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }

            return {
                scope: {
                    href: '=okHref',
                    via: '=okVia'
                },
                compile: function () {
                    return {
                        post: function (scope, elm) {
                            loadSDK(document, 'script', 'twitter-wjs');
                        }
                    }
                },
                template: '<a href="https://twitter.com/share" class="twitter-share-button" data-url="{{href}}" data-via="{{via}}">Tweet</a>'
            }
        });

})(angular, apeman, jQuery, document);

/**
 * ok entities module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.entities', [
            
        ]);
})(angular);

/**
 * Blog entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('BlogEntity', function defineBlogEntity(Entity) {

            /**
             * @augments Entity
             * @constructor BlogEntity
             * @param {object} data - Entity data.
             */
            var BlogEntity = Entity.define(
                /** @lends BlogEntity.prototype */
                {

                }
            );

            return BlogEntity;

        });

})(angular, apeman);
/**
 * Abstract Entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('Entity', function () {
            function Entity() {
                var s = this;
                s.init.apply(s, arguments);
            }

            /**
             * Initialize an entity.
             * @param {object} data - Entity data.
             */
            Entity.prototype.init = function (data) {
                var s = this;
                ap.copy(data || {}, s);
            };

            Entity.define = function (properties) {

                var Defined = function () {
                    var s = this;
                    s.init.apply(s, arguments);
                }

                Defined.prototype = new Entity();

                /**
                 * Create a new entity instance.
                 * @param {object} data - Entity data.
                 * @returns {Defined}
                 */
                Defined.new = function (data) {
                    return new Defined(data);
                }

                return Defined;
            };

            return Entity;
        });
})(angular, apeman);
/**
 * Profile entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('ProfileEntity', function defineProfileEntity(Entity) {

            /**
             * @augments Entity
             * @constructor ProfileEntity
             * @param {object} data - Entity data.
             */
            var ProfileEntity = Entity.define(
                /** @lends ProfileEntity.prototype */
                {

                }
            );

            return ProfileEntity;

        });

})(angular, apeman);
/**
 * Setting entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('SettingEntity', function defineSettingEntity(Entity) {

            /**
             * @augments Entity
             * @constructor SettingEntity
             * @param {object} data - Entity data.
             */
            var SettingEntity = Entity.define(
                /** @lends SettingEntity.prototype */
                {

                }
            );

            return SettingEntity;

        });

})(angular, apeman);
/**
 * Work entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('WorkEntity', function defineWorkEntity(Entity) {

            /**
             * @augments Entity
             * @constructor WorkEntity
             * @param {object} data - Entity data.
             */
            var WorkEntity = Entity.define(
                /** @lends WorkEntity.prototype */
                {

                }
            );

            return WorkEntity;

        });

})(angular, apeman);

/**
 * ok errors module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.errors', [
            'ok.constants'
        ]);
})(angular);

/**
 * App api error.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppApiError', function defineAppApiError (AppError) {

            /**
             * @augments Error
             * @constructor AppApiError
             * @param {number} code - App error code.
             * @param {object} message - Error message.
             */
            var AppApiError = AppError.define(
                /** @lends AppApiError.prototype */
                {
                    name: 'AppApiError'
                }
            );

            return AppApiError;

        });

})(angular, apeman);
/**
 * AppError error.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppError', function defineAppError() {

            /**
             * @augments Error
             * @constructor AppError
             * @param {number} code - App error code.
             * @param {object} message - Error message.
             */
            function AppError(code, message) {
                var s = this;
                s.init.apply(s, arguments);
            };

            AppError.prototype = ap.copy(
                /** @lends AppError.prototype */
                {
                    name: 'AppError',
                    /**
                     * Initialize an error.
                     * @param {number} code - Error code.
                     * @param {string} message - Error message.
                     */
                    init: function (code, message) {
                        var s = this;
                        s.code = code;
                        s.message = message;
                    }
                },
                new Error()
            );

            ap.copy(
                {
                    /**
                     * Define an app error.
                     * @param {object} properties - Error properties.
                     */
                    define: function (properties) {
                        var Defined = function () {
                            var s = this;
                            s.init.apply(s, arguments);
                        };
                        Defined.prototype = ap.copy(
                            properties, new AppError()
                        );
                        ap.copy(AppError, Defined);
                        return Defined;
                    }
                },
                AppError
            )

            return AppError;

        });

})(angular, apeman);

/**
 * ok filters module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.filters', [
            'ok.constants',
            'ok.entities',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc filter
 * @filter dateFormatFilter
 * @description Date format filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('dateFormatFilter', function defineDateFormatFilter() {
            return function dateFormatFilter(date) {
                date = new Date(date);
                var yyyyMMdd = [
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                ].join('/');
                return yyyyMMdd;
            };
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter pageTitleFilter
 * @description Page title filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('pageTitleFilter', function definePageTitleFilter() {
            return function pageTitleFilter(pageName, l) {
                var appName = l.meta.NAME;
                if (!pageName) {
                    return appName;
                }
                pageName = l.pageNames[pageName.toUpperCase()] || pageName;
                return [pageName, appName].join(' - ');
            };
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter tagColorFilter
 * @description Tag color filter
 */

(function (ng, ap) {
    "use strict";
    ng
        .module('ok.filters')
        .filter('tagColorFilter', function defineTagColorFilter(hashUtil) {
            var _cache = {};
            return function tagColorFilter(title, namespace) {
                var seed = [title, namespace || ''].join('-');
                var cahched = _cache[seed];
                if (cahched) {
                    return cahched;
                }
                var hashCode = hashUtil.toHashCode(seed);
                var hue = parseInt(hashCode % 50 + 100) / 100.0,
                    color = one.color('#a9d91d').hue(hue, true).hex();
                if (!color.match(/^#/)) {
                    color = '#' + color;
                }
                _cache[seed] = color;
                return color;
            }
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter textEllipsisFilter
 * @description Text ellipsis filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textEllipsisFilter', function defineTextEllipsisFilter() {
            return function textEllipsisFilter(text, maxLength) {
                if (!text) {
                    return '';
                }
                var suffix = '...';
                return text.substr(0, maxLength - suffix.length) + suffix;
            };
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter textLinkFilter
 * @description Filter to convert links.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textLinkFilter', function defineTextLinkFilter(linkUrlConstant, imageUrlConstant) {
            return function textLinkFilter(text, links) {
                var html = String(text);
                Object.keys(links || {}).forEach(function (key) {
                    html = html.replace(new RegExp(key, 'g'), function (text) {
                        var name = links[key],
                            href = linkUrlConstant[name] || imageUrlConstant[name];
                        if (href) {
                            return '<a href="' + href + '">' + text + '</a>';
                        } else {
                            return text;
                        }
                    });
                });
                return html;
            };
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter textSplitFilter
 * @description Text split filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textSplitFilter', function defineTextSplitFilter() {
            return function textSplitFilter(text, seperator) {
                if (!text) {
                    return [];
                }
                return String(text).split(seperator || ',');
            };
        });
})(angular, apeman);

/**
 * ok indices module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.indices', [
            'ok.constants',
            'ok.datasources',
            'ok.entities',
            'ok.errors',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ]);
})(angular);

/**
 * Constants index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('constantsIndex', function defineConstantsIndex($injector) {
            return {
                get appConstant() { return $injector.get('appConstant'); },
                get codeConstant() { return $injector.get('codeConstant'); },
                get localeConstant() { return $injector.get('localeConstant'); },
                get apiUrlConstant() { return $injector.get('apiUrlConstant'); },
                get imageUrlConstant() { return $injector.get('imageUrlConstant'); },
                get jsonUrlConstant() { return $injector.get('jsonUrlConstant'); },
                get linkUrlConstant() { return $injector.get('linkUrlConstant'); },
                get pageUrlConstant() { return $injector.get('pageUrlConstant'); },
                get partialUrlConstant() { return $injector.get('partialUrlConstant'); }
            };
        });
})(angular);
/**
 * Datasources index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('datasourcesIndex', function defineDatasourcesIndex($injector) {
            return {
                get Datasource() { return $injector.get('Datasource'); },
                get BlogDestroyingDatasource() { return $injector.get('BlogDestroyingDatasource'); },
                get DestroyingDatasource() { return $injector.get('DestroyingDatasource'); },
                get BlogEditingDatasource() { return $injector.get('BlogEditingDatasource'); },
                get EditingDatasource() { return $injector.get('EditingDatasource'); },
                get ProfileEditingDatasource() { return $injector.get('ProfileEditingDatasource'); },
                get BlogListingDatasource() { return $injector.get('BlogListingDatasource'); },
                get ListingDatasource() { return $injector.get('ListingDatasource'); },
                get WorkListingDatasource() { return $injector.get('WorkListingDatasource'); },
                get BlogViewingDatasource() { return $injector.get('BlogViewingDatasource'); },
                get ProfileViewingDatasource() { return $injector.get('ProfileViewingDatasource'); },
                get ViewingDatasource() { return $injector.get('ViewingDatasource'); }
            };
        });
})(angular);
/**
 * Entities index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('entitiesIndex', function defineEntitiesIndex($injector) {
            return {
                get BlogEntity() { return $injector.get('BlogEntity'); },
                get Entity() { return $injector.get('Entity'); },
                get ProfileEntity() { return $injector.get('ProfileEntity'); },
                get SettingEntity() { return $injector.get('SettingEntity'); },
                get WorkEntity() { return $injector.get('WorkEntity'); }
            };
        });
})(angular);
/**
 * Errors index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('errorsIndex', function defineErrorsIndex($injector) {
            return {
                get AppApiError() { return $injector.get('AppApiError'); },
                get AppError() { return $injector.get('AppError'); }
            };
        });
})(angular);
/**
 * Services index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('servicesIndex', function defineServicesIndex($injector) {
            return {
                get apiService() { return $injector.get('apiService'); },
                get blogApiService() { return $injector.get('blogApiService'); },
                get profileApiService() { return $injector.get('profileApiService'); },
                get settingApiService() { return $injector.get('settingApiService'); },
                get workApiService() { return $injector.get('workApiService'); },
                get blogRenderService() { return $injector.get('blogRenderService'); },
                get browserDetectService() { return $injector.get('browserDetectService'); },
                get codeConvertService() { return $injector.get('codeConvertService'); },
                get confirmMessageService() { return $injector.get('confirmMessageService'); },
                get langDetectService() { return $injector.get('langDetectService'); },
                get localeLoadService() { return $injector.get('localeLoadService'); },
                get locationChangeService() { return $injector.get('locationChangeService'); },
                get locationResolveService() { return $injector.get('locationResolveService'); },
                get markdownRenderService() { return $injector.get('markdownRenderService'); },
                get templateCacheService() { return $injector.get('templateCacheService'); },
                get toastMessageService() { return $injector.get('toastMessageService'); },
                get urlFormatService() { return $injector.get('urlFormatService'); }
            };
        });
})(angular);
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
                get adminAdminHeaderHtmlTemplate() { return $injector.get('adminAdminHeaderHtmlTemplate'); },
                get blogBlogAsideContentHtmlTemplate() { return $injector.get('blogBlogAsideContentHtmlTemplate'); },
                get blogBlogEditEditorSectionHtmlTemplate() { return $injector.get('blogBlogEditEditorSectionHtmlTemplate'); },
                get blogBlogEditListSectionHtmlTemplate() { return $injector.get('blogBlogEditListSectionHtmlTemplate'); },
                get blogBlogEditSectionContentHtmlTemplate() { return $injector.get('blogBlogEditSectionContentHtmlTemplate'); },
                get blogBlogEditSectionHtmlTemplate() { return $injector.get('blogBlogEditSectionHtmlTemplate'); },
                get blogBlogListSectionContentHtmlTemplate() { return $injector.get('blogBlogListSectionContentHtmlTemplate'); },
                get blogBlogListSectionHtmlTemplate() { return $injector.get('blogBlogListSectionHtmlTemplate'); },
                get faviconHtmlTemplate() { return $injector.get('faviconHtmlTemplate'); },
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
                get titleHtmlTemplate() { return $injector.get('titleHtmlTemplate'); },
                get toastHtmlTemplate() { return $injector.get('toastHtmlTemplate'); },
                get trackHtmlTemplate() { return $injector.get('trackHtmlTemplate'); },
                get workWorkLinkHtmlTemplate() { return $injector.get('workWorkLinkHtmlTemplate'); },
                get workWorkListHtmlTemplate() { return $injector.get('workWorkListHtmlTemplate'); }
            };
        });
})(angular);
/**
 * Utils index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('utilsIndex', function defineUtilsIndex($injector) {
            return {
                get canvasUtil() { return $injector.get('canvasUtil'); },
                get hashUtil() { return $injector.get('hashUtil'); },
                get mathUtil() { return $injector.get('mathUtil'); },
                get objectUtil() { return $injector.get('objectUtil'); },
                get positionUtil() { return $injector.get('positionUtil'); },
                get urlUtil() { return $injector.get('urlUtil'); }
            };
        });
})(angular);


/**
 * ok pages module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.pages', [
            'ok.page'
        ]);
})(angular);

/**
 * @ngdoc module
 * @module ok.adminBlogPage
 * @description Page script for admin.
 */

(function (ng, ap, async) {
    "use strict";

    ng
        .module('ok.adminBlogPage', [
            'ok.adminPage',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {

        })
        .factory('datasources', function (BlogEditingDatasource,
                                          BlogListingDatasource,
                                          BlogDestroyingDatasource) {
            return {
                editing: new BlogEditingDatasource({}),
                listing: new BlogListingDatasource({
                    condition: {
                        _sort: '_at',
                        _reverse: true
                    }
                }),
                destroying: new BlogDestroyingDatasource({})
            }
        })
        .factory('messenger', function (global,
                                        toastMessageService,
                                        confirmMessageService) {
            var l = global.locale,
                showInfoMessage = toastMessageService.showInfoMessage.bind(toastMessageService);
            return {
                askSure: function () {
                    return confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                },
                blogDestroyDone: function (callback) {
                    showInfoMessage(l.pages.admin.DESTROY_BLOG_DONE);
                    (callback || ap.doNothing)(null);
                },
                blogSaveDone: function (callback) {
                    showInfoMessage(l.pages.admin.SAVE_BLOG_DONE);
                    (callback || ap.doNothing)(null);
                }
            }
        })
        .controller('AdminBlogCtrl', function ($scope, datasources) {
            var editing = datasources.editing;
            ap.copy({
                add: function () {
                    editing.init({
                        data: {}
                    });
                }
            }, $scope);
        })
        .controller('AdminBlogEditCtrl', function ($scope,
                                                   datasources,
                                                   messenger,
                                                   blogRenderService) {
            var editing = datasources.editing,
                listing = datasources.listing;

            function close(callback) {
                editing.clear();
                (callback || ap.doNothing)(null);
            }

            ap.copy({
                preview: function (blog) {
                    return blogRenderService.renderBlog(blog);
                },
                editing: editing,
                save: function (blog) {
                    async.series([
                        editing.save.bind(editing),
                        listing.load.bind(listing),
                        close,
                        messenger.blogSaveDone.bind(messenger)
                    ]);
                },
                cancel: function () {
                    close();
                },
                close: close
            }, $scope);
        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   datasources,
                                                   messenger) {
            var listing = datasources.listing,
                destroying = datasources.destroying;

            ap.copy({
                ellipsisLength: 32,
                listing: listing,
                edit: function (blog) {
                    datasources.editing
                        .init({id: blog._id})
                        .load(function () {
                        });
                },
                destroy: function (blog) {
                    var sure = messenger.askSure();
                    if (!sure) {
                        return;
                    }

                    destroying.init({id: blog._id});
                    async.series([
                        destroying.load.bind(destroying),
                        destroying.destroy.bind(destroying),
                        messenger.blogDestroyDone.bind(messenger),
                        listing.load.bind(listing)
                    ]);
                }
            }, $scope);

            listing.load();
        });

})(angular, apeman, async);
/**
 * @ngdoc module
 * @module ok.adminPage
 * @description Page script for admin.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.adminPage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'admin';
        })
        .controller('AdminCtrl', function ($scope) {
        })
    ;
})(angular, apeman);
/**
 * @ngdoc module
 * @module ok.blogPage
 * @description Page script for blog.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'blog';
        })
        .factory('blogListingDatasource', function (BlogListingDatasource) {
            return new BlogListingDatasource({
                condition: {
                    _sort: '_at',
                    _reverse: true

                }
            });
        })
        .controller('BlogCtrl', function ($scope, blogListingDatasource) {
            ap.copy({
                listing: blogListingDatasource
            }, $scope);

            blogListingDatasource.load();
        })
        .controller('BlogListCtrl', function ($scope) {

        })
        .controller('BlogAsideCtrl', function ($scope) {
        })
    ;

})(angular, apeman);
/**
 * @ngdoc module
 * @module ok.indexPage
 * @descrition Page script for index.
 */

(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.indexPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'index';
        })
        .controller('IndexCtrl', function ($scope) {

        })
        .directive('okContentTitle', function (partialUrlConstant) {
            return {
                scope: {
                    title: '=okContentTitle',
                    subtitle: '=okContentSubtitle'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('content-section-title-container');
                },
                templateUrl: partialUrlConstant.INDEX_CONTENT_TITLE
            }
        })
        .directive('okSeeMore', function (partialUrlConstant) {
            return {
                scope: {
                    href: '=okSeeMore'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('see-more-button-container');
                },
                templateUrl: partialUrlConstant.INDEX_SEE_MORE_BUTTON
            }
        })
        .controller('IndexProfileCtrl', function ($scope) {
        })
        .controller('IndexBlogCtrl', function ($scope) {
        })
        .controller('IndexWorkCtrl', function ($scope) {
        })
    ;

})(angular, apeman, jQuery);
/**
 * @ngdoc module
 * @module ok.page
 * @descripton okunishitaka.com abstract page script.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.page', [
            'apeman',
            'ok.constants',
            'ok.datasources',
            'ok.directives',
            'ok.filters',
            'ok.entities',
            'ok.errors',
            'ok.filters',
            'ok.indices',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ])
        .factory('global', [
            'constantsIndex',
            'servicesIndex',
            function global(cn, sv) {
                var lang = sv.langDetectService.detectLang(),
                    locale = sv.localeLoadService.localeForLang(lang);
                return {
                    lang: lang,
                    locale: locale,
                    get l() {
                        //alias of locale
                        return locale;
                    },
                    app: cn.appConstant,
                    links: cn.linkUrlConstant,
                    images: cn.imageUrlConstant,
                    page: '',
                    pages: cn.pageUrlConstant,
                    partials: cn.partialUrlConstant,
                    goTopPage: function () {
                        sv.locationChangeService.changeToTopPage();
                    },
                    url: function (url) {
                        return sv.locationResolveService.resolveUrl(url);
                    },
                    scrollTo: function (id) {
                        sv.locationChangeService.scrollToHash(id);
                    }
                }
            }
        ])
        .run(function exportsGlobal($rootScope, global) {
            ap.copy(global, $rootScope);
        })
        .run(function cahcheTemplates(templatesIndex, templateCacheService) {
            Object.keys(templatesIndex).forEach(function (key) {
                var template = templatesIndex[key];
                templateCacheService.register(template.name, template.content);
            });
        })
        .controller('HeadControl', function HeadControl($scope) {
        })
        .controller('HeaderControl', function HeaderControl($scope) {
        })
        .controller('FooterControl', function FooterControl($scope) {
        });
})(angular, apeman);

/**
 * @ngdoc module
 * @module ok.profilePage
 * @description Page script for profile.
 */

(function (ng, $) {
    "use strict";

    ng
        .module('ok.profilePage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'profile';
        })
        .directive('okProfileList', function (partialUrlConstant) {
            return {
                link: function (scope, elm, attr) {
                    $(elm).addClass('profile-list-container');
                },
                scope: {
                    id: '=okId',
                    caption: '=okCaption',
                    data: '=okData',
                },
                templateUrl: partialUrlConstant.PROFILE_LIST
            }
        })
        .directive('okProfileTable', function (partialUrlConstant, imageUrlConstant) {
            return {
                link: function (scope, elm, attr) {
                    scope.images = imageUrlConstant;
                    $(elm).addClass('profile-table-container');
                },
                scope: {
                    id: '=okId',
                    caption: '=okCaption',
                    data: '=okData',
                },
                templateUrl: partialUrlConstant.PROFILE_TABLE
            }
        })
        .factory('profileViewingDatasource', function (ProfileViewingDatasource) {
            return new ProfileViewingDatasource({});
        })
        .controller('ProfileCtrl', function ($scope, profileViewingDatasource) {
            $scope.viewing = profileViewingDatasource;
            profileViewingDatasource.load(function (err) {
            });
        });

})(angular, jQuery);
/**
 * @ngdoc module
 * @module ok.workPage
 * @description Page script for work.
 */

(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.workPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'work';
        })
        .factory('workListingDatasource', function (WorkListingDatasource) {
            return new WorkListingDatasource({
                _sort: '_at',
                _revert: true,
                limit: 100
            });
        })
        .directive('okWorkLink', function (partialUrlConstant, linkUrlConstant) {
            return {
                scope: {
                    href: '=okWorkHref',
                    title: '=okWorkTitle',
                    icon: '=okWorkIcon'
                },
                link: function (scope, elm, attr) {
                    scope.links = linkUrlConstant;
                    $(elm).addClass('work-link-container');
                },
                templateUrl: partialUrlConstant.WORK_LINK
            }
        })
        .controller('WorkCtrl', function ($scope) {
        })
        .controller('WorkListCtrl', function ($scope, workListingDatasource) {
            ap.copy({
                listing: workListingDatasource,
                hrefForWork: function (work) {
                    if (!work) {
                        return null;
                    }
                    var links = $scope.links;
                    return links[work.demo] || links[work.link] || links[work.repo];
                }
            }, $scope);
            workListingDatasource.load();
        });

})(angular, apeman, jQuery);

/**
 * ok services module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.services', [
            'apeman',
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);

/**
 * Abstract api service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";


    ng
        .module('ok.services')
        .service('apiService', function ApiService($http, AppApiError, codeConvertService) {
            var s = this;
            ap.copy(
                /**
                 * @lends apiService
                 */
                {
                    _newError: function (data, status) {
                        var s = this;
                        var code = codeConvertService.errorCodeWithHttpStatus(status);
                        if (code === null) {
                            code = codeConvertService.UNEXPECTED_ERROR;
                        }
                        return new AppApiError(code);
                    },
                    /**
                     * Send request.
                     * @param {object} config - Request configuration.
                     * @param {fnction} callback - Callback when done.
                     * @returns {*}
                     * @private
                     */
                    _request: function (config, callback) {
                        var s = this;

                        if (!config.url) {
                            // angular.js標準のエラーが分かりにくいのでここで明示的にthrowしている。
                            throw new Error('url is required.');
                        }
                        callback = callback || ap.doNothing;
                        return $http(config)
                            .success(function (data, status) {
                                callback(null, data);
                            })
                            .error(function (data, status) {
                                var err = s._newError(data, status);
                                callback(err, data);
                            });
                    },
                    /**
                     * Request with params.
                     * @param url
                     * @param method
                     * @param params
                     * @param callback
                     * @returns {*}
                     * @private
                     */
                    _paramsRequest: function (url, method, params, callback) {
                        var s = this;
                        var noParams = (params === undefined) || (typeof(params) == 'function');
                        if (noParams) {
                            callback = callback || params;
                            return s._paramsRequest(url, method, null, callback);
                        }
                        return s._request({
                            url: url,
                            method: method,
                            params: params
                        }, callback);
                    },
                    /**
                     * Request with data.
                     * @param url
                     * @param method
                     * @param data
                     * @param callback
                     * @private
                     */
                    _dataRequest: function (url, method, data, callback) {
                        var s = this;
                        var noData = (data === undefined) || (typeof(data) == 'function');
                        if (noData) {
                            callback = callback || data;
                            return s._dataRequest(url, method, null, callback);
                        }
                        return s._request({
                            url: url,
                            method: method,
                            data: data
                        }, callback);
                    },
                    /**
                     * Get request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @param {function} callback - Callback when done.
                     * @returns {*}
                     */
                    get: function (url, params, callback) {
                        var s = this;
                        return s._paramsRequest(url, 'GET', params, callback);
                    },
                    /**
                     * Post request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    post: function (url, data, callback) {
                        var s = this;
                        return s._dataRequest(url, 'POST', data, callback);
                    },
                    /**
                     * Put request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    put: function (url, data, callback) {
                        var s = this;
                        return s._dataRequest(url, 'PUT', data, callback);
                    },
                    /**
                     * Delete request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    delete: function (url, data, callback) {
                        var s = this;
                        return s._dataRequest(url, 'DELETE', data, callback);
                    }
                },
                s
            );
        }
    );
})(angular, apeman);
/**
 * Blog api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.list = function list(params, callback) {
                var url = apiUrlConstant.API_BLOGS_GET;
                return apiService.get(url, params, callback);
            }

            /**
             * File a resource.
             * @param {string} id - Resource id.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.one = function one(id, callback) {
                var url = formatUrl(apiUrlConstant.API_BLOGS_GET_WITH_ID, {_id: id});
                return apiService.get(url, callback);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.create = function create(data, callback) {
                var url = apiUrlConstant.API_BLOGS_POST;
                return apiService.post(url, data, callback);
            }

            /**
             * Update a resouce.
             * @param {string} id - Resource id.
             * @param {object} data - Data to update.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.update = function update(id, data, callback) {
                    var url = formatUrl(apiUrlConstant.API_BLOGS_PUT_WITH_ID, {_id: id});
                    return apiService.put(url, data, callback);
            }

            /**
             * Destroy a resouce.
             * @param {string} id - Resource id.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.destroy = function destroy(id, callback) {
                var url = formatUrl(apiUrlConstant.API_BLOGS_DELETE_WITH_ID, {_id: id});
                return apiService.delete(url, callback);
            }

        });
})(angular);
/**
 * Profile api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * Get the singleton data.
             * @param {function} callback - Callback when done.
             */
            s.singleton = function singleton(callback) {
                var url = apiUrlConstant.API_PROFILES_GET;
                return apiService.get(url, callback);
            }

        });
})(angular);
/**
 * Setting api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('settingApiService', function SettingApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

        });
})(angular);
/**
 * Work api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('workApiService', function WorkApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.list = function list(params, callback) {
                var url = apiUrlConstant.API_WORKS_GET;
                return apiService.get(url, params, callback);
            }

        });
})(angular);
/**
 * Blog render service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogRenderService', function BlogRenderService(markdownRenderService, BlogEntity) {
            var s = this;
            /**
             * Render a blog.
             * @param {object} blog - Blog to render.
             * @returns {object} - Rendered blog.
             */
            s.renderBlog = function (blog) {
                if (!blog) {
                    return {};
                }
                var rendered = new BlogEntity(blog);
                rendered.html = markdownRenderService.render(blog.content);
                return rendered;
            }
        });

})(angular, apeman);
/**
 * Browser detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('browserDetectService', function BrowserDetectService() {
            var s = this;

        });

})(angular, apeman);
/**
 * Code convert service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('codeConvertService', function CodeConvertService(codeConstant) {

            var appErrorCodes = codeConstant.appErrorCodes,
                httpStatusCodes = codeConstant.httpStatusCodes;

            var s = this;
            /**
             * Unexpected error code.
             * @type {number}
             */
            s.UNEXPECTED_ERROR = appErrorCodes.UNEXPECTED_ERROR;

            /**
             * Get error code for http status
             * @param {number} statusCode - HTTP status code.
             */
            s.errorCodeWithHttpStatus = function (statusCode) {
                statusCode = Number(statusCode);
                var keys = Object.keys(appErrorCodes);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    var hit = httpStatusCodes[key] === statusCode;
                    if (hit) {
                        return appErrorCodes[key];
                    }
                }
                return null;
            }
        });
})(angular, apeman);
/**
 * Confirm message service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('confirmMessageService', function ConfirmMessageService($window) {
            var s = this;
            s.confirm = function (msg) {
                return $window.confirm(msg);
            }
        });

})(angular, apeman);
/**
 * Lang detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(appConstant, $location, urlUtil) {
            var s = this,
                SUPPORTED_LANGS = appConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0];

            s.SUPPORTED_LANGS = SUPPORTED_LANGS;
            s.DEFAULT_LANG = DEFAULT_LANG;
            /**
             * Get rang from url
             * @param {string} url - Url to work with.
             * @param {string[]} supportedLangs - Supported lang names.
             * @returns {string} - Detected lang.
             * @private
             */
            s._langWithURL = function (url, supportedLangs) {
                supportedLangs = [].concat(supportedLangs);
                var hostname = urlUtil.hostnameInUrl(url),
                    subdomain = hostname.split(/\./g).shift();
                for (var i = 0; i < supportedLangs.length; i++) {
                    var lang = supportedLangs[i];
                    if (lang === subdomain) {
                        return lang;
                    }
                }
                return null;
            };
            /**
             * Detect a lang.
             * @returns {string} - Detected lang.
             */
            s.detectLang = function () {
                var url = $location.href;
                return s._langWithURL(url, SUPPORTED_LANGS) || DEFAULT_LANG;
            };

        });

})(angular, apeman);
/**
 * Locale load service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('localeLoadService', function LocaleLoadService(apLocaleService, localeConstant) {
            var s = this;
            Object.keys(localeConstant).forEach(function (lang) {
                apLocaleService.register(lang, localeConstant[lang]);
            });

            /**
             * Get locale data for a lang.
             * @param {string} lang - Lang.
             * @returns {object} - Locale data.
             */
            s.localeForLang = function (lang) {
                return apLocaleService.localeForLang(lang);
            };
        });

})(angular, apeman);
/**
 * Location change service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationChangeService', function LocationChangeService($window, $anchorScroll, $location) {
            var s = this;
            /**
             * Change windows location.
             * @param {string} url - URL
             */
            s.changeTo = function (url) {
                $window.location.href = url;
            };

            /**
             *  Go to root page for current location.
             */
            s.changeToTopPage = function () {
                s.changeTo('/');
            }

            /**
             * Scroll to hash.
             * @param {string} hash - A url hash (dom element id).
             */
            s.scrollToHash = function (hash) {
                hash = hash.replace(/^#/, '');
                $location.hash(hash);
                $anchorScroll();
            }
        });

})(angular, apeman);
/**
 * Location resolve service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationResolveService', function LocationResolveService($window, urlUtil) {
            var s = this;

            s.baseUrl = urlUtil.baseUrlWithLocation($window.location);

            s.resolveUrl = function (url) {
                if (!url) {
                    return url;
                }
                if (url.match(/^\//)) {
                    return urlUtil.joinUrl(s.baseURL, url);
                }
                return urlUtil.joinUrl($window.location.href, url);
            }

        });

})(angular, apeman);
/**
 * Markdown render service.
 * @requires angular
 * @requires apeman
 * @requires marked
 */
(function (ng, ap, marked) {
    "use strict";

    ng
        .module('ok.services')
        .service('markdownRenderService', function MarkdownRenderService() {
            var s = this;

            /**
             * Render a markdonw text.
             * @param {string} text - Text to render.
             * @returns {string} - Rendered text.
             */
            s.render = function (text) {
                return marked(text || '');
            };
        });

})(angular, apeman, marked);
/**
 * Template cache service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('templateCacheService', function TemplateCacheService($templateCache) {
            var s = this;
            /**
             * Register a template.
             * @param {string} name - Template name.
             * @param {string} content - Template content.
             */
            s.register = function (name, content) {
                var isObj = typeof(arguments[0]) === 'object';
                if (isObj) {
                    var data = arguments[0];
                    Object.keys(data).forEach(function (key) {
                        s.register(key, data[key]);
                    });
                }
                $templateCache.put(name, content);
            };
        });

})(angular, apeman);
/**
 * Toast message service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('toastMessageService', function ToastMessageService($rootScope, $timeout) {
            var s = this;
            s._dismissTimer = null;
            s._dismissDuration = 2000;
            s._showMessage = function (message, type) {
                $rootScope.toasts = $rootScope.toasts || {};
                var queue = $rootScope.toasts[type] = $rootScope.toasts[type] || [];
                queue.push(message);
                s._dismissTimer = $timeout(function () {
                    queue.shift();
                }, s._dismissDuration);
            }

            /**
             * Show infor message.
             * @param {string} message - Message to show.
             */
            s.showInfoMessage = function (message) {
                s._showMessage(message, 'info');
            }
            /**
             * Show warn message.
             * @param {string} message - Message to show.
             */
            s.showWarnMessage = function (message) {
                s._showMessage(message, 'warn');
            }
            /**
             * Show error message.
             * @param {string} message - Message to show.
             */
            s.showErrorMessage = function (message) {
                s._showMessage(message, 'error');
            }
        });

})(angular, apeman);
/**
 * Url format service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('urlFormatService', function UrlFormatService() {
            var s = this;
            /**
             * Format a url
             * @param {string} urlString - Url string.
             * @param {object} data - Data to format.
             */
            s.formatUrl = function (urlString, data) {
                var joiner = '/';
                return urlString
                    .split(joiner)
                    .map(function (pathname) {
                        var isVariable = pathname.match(/^:/);
                        if (isVariable) {
                            var key = pathname.replace(/^:/, '');
                            if (!data.hasOwnProperty(key)) {
                                throw new Errror('Missing key:', pathname);
                            }
                            return data[key];
                        }
                        return pathname;
                    })
                    .join(joiner);
            }
        });

})(angular, apeman);

/**
 * ok templates module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.templates', [
            
        ]);
})(angular);

/**
 * Template for adminAdminBlogEditorSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminBlogEditorSectionHtmlTemplate', {
		    "name": "/html/partials/admin/admin-blog-editor-section.html",
		    "content": "<section id=\"admin-blog-editor-section\"\n         ng:class=\"{'blog-editor-visible':!!editing.data}\"\n         ng:controller=\"AdminBlogEditCtrl\" class=\"cover\">\n    <div id=\"admin-blog-editor-section-content\"\n         ok:alias=\"{blog:'editing.data'}\"\n         class=\"container position-relative\">\n\n        <a ng:click=\"close()\" id=\"admin-blog-close-button\" class=\"close-button\">{{l.buttons.CLOSE}}</a>\n\n        <div class=\"grid-row\">\n            <div class=\"grid-col\">\n                <fieldset class=\"no-style-fieldset\">\n                    <div class=\"field\">\n                        <input type=\"text\" id=\"blog-title-input\"\n                               placeholder=\"{{l.placeholders.blog.TITLE}}\"\n                               ng:model=\"blog.title\"\n                               class=\"wide-input\">\n                    </div>\n                    <div class=\"field\">\n                        <input type=\"text\" id=\"blog-tags-input\"\n                               placeholder=\"{{l.placeholders.blog.TAGS}}\"\n                               ng:model=\"blog.tagText\"\n                               class=\"wide-input\"/>\n                    </div>\n                    <div class=\"field\">\n                        <textarea name=\"blog-text\" id=\"blog-text-textarea\"\n                                  placeholder=\"{{l.placeholders.blog.CONTENT}}\"\n                                  class=\"wide-textarea\" cols=\"20\" rows=\"10\"\n                                  ng:model=\"blog.content\"\n                                ></textarea>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"text-align-center\">\n                            <a id=\"blog-cancel-button\"\n                               ok:button\n                               ng:click=\"cancel()\">{{l.buttons.CANCEL}}</a>\n                            <a id=\"blog-save-button\"\n                               ok:button\n                               ok:button-type=\"'primary'\"\n                               ng:click=\"save(blog)\">{{l.buttons.SAVE}}</a>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <div class=\"grid-col\">\n                <fieldset>\n                    <legend>{{l.pages.blog.PREVIEW_LEGEND}}</legend>\n                    <div id=\"admin-blog-preview-div\">\n                        <h2>{{blog.title}}</h2>\n\n                        <div>\n                            <span ok:tag ok:title=\"t\" ng:repeat=\"t in (blog.tagText | textSplitFilter:',')\"></span>\n                        </div>\n                        <div ng:bind-html=\"preview(blog).html\"></div>\n                    </div>\n                </fieldset>\n                <div class=\"grid-col\">\n                    <br class=\"clear\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"
		});

})(angular);
/**
 * Template for adminAdminBlogListSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/admin/admin-blog-list-section.html",
		    "content": "<section id=\"admin-blog-list-section\" ng:controller=\"AdminBlogListCtrl\">\n    <ul id=\"admin-blog-list\">\n        <li ng:repeat=\"b in listing.data\" class=\"admin-blog-list-item\">\n\n            <span class=\"admin-blog-list-action-area\">\n                <a ok:button ok:button-type=\"'link'\" ng:click=\"edit(b)\"><i\n                        class=\"fa fa-pencil\"></i>{{l.buttons.EDIT}}</a>\n                <a ok:button ok:button-type=\"'link'\" ng:click=\"destroy(b)\"><i class=\"fa fa-trash-o\"></i>{{l.buttons.DELETE}}</a>\n            </span>\n\n            <div class=\"admin-blog-list-item-inner\">\n                <h3 class=\"admin-blog-list-title\">\n                    <a class=\"blog-dt-anchor\"\n                       name=\"blog-{{b._id}}\">{{b.title}}</a>\n                </h3>\n\n                <div>\n                    <span class=\"blog-date-label\">{{b._at | dateFormatFilter}}</span>\n                </div>\n                <div>\n                    <span ok:tag ok:title=\"t\" ng:repeat=\"t in (b.tagText | textSplitFilter:',')\"></span>\n                </div>\n            <span class=\"admin-blog-list-content\">\n            {{b.content | textEllipsisFilter:ellipsisLength}}\n            </span>\n\n            </div>\n        </li>\n    </ul>\n    <a id=\"admin-blog-more-button\"\n       class=\"list-more-button\"\n       ok:button\n       ng:show=\"listing.hasMore\"\n       ng:click=\"listing.loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</section>"
		});

})(angular);
/**
 * Template for adminAdminEditorSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminEditorSectionHtmlTemplate', {
		    "name": "/html/partials/admin/admin-editor-section.html",
		    "content": "<section id=\"blog-edit-editor-section\"\n         ng:class=\"{'blog-editor-visible':status.isEditing}\"\n         ng:controller=\"BlogEditEditorCtrl\" class=\"cover\">\n    <div id=\"blog-edit-editor-section-content\" class=\"container position-relative\">\n\n        <a ng:click=\"close()\" id=\"blog-edit-close-button\" class=\"close-button\">{{l.buttons.CLOSE}}</a>\n\n        <div class=\"grid-row\">\n            <div class=\"grid-col\">\n                <fieldset class=\"no-style-fieldset\">\n                    <div class=\"field\">\n                        <input type=\"text\" id=\"blog-title-input\"\n                               placeholder=\"{{l.placeholders.blog.TITLE}}\"\n                               ng:model=\"blog.title\"\n                               class=\"wide-input\">\n                    </div>\n                    <div class=\"field\">\n                        <textarea name=\"blog-text\" id=\"blog-text-textarea\"\n                                  placeholder=\"{{l.placeholders.blog.CONTENT}}\"\n                                  class=\"wide-textarea\" cols=\"20\" rows=\"10\"\n                                  ng:model=\"blog.content\"\n                                ></textarea>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"text-align-center\">\n                            <a id=\"blog-cancel-button\" class=\"button\"\n                               href=\"javascript:void(0)\"\n                               ng:click=\"cancel()\"\n                                    >{{l.buttons.CANCEL}}</a>\n                            <a id=\"blog-save-button\" class=\"button button-primary\"\n                               href=\"javascript:void(0)\"\n                               ng:click=\"save(blog)\"\n                                    >{{l.buttons.SAVE}}</a>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <div class=\"grid-col\">\n                <fieldset>\n                    <legend>{{l.pages.blog.PREVIEW_LEGEND}}</legend>\n                    <div id=\"blog-edit-preview-div\">\n                        <h2>{{preview.title}}</h2>\n\n                        <div ng:bind-html=\"preview.content\"></div>\n                    </div>\n                </fieldset>\n                <div class=\"grid-col\">\n                    <br class=\"clear\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"
		});

})(angular);
/**
 * Template for adminAdminHeaderHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminHeaderHtmlTemplate', {
		    "name": "/html/partials/admin/admin-header.html",
		    "content": "<!-- Header HTML -->\n<div class=\"container\">\n    <nav class=\"header-nav\">\n    </nav>\n    <h1 class=\"header-logo\" ng:click=\"goTopPage();\">{{l.pages.admin.LOGO}}</h1>\n</div>"
		});

})(angular);
/**
 * Template for blogBlogAsideContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogAsideContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-aside-content.html",
		    "content": "<div ng:controller=\"BlogAsideCtrl\">\n    <ul>\n        <li ng:repeat=\"b in listing.data\">\n            <a href=\"javascript:void(0)\" ng:click=\"scrollTo('blog-' + b._id)\">{{b.title}}</a>\n        </li>\n    </ul>\n    <a id=\"aside-blog-more-button\"\n       href=\"javascript:void(0)\"\n       ng:show=\"list.hasMore\"\n       ng:click=\"list.loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</div>"
		});

})(angular);
/**
 * Template for blogBlogEditEditorSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditEditorSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-editor-section.html",
		    "content": "<section id=\"blog-edit-editor-section\"\n         ng:class=\"{'blog-editor-visible':status.isEditing}\"\n         ng:controller=\"BlogEditEditorCtrl\" class=\"cover\">\n    <div id=\"blog-edit-editor-section-content\" class=\"container position-relative\">\n\n        <a ng:click=\"close()\" id=\"blog-edit-close-button\" class=\"close-button\">{{l.buttons.CLOSE}}</a>\n\n        <div class=\"grid-row\">\n            <div class=\"grid-col\">\n                <fieldset class=\"no-style-fieldset\">\n                    <div class=\"field\">\n                        <input type=\"text\" id=\"blog-title-input\"\n                               placeholder=\"{{l.placeholders.blog.TITLE}}\"\n                               ng:model=\"blog.title\"\n                               class=\"wide-input\">\n                    </div>\n                    <div class=\"field\">\n                        <textarea name=\"blog-text\" id=\"blog-text-textarea\"\n                                  placeholder=\"{{l.placeholders.blog.CONTENT}}\"\n                                  class=\"wide-textarea\" cols=\"20\" rows=\"10\"\n                                  ng:model=\"blog.content\"\n                                ></textarea>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"text-align-center\">\n                            <a id=\"blog-cancel-button\" class=\"button\"\n                               href=\"javascript:void(0)\"\n                               ng:click=\"cancel()\"\n                                    >{{l.buttons.CANCEL}}</a>\n                            <a id=\"blog-save-button\" class=\"button button-primary\"\n                               href=\"javascript:void(0)\"\n                               ng:click=\"save(blog)\"\n                                    >{{l.buttons.SAVE}}</a>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <div class=\"grid-col\">\n                <fieldset>\n                    <legend>{{l.pages.blog.PREVIEW_LEGEND}}</legend>\n                    <div id=\"blog-edit-preview-div\">\n                        <h2>{{preview.title}}</h2>\n\n                        <div ng:bind-html=\"preview.content\"></div>\n                    </div>\n                </fieldset>\n                <div class=\"grid-col\">\n                    <br class=\"clear\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"
		});

})(angular);
/**
 * Template for blogBlogEditListSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditListSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-list-section.html",
		    "content": "<section id=\"admin-blog-list-section\" ng:controller=\"BlogEditListCtrl\">\n    <ul id=\"admin-blog-list\">\n        <li ng:repeat=\"b in blogs\" class=\"admin-blog-list-item\">\n\n            <span class=\"admin-blog-list-action-area\">\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"edit(b)\"><i class=\"fa fa-pencil\"></i>{{l.buttons.EDIT}}</a>\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"destroy(b)\"><i class=\"fa fa-trash-o\"></i>{{l.buttons.DELETE}}</a>\n            </span>\n\n            <div class=\"admin-blog-list-item-inner\">\n\n\n                <h3 class=\"admin-blog-list-title\">\n                    <a class=\"blog-dt-anchor\"\n                       name=\"blog-{{b._id}}\">{{b.title}}</a>\n                </h3>\n\n            <span class=\"admin-blog-list-content\">\n            {{summarize(b.content)}}\n            </span>\n\n            </div>\n        </li>\n    </ul>\n</section>"
		});

})(angular);
/**
 * Template for blogBlogEditSectionContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditSectionContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-section-content.html",
		    "content": "<div>\n    <div>\n        <input type=\"text\" id=\"blog-title-input\" class=\"wide-input\">\n    </div>\n    <textarea name=\"blog-text\" id=\"blog-text-textarea\" class=\"wide-textarea\" cols=\"30\" rows=\"20\"></textarea>\n\n    <div id=\"blog-edti-preview\"></div>\n    <div class=\"text-center\">\n        <a id=\"blog-cancel-button\" class=\"button\" href=\"\">{{l.buttons.CANCEL}}</a>\n        <a id=\"blog-save-button\" class=\"button\" href=\"\">{{l.buttons.SAVE}}</a>\n    </div>\n</div>\n"
		});

})(angular);
/**
 * Template for blogBlogEditSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-section.html",
		    "content": "<section id=\"blog-edit-section\"\n         ng:class=\"\"\n         ng:controller=\"BlogEditCtrl\" class=\"cover\">\n    <div id=\"blog-edit-section-content\" class=\"container\">\n\n        <a ng:click=\"close()\" id=\"blog-edit-close-button\" class=\"close-button\">{{l.buttons.CLOSE}}</a>\n\n        <div class=\"\">\n\n        </div>\n        <div class=\"\">\n            <fieldset class=\"no-style-fieldset\">\n                <div>\n                    <input type=\"text\" id=\"blog-title-input\"\n                           placeholder=\"{{l.placeholders.blog.TITLE}}\"\n                           ng:model=\"blog.title\"\n                           class=\"wide-input\">\n                </div>\n                <div>\n                    <label for=\"blog-status-radio-true\">\n                        <input id=\"blog-status-radio-true\"\n                               ng:model=\"blog.status\"\n                               type=\"radio\" name=\"blog-status-radio\" value=\"1\"/>\n                        {{l.labels.blogstatus.PUBLIC}}\n                    </label>\n                    <label for=\"blog-status-radio-false\">\n                        <input id=\"blog-status-radio-false\"\n                               ng:model=\"blog.status\"\n                               type=\"radio\" name=\"blog-status-radio\" value=\"0\"/>\n                        {{l.labels.blogstatus.PRIVATE}}\n                    </label>\n                </div>\n                <textarea name=\"blog-text\" id=\"blog-text-textarea\"\n                          placeholder=\"{{l.placeholders.blog.CONTENT}}\"\n                          class=\"wide-textarea\" cols=\"30\" rows=\"20\"\n                          ng:model=\"blog.content\"\n                        ></textarea>\n\n                <div class=\"text-center\">\n                    <a id=\"blog-cancel-button\" class=\"button\"\n                       ng:click=\"cancel()\"\n                            >{{l.buttons.CANCEL}}</a>\n                    <a id=\"blog-save-button\" class=\"button\"\n                       ng:click=\"save(blog)\"\n                            >{{l.buttons.SAVE}}</a>\n                </div>\n            </fieldset>\n            <fieldset>\n                <legend>{{l.pages.blog.PREVIEW_LEGEND}}</legend>\n                <div id=\"blog-edit-preview-div\">\n                    <h2>{{preview.title}}</h2>\n\n                    <div ng:bind-html=\"preview.content\"></div>\n                </div>\n            </fieldset>\n            <br class=\"clear\"/>\n        </div>\n    </div>\n</section>"
		});

})(angular);
/**
 * Template for blogBlogListSectionContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section-content.html",
		    "content": "<div>\n    <dl id=\"blog-list\">\n        <dt ng:repeat-start=\"b in blogs\" id=\"blog-dt-{{b._id}}\">\n            {{b.title}}\n        </dt>\n        <dd ng:repeat-end=\"\">{{b.content}}</dd>\n    </dl>\n</div>"
		});

})(angular);
/**
 * Template for blogBlogListSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section.html",
		    "content": "<section id=\"blog-list-section\" ng:controller=\"BlogListCtrl\">\n    <dl id=\"blog-list\">\n        <dt ng:repeat-start=\"b in listing.data\">\n            <a class=\"blog-dt-anchor\"\n               name=\"blog-{{b._id}}\">\n                {{b.title}}\n            </a>\n            <span class=\"blog-date-label\">{{b._at | dateFormatFilter}}</span>\n            <span class=\"display-block\">\n                <span ok:tag ok:title=\"t\" ng:repeat=\"t in (b.tagText | textSplitFilter:',')\"></span>\n            </span>\n        </dt>\n        <dd ng:repeat-end=\"\">{{b.content}}</dd>\n    </dl>\n    <a id=\"blog-more-button\"\n       class=\"list-more-button\"\n       ok:button\n       ng:show=\"listing.hasMore\"\n       ng:click=\"listing.loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</section>"
		});

})(angular);
/**
 * Template for faviconHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('faviconHtmlTemplate', {
		    "name": "/html/partials/favicon.html",
		    "content": "<link rel=\"icon\" href=\"/favicon.png?v=0.0.0\">"
		});

})(angular);
/**
 * Template for footerHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('footerHtmlTemplate', {
		    "name": "/html/partials/footer.html",
		    "content": "<div class=\"container\" id=\"footer-content\">\n    <small id=\"small-copyright\">{{l.meta.COPY_RIGHT}}</small>\n\n    <div class=\"float-right\">\n        <a ng-href=\"{{links.MY_GITHUB}}\">Repo on GitHub</a>\n    </div>\n</div>\n"
		});

})(angular);
/**
 * Template for headerHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('headerHtmlTemplate', {
		    "name": "/html/partials/header.html",
		    "content": "<!-- Header HTML -->\n<div class=\"container\">\n    <nav class=\"header-nav\">\n        <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='profile'}\" href=\"{{pages.PROFILE}}\">{{l.pageNames.PROFILE}}</a>\n        <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='blog'}\" href=\"{{pages.BLOG}}\">{{l.pageNames.BLOG}}</a>\n        <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='work'}\" href=\"{{pages.WORK}}\">{{l.pageNames.WORK}}</a>\n    </nav>\n    <h1 class=\"header-logo\" ng:click=\"goTopPage();\">{{l.meta.NAME}}</h1>\n</div>"
		});

})(angular);
/**
 * Template for indexIndexContentTitleHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexContentTitleHtmlTemplate', {
		    "name": "/html/partials/index/index-content-title.html",
		    "content": "<h1 class=\"content-section-title\">{{title}}</h1>\n<span class=\"content-section-subtitle\">{{subtitle}}</span>"
		});

})(angular);
/**
 * Template for indexIndexMenuSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexMenuSectionHtmlTemplate', {
		    "name": "/html/partials/index/index-menu-section.html",
		    "content": "<section id=\"menu-section\" ok:scroll-to-fixed=\"#menu-section-inner\">\n    <div id=\"menu-section-inner\">\n        <div class=\"container\">\n            <h3 id=\"small-title\">{{l.pages.index.TITLE}}</h3>\n            <nav class=\"grid-row\" id=\"menu-nav\">\n                <a class=\"grid-col menu-nav-item\" href=\"{{pages.PROFILE}}\">{{l.pageNames.PROFILE}}</a>\n                <a class=\"grid-col menu-nav-item\" href=\"{{pages.BLOG}}\">{{l.pageNames.BLOG}}</a>\n                <a class=\"grid-col menu-nav-item\" href=\"{{pages.WORK}}\">{{l.pageNames.WORK}}</a>\n            </nav>\n            <br class=\"clear\">\n        </div>\n    </div>\n</section>"
		});

})(angular);
/**
 * Template for indexIndexSeeMoreButtonHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexSeeMoreButtonHtmlTemplate', {
		    "name": "/html/partials/index/index-see-more-button.html",
		    "content": "<a class=\"see-more-button\" href=\"{{href}}\">\n    <span class=\"see-more-button-label\">\n        <span class=\"see-more-button-label-inner fa fa-angle-right\"></span>\n    </span>\n</a>"
		});

})(angular);
/**
 * Template for indexIndexTitleHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexTitleHtmlTemplate', {
		    "name": "/html/partials/index/index-title.html",
		    "content": "<h1 class=\"content-section-title\">{{title}}</h1>\n<p>{{description}}</p>"
		});

})(angular);
/**
 * Template for metaHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('metaHtmlTemplate', {
		    "name": "/html/partials/meta.html",
		    "content": "<!-- Meta HTML -->\n<meta ng:attr-charset=\"UTF-8\">\n<meta name=\"fragment\" content=\"!\">\n<meta name=\"application-name\" content=\"{{l.meta.NAME}}\"/>\n<meta name=\"description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"generator\" content=\"apeman\"/>\n<meta name=\"author\" content=\"{{l.meta.AUTHOR}}\"/>\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"/>\n\n<!-- Open graph tags -->\n<meta property=\"og:title\" content=\"{{page | pageTitleFilter:l}}\"/>\n<meta property=\"og:type\" content=\"website\"/>\n<meta property=\"og:image\" content=\"\"/> <!-- FIXME -->\n<meta property=\"og:url\" content=\"{{app.HOMEPAGE}}\"/>\n<meta property=\"og:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n\n\n<!-- Twitter tags -->\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:title\" content=\"{{page | pageTitleFilter:l}}\">\n<meta name=\"twitter:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"twitter:image\" content=\"\"/> <!-- FIXME -->\n\n"
		});

})(angular);
/**
 * Template for profileProfileListHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('profileProfileListHtmlTemplate', {
		    "name": "/html/partials/profile/profile-list.html",
		    "content": "<h3 class=\"caption\">{{caption}}</h3>\n<ul id=\"{{id}}\">\n    <li ng:repeat=\"line in data.lines\"\n        ng:bind-html=\"line | textLinkFilter:data.links\"></li>\n</ul>"
		});

})(angular);
/**
 * Template for profileProfileTableHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('profileProfileTableHtmlTemplate', {
		    "name": "/html/partials/profile/profile-table.html",
		    "content": "<table id=\"{{id}}\" class=\"profile-table\">\n    <caption>{{caption}}</caption>\n    <thead>\n    <tr ng:if=\"!!data.head\">\n        <th ng:repeat=\"head in data.head\">{{head}}</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng:repeat=\"row in data.body\" ng:init=\"headed=!!data.headedBody\">\n        <th ng:repeat=\"cell in row\" ng:if=\"(headed && $first)\"\n            ng:bind-html=\"cell | textLinkFilter:data.links\"></th>\n        <td ng:repeat=\"cell in row\" ng:if=\"!(headed && $first)\">\n            <span ng:hide=\"cell.image\"\n                  ng:bind-html=\"cell | textLinkFilter:data.links\"></span>\n            <span ng:show=\"cell.image\"><a href=\"{{images[cell.image]}}\" target=\"_blank\">{{cell.title}}</a></span>\n        </td>\n    </tr>\n    </tbody>\n</table>"
		});

})(angular);
/**
 * Template for socialHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('socialHtmlTemplate', {
		    "name": "/html/partials/social.html",
		    "content": "<div id=\"social-buttons-container\" class=\"container\">\n    <div ok:fade-in ok:duration=\"400\" ok:delay=\"800\">\n\n        <div class=\"button-container\" id=\"facebook-button-container\">\n            <div ok:facebook-button ok:href=\"links['OKUNISHITAKA_DOT_COM']\"></div>\n        </div>\n\n\n        <div class=\"button-container\" id=\"twitter-button-container\">\n            <div ok:twitter-button ok:href=\"links['OKUNISHITAKA_DOT_COM']\" ok:via=\"okunishinishi\"></div>\n        </div>\n\n        <br class=\"clear-both\"/>\n    </div>\n</div>"
		});

})(angular);
/**
 * Template for titleHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('titleHtmlTemplate', {
		    "name": "/html/partials/title.html",
		    "content": "<title ng:bind=\"page | pageTitleFilter:l\"></title>"
		});

})(angular);
/**
 * Template for toastHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('toastHtmlTemplate', {
		    "name": "/html/partials/toast.html",
		    "content": "<div class=\"toast-container\">\n    <div class=\"container\">\n        <div class=\"toast error-toast\" ok:toast ok:toast-messages=\"toasts.error\"></div>\n        <div class=\"toast warn-toast\" ok:toast ok:toast-messages=\"toasts.warn\"></div>\n        <div class=\"toast info-toast\" ok:toast ok:toast-messages=\"toasts.info\"></div>\n    </div>\n</div>"
		});

})(angular);
/**
 * Template for trackHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('trackHtmlTemplate', {
		    "name": "/html/partials/track.html",
		    "content": "<div ok:google-analytics ok:tracking-id=\"app.GA_TRACKING_ID\"></div>"
		});

})(angular);
/**
 * Template for workWorkLinkHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('workWorkLinkHtmlTemplate', {
		    "name": "/html/partials/work/work-link.html",
		    "content": "<a ng:href=\"{{links[href]}}\"\n   ng:if=\"!!links[href]\"\n   class=\"work-link work-white-back\"><span class=\"work-link-icon-container\"><img\n        ng:if=\"!!links[icon]\"\n        ng:src=\"{{links[icon]}}\"\n        class=\"work-link-icon\"/></span>{{title}}<span\n        class=\"work-link-disclosure fa fa-angle-right\"></span></a>"
		});

})(angular);
/**
 * Template for workWorkListHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('workWorkListHtmlTemplate', {
		    "name": "/html/partials/work/work-list.html",
		    "content": "<ul id=\"work-list\" ng:controller=\"WorkListCtrl\">\n\n    <li ng:repeat=\"work in listing.data\" class=\"work-list-item\">\n\n        <div class=\"work-background-image-container\">\n            <a ng:href=\"{{hrefForWork(work)}}\" class=\"image-link\">\n                <img ng:src=\"{{images[work.thumbnail]}}\" class=\"work-background-image\">\n            </a>\n        </div>\n\n        <h3 class=\"work-list-item-title work-white-back theme-font\">\n            <a ng:href=\"{{hrefForWork(work)}}\">{{work.name}}<img class=\"work-list-favicon\"\n                                                                 ng:src=\"{{links[work.favicon]}}\"\n                                                                 ng:if=\"!!links[work.favicon]\"/>\n            </a>\n        </h3>\n\n        <div class=\"work-list-item-content\">\n            <div class=\"work-description work-white-back\">\n                <div class=\"work-tags-container\">\n                    <span ok:tag ok:title=\"t\" ng:repeat=\"t in work.tag\"></span>\n                </div>\n\n                <div ng:repeat=\"d in work.description\">{{d}}</div>\n            </div>\n\n            <div ok:work-link ok:work-href=\"work.link\" ok:work-title=\"l.buttons.VISIT_SITE\"\n                 ok:work-icon=\"work.favicon\">\n            </div>\n            <div ok:work-link ok:work-href=\"work.demo\" ok:work-title=\"l.buttons.TRY_DEMO\"\n                 ok:work-icon=\"work.favicon\">\n            </div>\n            <div ok:work-link ok:work-href=\"work.repo\" ok:work-title=\"l.buttons.VIEW_SOURCE_CODE\"\n                 ok:work-icon=\"work.repoFavicon\">\n            </div>\n        </div>\n\n    </li>\n    <li class=\"clear-both\"></li>\n</ul>"
		});

})(angular);

/**
 * ok utils module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.utils', [
            
        ]);
})(angular);

/**
 * Canvas util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('canvasUtil', function defineCanvasUtil($window) {
            var canvasUtil = {
                get devicePixelRatio() {
                    return $window.devicePixelRatio || 1
                },
                /**
                 * Optimize canvas pixel rate.
                 * @param {HTMLElement} canvas
                 */
                optimizeCanvasRatio: function (canvas) {
                    var ratio = canvasUtil.devicePixelRatio;
                    if (!ratio) {
                        return;
                    }
                    var w = canvas.width,
                        h = canvas.height;
                    canvas.width = w * ratio;
                    canvas.height = h * ratio;
                    canvas.getContext('2d').scale(ratio, ratio);
                    canvas.style.width = w + 'px';
                    canvas.style.height = h + 'px';
                },
                /**
                 * Create a new canvas.
                 * @param {nubmer} width - Canvas width.
                 * @param {number} height - Canvas height.
                 * @returns {*}
                 */
                newCanvas: function (width, height) {
                    var canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    canvasUtil.optimizeCanvasRatio(canvas);
                    return canvas;
                }
            }
            return canvasUtil;
        });
})(angular, apeman);
/**
 * Hash util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('hashUtil', function defineHashUtil() {
            return {
                /**
                 * Get hash code for string value.
                 * @param {string} value - String to hash.
                 * @returns {number} - Hash code.
                 */
                toHashCode: function (value) {
                    return value.split("").reduce(function (a, b) {
                        a = ((a << 5) - a) + b.charCodeAt(0);
                        return a & a
                    }, 0);
                }
            }
        });
})(angular, apeman);
/**
 * Math util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('mathUtil', function defineMathUtil() {
            return {
                /**
                 * Get random value.
                 * @returns {number} - Random value.
                 */
                random: Math.random.bind(Math),
                /**
                 * Get random int.
                 * @param {number} [min=0] - Min value.
                 * @param {number} [max=Infinity] - Max value.
                 */
                randomInt: function (min, max) {
                    min = (min === undefined) ? 0 : min;
                    max = (max === undefined) ? Infinity : max;
                    var range = max - min;
                    return parseInt(Math.random() * range, 10) + min;
                },
                /**
                 * Round a value.
                 * @param {number} value - Value to round.
                 * @returns {number} - Rounded value.
                 */
                round: Math.round.bind(Math)
            }
        });
})(angular, apeman);
/**
 * Object utility.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('objectUtil', function defineObjectUtil() {
            return {
                /**
                 * Get key of object for a value.
                 * @param {object} obj - Object to find.
                 * @param {*} value - Value to detect.
                 * @returns {string[]} - Keys.
                 */
                keysForValue: function (obj, value) {
                    if (!obj) {
                        return null;
                    }
                    var result = [],
                        keys = Object.keys(obj);
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var key = keys[i],
                            hit = obj[key] === value;
                        if (hit) {
                            result.push(key);
                        }
                    }
                    return result;
                }
            }
        });
})(angular, apeman);
/**
 * Position util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('positionUtil', function definePositionUtil($window) {
            return {
                /**
                 * Get offset from window.
                 * @param {HTMLElement} elm
                 * @returns {{top: number, left: number}}
                 */
                offsetSum: function (elm) {
                    var top = 0, left = 0;
                    if (elm[0]) elm = elm[0]; //Remove jquery.
                    while (elm) {
                        top = top + parseInt(elm.offsetTop, 10);
                        left = left + parseInt(elm.offsetLeft, 10);
                        elm = elm.offsetParent;
                    }
                    return {top: top, left: left};
                }
            }
        });
})(angular, apeman);
/**
 * URL utility.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";


    ng
        .module('ok.utils')
        .factory('urlUtil', function defineUrlUtil() {
            return {
                /**
                 * Get base url for a location.
                 * @param location - Location object.
                 * @returns {string} - Base url string.
                 */
                baseUrlWithLocation: function (location) {
                    return location.origin || [
                        [location.protocol, location.hostname].join("//"),
                        (location.port ? ':' + location.port : '')
                    ].join('');
                },
                /**
                 * Join url.
                 * @param [string...] components - Pathnames to join.
                 * @returns {string} - Joined url.
                 */
                joinUrl: function (/** components **/) {
                    return Array.prototype.slice.call(arguments, 0).reduce(function (result, current) {
                        if (!result) {
                            return current;
                        }
                        var joiner = result.match(/\/$/) ? '' : '/';
                        return [result, current].join(joiner);
                    }, null);
                },
                /**
                 * Get host name from url.
                 * @param url
                 */
                hostnameInUrl: function (url) {
                    return ap.parseURL(url).hostname;
                }
            }
        });
})(angular, apeman);

