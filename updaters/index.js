// @ts-check

const { updater: keepAChangelogUpdater } = require('./keep-a-changelog');

/** @type {Record<string, (changelog: string, depName: string, currentversion: string, newVersion: string, isLockFileMaintenance: boolean) => string>} */
module.exports = {
  'keep-a-changelog': keepAChangelogUpdater,
};
