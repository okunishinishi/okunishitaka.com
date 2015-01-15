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

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            BlogEntity.new = function (data) {
                var entity = new BlogEntity(data);
                Object.defineProperties(entity, {
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
                });
                return entity;
            };

            return BlogEntity;

        });

})(angular);