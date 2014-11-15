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
                    }
                }
            }
        })
    ;

})
(angular, apeman, jQuery);