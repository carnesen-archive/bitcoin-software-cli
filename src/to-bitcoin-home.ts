import {
  IMPLEMENTATIONS,
  toBitcoinHome as toBitcoinHomeFunc,
} from '@carnesen/bitcoin-software';
import { leaf, option } from '@carnesen/cli';

export const toBitcoinHome = leaf({
  commandName: 'toBitcoinHome',
  description: 'Create a "bitcoinHome" string from its constituent parts',
  options: {
    destination: option({
      typeName: 'string',
      nullable: false,
      description: 'Absolute path of a software directory, e.g. "/usr/local"',
    }),
    implementation: option({
      typeName: 'string',
      nullable: false,
      allowedValues: IMPLEMENTATIONS,
    }),
    version: option({
      typeName: 'string',
      nullable: false,
      description: 'Version of the software, e.g. "0.17.1"',
    }),
  },
  async action(namedArgs) {
    return toBitcoinHomeFunc(namedArgs as Parameters<typeof toBitcoinHomeFunc>[0]);
  },
});
