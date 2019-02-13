import { testCliThrows, testCli } from '@carnesen/cli';
import { install as subject } from '../install';

jest.mock('@carnesen/bitcoin-software', () => ({
  installSoftware(bitcoinHome: string) {
    const changed = bitcoinHome === '/foo' ? true : false;
    return { changed };
  },
}));

const cli = testCli(subject);
const cliThrows = testCliThrows(subject);

describe(subject.commandName, () => {
  it('runs the @bitcoin-software command "installSoftware"', async () => {
    expect(await cli('--bitcoinHome /foo')).toMatch('Installed');
    expect(await cli('--bitcoinHome /bar')).toMatch('already installed');
  });

  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
