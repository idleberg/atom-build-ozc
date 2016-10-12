'use babel';

import { install } from 'atom-package-deps';
import { execSync } from 'child_process';
import os from 'os';

// Package settings
import meta from '../package.json';
const notEligible = `**${meta.name}**: \`ozc\` is not in your PATH`;

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
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
      try {
        execSync(`which ozc`);
        if (atom.inDevMode()) atom.notifications.addError(notEligible, { detail: error, dismissable: true });
        return true;
      } catch (e) {
        if (atom.inDevMode()) atom.notifications.addInfo(`**${meta.name}**`, { detail: stdout, dismissable: false });
        return false;
      }
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
