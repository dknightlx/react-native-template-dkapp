import {
    AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import IndexPage from './views/Index';

const App = StackNavigator({
    IndexPage:{
        screen:IndexPage
    }
})

AppRegistry.registerComponent('AppName',()=>App);