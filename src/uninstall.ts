import { uninstallSoftware } from '@carnesen/bitcoin-software';
import { leaf } from '@carnesen/cli';
import { targetOptions } from './target-options';

export const uninstall = leaf({
  commandName: 'uninstall',
  options: {
    ...targetOptions,
  },
  async action({ destination, implementation, version }) {
    const { changed, bitcoinHome } = await uninstallSoftware({
      destination,
      implementation: implementation as any,
      version,
    });
    if (changed) {
      return `Uninstalled bitcoin server software at "${bitcoinHome}"`;
    }
    return `Bitcoin server software is already uninstalled at "${bitcoinHome}"`;
  },
});
