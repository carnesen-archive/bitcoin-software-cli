import { testCliThrows } from '@carnesen/cli';
import { install } from '../install';

const cliThrows = testCliThrows(install);

describe(install.commandName, () => {
  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
