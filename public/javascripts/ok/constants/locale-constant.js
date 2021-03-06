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
		            "COPY_RIGHT": "Copyright © 2015 Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content ",
		                "TAGS": "Tags (comma-separated)"
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
		            "CONFLICT_ERROR": "Conflict occurred.",
		            "CONNECTION_ERROR": "Connection error occurred.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occurred.",
		            "UNEXPECTED_ERROR": "Unexpected error occurred.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not available anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Please try again later.",
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
		                    "DREAM": "Dream",
		                    "BASICS": "Basics",
		                    "EDUCATION": "Education",
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
		            "COPY_RIGHT": "Copyright © 2015 Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content ",
		                "TAGS": "Tags (comma-separated)"
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
		            "CONFLICT_ERROR": "Conflict occurred.",
		            "CONNECTION_ERROR": "Connection error occurred.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occurred.",
		            "UNEXPECTED_ERROR": "Unexpected error occurred.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not available anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Please try again later.",
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
		                    "DREAM": "Dream",
		                    "BASICS": "Basics",
		                    "EDUCATION": "Education",
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

