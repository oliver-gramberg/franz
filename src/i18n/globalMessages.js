import { defineMessages } from 'react-intl';

export default defineMessages({
  APIUnhealthy: {
    id: 'global.api.unhealthy',
    defaultMessage: '!!!Can\'t connect to Franz online services',
  },
  notConnectedToTheInternet: {
    id: 'global.notConnectedToTheInternet',
    defaultMessage: '!!!You are not connected to the internet.',
  },
  spellcheckerLanguage: {
    id: 'global.spellchecking.language',
    defaultMessage: '!!!Spell checking language',
  },
  spellcheckerSystemDefault: {
    id: 'global.spellchecker.useDefault',
    defaultMessage: '!!!Use system default ({default})',
  },
  spellcheckerAutomaticDetection: {
    id: 'global.spellchecking.autodetect',
    defaultMessage: '!!!Detect language automatically',
  },
  spellcheckerAutomaticDetectionShort: {
    id: 'global.spellchecking.autodetect.short',
    defaultMessage: '!!!Automatic',
  },
});
