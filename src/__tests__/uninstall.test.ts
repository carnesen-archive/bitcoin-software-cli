import { testCliThrows, testCli } from '@carnesen/cli';
import { uninstall as subject } from '../uninstall';

jest.mock('@carnesen/bitcoin-software', () => ({
  uninstallSoftware(bitcoinHome: string) {
    const changed = bitcoinHome === '/foo' ? true : false;
    return { changed };
  },
}));

const cli = testCli(subject);
const cliThrows = testCliThrows(subject);

describe(subject.commandName, () => {
  it('runs the @bitcoin-software command "uninstallSoftware"', async () => {
    expect(await cli('--bitcoinHome /foo')).toMatch('Uninstalled');
    expect(await cli('--bitcoinHome /bar')).toMatch('already uninstalled');
  });

  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
