import { installSoftware } from '@carnesen/bitcoin-software';
import { leaf } from '@carnesen/cli';
import { bitcoinHome } from './options';

export const install = leaf({
  commandName: 'install',
  options: {
    bitcoinHome,
  },
  async action({ bitcoinHome }) {
    const { changed } = await installSoftware(bitcoinHome);
    if (changed) {
      return `Installed bitcoin server software to "${bitcoinHome}"`;
    }
    return `Bitcoin server software is already installed at "${bitcoinHome}"`;
  },
});
