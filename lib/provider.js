'use babel';

import { platform} from 'os';
import { spawnSync } from 'child_process';

// Package settings
import meta from '../package.json';

this.config = {
  manageDependencies: {
    title: 'Manage Dependencies',
    description: 'When enabled, third-party dependencies will be installed automatically',
    type: 'boolean',
    default: true,
    order: 0
  }
};

// This package depends on build, make sure it's installed
export function activate() {
  if (atom.config.get(meta.name + '.manageDependencies') && !atom.inSpecMode()) {
    this.satisfyDependencies();
  }
}
export function which() {
  if (platform() === 'win32') {
    return 'where';
  }
  return 'which';
}

export function satisfyDependencies() {
  let k;
  let v;

  require('atom-package-deps').install(meta.name);

  const ref = meta['package-deps'];
  const results = [];

  for (k in ref) {
    if (typeof ref !== 'undefined' && ref !== null) {
      v = ref[k];
      if (atom.packages.isPackageDisabled(v)) {
        if (atom.inDevMode()) {
          console.log('Enabling package \'' + v + '\'');
        }
        results.push(atom.packages.enablePackage(v));
      } else {
        results.push(void 0);
      }
    }
  }
  return results;
}

export function provideBuilder() {
  return class OzProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'Oz';
    }

    isEligible() {
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
