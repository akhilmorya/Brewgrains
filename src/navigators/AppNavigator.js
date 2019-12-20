import React from 'react';
import {
  Image
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import SplashScreen from '../components/splash/SplashScreen';
import LoginScreenContainer from '../components/login/LoginScreenContainer';
import HomeTabContainer from '../components/home/HomeTabContainer';
import ProductInfoScreenContainer from '../components/home/productInfo/ProductInfoContainer';
import OrderTabContainer from '../components/order/OrderTabContainer';
import OrderDetailsComponent from '../components/order/orderDetails/OrderDetailsComponent';
import ReviewProductComponent from '../components/order/orderDetails/reviewProduct/ReviewProductComponent';
import FavoritesTabContainer from '../components/favorites/FavoritesTabContainer';
import FeedbackScreenContainer from '../components/feedback/FeedbackContainer';
import ProfileTabContainer from '../components/profile/ProfileTabContainer';
import SettingsTabContainer from '../components/settings/SettingsTabContainer';
import AddressComponent from '../components/profile/address/AddressComponent';
import FilterScreenComponent from '../components/home/filter/FilterComponent';
import BrandsComponent from '../components/home/filter/brands/BrandsComponent';
import CategoriesComponent from '../components/home/filter/categories/CategoriesComponent';
import AboutUsTabContainer from '../components/aboutUs/AboutUsTabContainer';
import ForgotPasswordContainer from '../components/login/forgotPassword/ForgotPasswordContainer';
import * as CONST from '../utils/constants';
import scale, { verticalScale } from '../utils/scale';
import SignupScreenContainer from '../components/signup/SignupScreenContainer';
import CartInfoContainer from '../components/home/cart/cartContainer';

const TabNavigator = createBottomTabNavigator({
  HomeTab: { screen: HomeTabContainer },
  OrderTab: { screen: OrderTabContainer },
  FavoritesTab: { screen: FavoritesTabContainer },
  SettingsTab: { screen: SettingsTabContainer },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'HomeTab') {
        iconName = CONST.HOME_TAB_ICON;
      } else if (routeName === 'OrderTab') {
        iconName = CONST.ORDERS_TAB_ICON;
      } else if (routeName === 'FavoritesTab') {
        iconName = CONST.FAVORITES_TAB_ICON;
      } else if (routeName === 'SettingsTab') {
        iconName = CONST.SETTINGS_TAB_ICON;
      }
      // You can return any component that you like here!
      return <Image source={iconName} />
    },
  }),
  tabBarOptions: {
    activeTintColor: CONST.PRIMARY_COLOR,
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: scale(15),
      fontFamily: CONST.fontFamily.JosefBold,
    },
    style: {
      height: scale(80)
    }
  },
});

const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    LoginScreen: { screen: LoginScreenContainer },
    HomeTab: { screen: TabNavigator },
    FeedbackScreen: { screen: FeedbackScreenContainer },
    FilterScreen: { screen: FilterScreenComponent },
    BrandsScreen: { screen: BrandsComponent },
    CategoriesScreen: { screen: CategoriesComponent },
    ProductInfoScreen: { screen: ProductInfoScreenContainer },
    Signup: { screen: SignupScreenContainer },
    ForgotPassword: { screen: ForgotPasswordContainer },
    FavoritesScreen: { screen: FavoritesTabContainer },
    ProfileScreen: { screen: ProfileTabContainer },
    Address: { screen: AddressComponent },
    CartInfoScreen: { screen: CartInfoContainer },
    OrderDetailsScreen: { screen: OrderDetailsComponent },
    ReviewProductScreen: { screen: ReviewProductComponent },
    AboutUsTabScreen: { screen: AboutUsTabContainer }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);
export default createAppContainer(StackNavigator);
