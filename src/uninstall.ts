import { uninstallSoftware, IMPLEMENTATIONS } from '@carnesen/bitcoin-software';
import { leaf } from '@carnesen/cli';
import { targetOptions } from './target-options';

export const uninstall = leaf({
  commandName: 'uninstall',
  options: {
    ...targetOptions,
  },
  async action({ destination, implementation, version }) {
    const { changed, bitcoinHome } = await uninstallSoftware({
      destination: destination || undefined,
      implementation: (implementation as typeof IMPLEMENTATIONS[number]) || undefined,
      version: version || undefined,
    });
    if (changed) {
      return `Uninstalled bitcoin server software at "${bitcoinHome}"`;
    }
    return `Bitcoin server software is already uninstalled at "${bitcoinHome}"`;
  },
});
