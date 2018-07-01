import { createStackNavigator } from 'react-navigation';
import InputScreen from './InputScreen';

const RootStack = createStackNavigator({
    Home: {
      screen: InputScreen
    }
  },
  {
    initialRouteName: 'Home',
  });

  export default RootStack;