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