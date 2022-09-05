import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RestaurantDetails from './src/screens/RestaurantDetails';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantDetails: RestaurantDetails,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Seattle Eating',
    },
  }
);

export default createAppContainer(navigator);
