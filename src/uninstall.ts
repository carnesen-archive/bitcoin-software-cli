import { uninstall as uninstallAsync, Implementation } from '@carnesen/bitcoin-software';
import { leaf } from '@carnesen/cli';
import { universalOptions } from './universal-options';

export const uninstall = leaf({
  commandName: 'uninstall',
  options: {
    ...universalOptions,
  },
  async action({ destination, implementation, version }) {
    const typedImplementation = implementation as Implementation;
    const { changed, bitcoinHome } = await uninstallAsync({
      destination,
      implementation: typedImplementation,
      version,
    });
    if (changed) {
      return `Uninstalled bitcoin server software at "${bitcoinHome}"`;
    }
    return `Bitcoin server software is already uninstalled at "${bitcoinHome}"`;
  },
});
