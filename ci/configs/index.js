/**
 * @file CI configuration.
 * @module okunishitaka-dot-com/ci/configs
 */

"use strict";

module.exports = {
    get backupConfig() { return require('./backup_config'); },
    get budConfig() { return require('./bud_config'); },
    get chmodConfig() { return require('./chmod_config'); },
    get codeclimateConfig() { return require('./codeclimate_config'); },
    get concatConfig() { return require('./concat_config'); },
    get cpConfig() { return require('./cp_config'); },
    get forkConfig() { return require('./fork_config'); },
    get formatConfig() { return require('./format_config'); },
    get indexConfig() { return require('./index_config'); },
    get istanbulConfig() { return require('./istanbul_config'); },
    get jsdocConfig() { return require('./jsdoc_config'); },
    get minifyConfig() { return require('./minify_config'); },
    get mkdirConfig() { return require('./mkdir_config'); },
    get mochaConfig() { return require('./mocha_config'); },
    get nodeunitConfig() { return require('./nodeunit_config'); },
    get symlinkConfig() { return require('./symlink_config'); },
    get testScaffoldConfig() { return require('./test_scaffold_config'); }
};