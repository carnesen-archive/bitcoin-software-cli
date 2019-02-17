# @carnesen/bitcoin-software-cli [![npm version](https://badge.fury.io/js/%40carnesen%2Fbitcoin-software-cli.svg)](https://badge.fury.io/js/%40carnesen%2Fbitcoin-software-cli) [![Build Status](https://travis-ci.com/carnesen/bitcoin-software-cli.svg?branch=master)](https://travis-ci.com/carnesen/bitcoin-software-cli) 
A command-line interface for installing bitcoin server software

## Install
```
npm install --global @carnesen/bitcoin-software-cli
```

Alternatively, if you don't want to install the package you can run it as a one-off command using `npx`:
```
$ npx @carnesen/bitcoin-software-cli
```

## Usage
Use the `--help` flag to explore the command usage:

```
$ bitcoin-software --help
Usage: bitcoin-software <subcommand> <options>

   Manage bitcoin server software

Subcommands:

   install, uninstall, toBitcoinHome
```

```
$ bitcoin-software install --help
Usage: bitcoin-software install <options>

Options:

   [--implementation <str>] : Defaults to 'core'
                              Allowed values {'core', 'abc'}
   [--version <str>] : Default value is implementation-dependent.
                       A semver string that identifies a version of software.
   [--destination <str>] : Defaults to 'software'.
                           Absolute or datadir-relative path.
```

## Related
- [@carnesen/bitcoin-software](https://github.com/carnesen/bitcoin-software): A Node.js library for managing bitcoin server software
- [@carnesen/cli](https://github.com/carnesen/cli): A Node.js library for building command-line interfaces

## More information
Check out [the unit tests](src/__tests__) to see more examples of how it works. If you encounter any bugs or have any questions or feature requests, please don't hesitate to file an issue or submit a pull request on this project's repository on GitHub.

## License

MIT © [Chris Arnesen](https://www.carnesen.com)
