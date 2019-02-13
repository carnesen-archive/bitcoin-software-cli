import { uninstallSoftware } from '@carnesen/bitcoin-software';
import { leaf } from '@carnesen/cli';
import { bitcoinHome } from './options';

export const uninstall = leaf({
  commandName: 'uninstall',
  options: {
    bitcoinHome,
  },
  async action({ bitcoinHome }) {
    const { changed } = await uninstallSoftware(bitcoinHome);
    if (changed) {
      return `Uninstalled bitcoin server software at "${bitcoinHome}"`;
    }
    return `Bitcoin server software is already uninstalled at "${bitcoinHome}"`;
  },
});
