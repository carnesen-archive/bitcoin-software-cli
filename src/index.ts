#!/usr/bin/env node

import { branch, cli } from '@carnesen/cli';

import { install } from './install';
import { uninstall } from './uninstall';

const pkg = require('../package.json');

export const bitcoinSoftware = branch({
  commandName: 'bitcoin-software',
  description: 'A command-line interface for installing bitcoin server software',
  subcommands: [install, uninstall],
  version: pkg.version,
});

if (module === require.main) {
  cli(bitcoinSoftware)();
}
