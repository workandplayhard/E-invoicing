import { AppRegistry } from 'react-native';

import { initTranslations } from 'config/i18n';

import App from './App';

import { name as appName } from './app.json';

initTranslations();

AppRegistry.registerComponent(appName, () => App);
