import { install as installAsync, Implementation } from '@carnesen/bitcoin-software';
import { leaf } from '@carnesen/cli';
import { universalOptions } from './universal-options';

export const install = leaf({
  commandName: 'install',
  options: {
    ...universalOptions,
  },
  async action({ destination, implementation, version }) {
    const typedImplementation = implementation as Implementation;
    const { changed, bitcoinHome } = await installAsync({
      destination,
      implementation: typedImplementation,
      version,
    });
    if (changed) {
      return `Installed bitcoin server software to "${bitcoinHome}"`;
    }
    return `Bitcoin server software is already installed at "${bitcoinHome}"`;
  },
});
