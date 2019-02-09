import { option } from '@carnesen/cli';
import { IMPLEMENTATIONS } from '@carnesen/bitcoin-software';

export const targetOptions = {
  implementation: option({
    typeName: 'string',
    nullable: true,
    allowedValues: IMPLEMENTATIONS,
    description: "Defaults to 'core'",
  }),
  version: option({
    typeName: 'string',
    nullable: true,
    description: `
      Default value is implementation-dependent.
      A semver string that identifies a version of software.`,
  }),
  destination: option({
    typeName: 'string',
    nullable: true,
    description: `
      Defaults to 'software'.
      Absolute or datadir-relative path.`,
  }),
};
