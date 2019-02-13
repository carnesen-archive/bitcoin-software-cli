#!/usr/bin/env node
import { branch, cli } from '@carnesen/cli';

import { install } from './install';
import { uninstall } from './uninstall';
import { toBitcoinHome } from './to-bitcoin-home';

const pkg = require('../package.json');

export const bitcoinSoftware = branch({
  commandName: 'bitcoin-software',
  description: 'Manage bitcoin server software',
  subcommands: [install, uninstall, toBitcoinHome],
  version: pkg.version,
});

if (module === require.main) {
  cli(bitcoinSoftware)();
}
