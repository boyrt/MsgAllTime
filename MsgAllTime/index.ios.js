import { AppRegistry } from 'react-native';
import App from './App'
//import App  from './Art/App'

//import TimePage from './TimePage'


global.__APP__ = true;
global.__ANDROID__ = false;
global.__IOS__ = true;

if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}

AppRegistry.registerComponent('MsgAllTime', () => App);
