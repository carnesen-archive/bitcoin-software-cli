import { testCliThrows, testCli } from '@carnesen/cli';
import { uninstall as cmd } from '../uninstall';

const cli = testCli(cmd);
const cliThrows = testCliThrows(cmd);

describe(cmd.commandName, () => {
  it('runs the @bitcoin-software command "uninstallSoftware"', async () => {
    await cli('--destination /tmp');
  });

  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
