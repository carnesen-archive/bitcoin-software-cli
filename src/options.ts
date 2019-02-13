import { option } from '@carnesen/cli';

export const bitcoinHome = option({
  typeName: 'string',
  nullable: false,
  description: `
    Absolute path of the bitcoin installation.
    The version, implementation, and destination
    are all inferred from this string. Examples:
       "~/bitcoin-core-0.17.1"
       "/usr/local/bitcoin-abc-0.18.0"`,
});
