/**
 * ok directives module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc directive
 * @name okImageList
 * @description Ok image list.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okImageList', function defineOkImageList($window) {
            return {
                link: function (scope, ul, attr) {
                    var $ul = $(ul),
                        $li;

                    var scroller = $ul.parent(),
                        scrollerWidth = scroller.outerWidth();
                    scroller.scroll(function () {
                        if (!$li) {
                            $li = $ul.find('li').each(function () {
                                var li = $(this);
                                li.data({
                                    okImg: li.find('img'),
                                    okWidth: li.outerWidth()
                                });
                            });
                        }
                        var x = scroller.scrollLeft() + (scrollerWidth / 2);
                        $li.each(function (i) {
                            var $li = $(this),
                                width = $li.data('okWidth');
                            var dx = ($li.position().left + (width / 2) - x) / scrollerWidth,
                                img = $li.data('okImg');
                            img.css({left:  - (100 * dx) - 100});
                        });
                    });
                }
            }
        });

})(angular, apeman, jQuery);
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
 * @name okStarFlow
 * @description Ok star flow.
*/
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okStarFlow', function defineOkStarFlow() {
            return {

            }
        });

})(angular, apeman);
