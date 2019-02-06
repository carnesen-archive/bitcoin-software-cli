import { installSoftware } from '@carnesen/bitcoin-software';
import { leaf } from '@carnesen/cli';
import { targetOptions } from './target-options';

export const install = leaf({
  commandName: 'install',
  options: {
    ...targetOptions,
  },
  async action({ destination, implementation, version }) {
    const { changed, bitcoinHome } = await installSoftware({
      destination,
      implementation: implementation as any,
      version,
    });
    if (changed) {
      return `Installed bitcoin server software to "${bitcoinHome}"`;
    }
    return `Bitcoin server software is already installed at "${bitcoinHome}"`;
  },
});
