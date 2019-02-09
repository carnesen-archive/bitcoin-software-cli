import { testCliThrows, testCli } from '@carnesen/cli';
import { install as cmd } from '../install';

const cli = testCli(cmd);
const cliThrows = testCliThrows(cmd);

describe(cmd.commandName, () => {
  it('runs the @bitcoin-software command "installSoftware"', async () => {
    await cli();
  });

  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
