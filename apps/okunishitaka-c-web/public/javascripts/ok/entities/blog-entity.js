/**
 * @ngdoc Object
 * @name BlogEntity
 * @description Blog entity.
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
                    init: function () {
                        var s = this;
                        Object.defineProperties(s, BlogEntity.properties);
                        Entity.prototype.init.apply(s, arguments);
                    },
                    tag_texts: []
                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            BlogEntity.defaults = function () {
                return {}
            };

            BlogEntity.properties = {
                tag_text_joined: {
                    get: function () {
                        var s = this;
                        return s.tag_texts.join(',');
                    },
                    set: function (texts) {
                        var s = this;
                        s.tag_texts = [].concat(texts).join(',').split(',');
                    }
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            BlogEntity.new = function (data) {
                var entity = new BlogEntity(data);

                return entity;
            };

            return BlogEntity;

        });

})(angular);