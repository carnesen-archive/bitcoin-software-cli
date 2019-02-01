import { branch, cli } from '@carnesen/cli';
import { install } from './install';
import { uninstall } from './uninstall';

export const root = branch({
  commandName: 'bitcoin-software',
  description: 'A command-line interface for installing bitcoin server software',
  subcommands: [install, uninstall],
});

if (module === require.main) {
  cli(root)();
}
