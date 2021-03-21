import { configSchema, getConfig } from './config';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import { spawnSync } from 'child_process';
import { which } from './util';
import meta from '../package.json';

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
        return true;
      }

      const cmd = spawnSync(which(), ['ozc']);
      if (!cmd.stdout.toString()) {
        return false;
      }

      return true;
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

// This package depends on build, make sure it's installed
export function activate() {
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(meta.name);
  }
}
