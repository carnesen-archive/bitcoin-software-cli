import { option } from '@carnesen/cli';
import { IMPLEMENTATIONS } from '@carnesen/bitcoin-software';

export const targetOptions = {
  version: option({
    typeName: 'string',
    description: 'A semver string that identifies a version of software',
    nullable: false,
  }),
  implementation: option({
    typeName: 'string',
    nullable: false,
    allowedValues: IMPLEMENTATIONS,
  }),
  destination: option({
    typeName: 'string',
    nullable: false,
    description: 'Location where the software will be installed',
  }),
};
