import { configSchema, getConfig } from './config';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import Logger from './log';
import meta from '../package.json';
import which from 'which';

export { configSchema as config };

export function provideBuilder() {
  return class OzProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'Oz';
    }

    isEligible() {
      if (getConfig('alwaysEligible') === true) {
        Logger.log('Always eligible');
        return true;
      }

      if (which.sync('ocz', { nothrow: true })) {
        Logger.log('Build provider is eligible');
        return true;
      }

      Logger.error('Build provider isn\'t eligible');
      return false;
    }

    settings() {
      const errorMatch = [
      ];

      return [
        {
          name: 'Oz --dump',
          exec: 'ozc',
          args: [ '--dump', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'oz:dump',
          errorMatch: errorMatch
        },
        {
          name: 'Oz --execute',
          exec: 'ozc',
          args: [ '--execute', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'oz:execute',
          errorMatch: errorMatch
        },
        {
          name: 'Oz --core',
          exec: 'ozc',
          args: [ '--core', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'oz:core',
          errorMatch: errorMatch
        },
        {
          name: 'Oz --scode',
          exec: 'ozc',
          args: [ '--scode', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'oz:scode',
          errorMatch: errorMatch
        },
        {
          name: 'Oz --ecode',
          exec: 'ozc',
          args: [ '--ecode', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'oz:ecode',
          errorMatch: errorMatch
        },
        {
          name: 'Oz --executable',
          exec: 'ozc',
          args: [ '--executable', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'oz:executable',
          errorMatch: errorMatch
        }
      ];
    }
  };
}

export function activate() {
  Logger.log('Activating package');

  // This package depends on build, make sure it's installed
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(meta.name);
  }
}

export function deactivate() {
  Logger.log('Deactivating package');
}
