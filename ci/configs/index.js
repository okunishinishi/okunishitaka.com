/**
 * @file CI configuration.
 * @module okunishitaka.com/ci/configs */

"use strict";

module.exports = {
    get backupConfig() { return require('./backup_config'); },    get budConfig() { return require('./bud_config'); },    get chmodConfig() { return require('./chmod_config'); },    get concatConfig() { return require('./concat_config'); },    get cpConfig() { return require('./cp_config'); },    get indexConfig() { return require('./index_config'); },    get mkdirConfig() { return require('./mkdir_config'); },    get nodeunitConfig() { return require('./nodeunit_config'); },    get symlinkConfig() { return require('./symlink_config'); },    get testScaffoldConfig() { return require('./test_scaffold_config'); }
};