// // `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// // on web.
// import '@expo/metro-runtime';

// import { App } from 'expo-router/build/qualified-entry';
// import { renderRootComponent } from 'expo-router/build/renderRootComponent';

// // This file should only import and register the root. No components or exports
// // should be added here.
// renderRootComponent(App);


import { registerRootComponent } from 'expo';
import { registerWidgetTaskHandler } from 'react-native-android-widget';
import '@/node_modules/@expo/metro-runtime';


import { renderRootComponent } from 'expo-router/build/renderRootComponent';

// import App from './App';
import { App } from '@/node_modules/expo-router/build/qualified-entry';
import { widgetTaskHandler } from './components/wid-task-handler';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
registerWidgetTaskHandler(widgetTaskHandler);
renderRootComponent(App);